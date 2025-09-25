import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './logo-loop.css';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
};

const toCssLength = (value: any) => (typeof value === 'number' ? `${value}px` : (value ?? undefined));

const useResizeObserver = (callback: () => void, elements: React.RefObject<HTMLElement>[], dependencies: any[]) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

const useImageLoader = (seqRef: React.RefObject<HTMLElement>, onLoad: () => void, dependencies: any[]) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) {
        onLoad();
      }
    };

    images.forEach(img => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener('load', handleImageLoad, { once: true });
        htmlImg.addEventListener('error', handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

const useAnimationLoop = (trackRef: React.RefObject<HTMLElement>, targetVelocity: number, seqWidth: number, isHovered: boolean, pauseOnHover: boolean) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;

      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;

        const translateX = -offsetRef.current;
        track.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
};

interface Logo {
  src?: string;
  alt?: string;
  href?: string;
  node?: React.ReactNode;
  title?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: 'left' | 'right';
  width?: string | number;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LogoLoop = memo<LogoLoopProps>(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = 'Partner logos',
    className,
    style
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLDivElement>(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const directionMultiplier = direction === 'left' ? 1 : -1;
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos]);
    useImageLoader(seqRef, updateDimensions, [logos]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

    const containerStyles = useMemo(() => ({
      width: toCssLength(width),
      '--logoloop-gap': toCssLength(gap),
      '--logoloop-logoHeight': toCssLength(logoHeight),
      '--logoloop-fadeColor': fadeOutColor,
      ...style
    }), [width, gap, logoHeight, fadeOutColor, style]);

    const containerClasses = [
      'logoloop',
      fadeOut && 'logoloop--fade',
      scaleOnHover && 'logoloop--scale-hover',
      className
    ].filter(Boolean).join(' ');

    const logoElements = logos.map((logo, index) => (
      <div key={index} className="logoloop__item">
        {logo.href ? (
          <a
            href={logo.href}
            className="logoloop__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={logo.title || logo.alt}
          >
            {logo.src ? (
              <img src={logo.src} alt={logo.alt || ''} />
            ) : (
              <div className="logoloop__node">{logo.node}</div>
            )}
          </a>
        ) : (
          <>
            {logo.src ? (
              <img src={logo.src} alt={logo.alt || ''} />
            ) : (
              <div className="logoloop__node">{logo.node}</div>
            )}
          </>
        )}
      </div>
    ));

    return (
      <div
        ref={containerRef}
        className={containerClasses}
        style={containerStyles as React.CSSProperties}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={ariaLabel}
      >
        <div ref={trackRef} className="logoloop__track">
          {Array.from({ length: copyCount }, (_, i) => (
            <div key={i} ref={i === 0 ? seqRef : undefined} className="logoloop__list">
              {logoElements}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
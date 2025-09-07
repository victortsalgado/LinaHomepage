import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  gradientWords?: string[];
  size?: 'sm' | 'md' | 'lg' | 'xl';
  style?: React.CSSProperties;
  'data-testid'?: string;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className,
  gradientWords = [],
  size = 'md',
  style,
  'data-testid': testId,
}) => {
  const Component = level;

  // Size mappings for different heading levels
  const sizeClasses = {
    h1: {
      sm: 'text-2xl md:text-3xl lg:text-4xl',
      md: 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
      lg: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
      xl: 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
    },
    h2: {
      sm: 'text-xl md:text-2xl lg:text-3xl',
      md: 'text-2xl md:text-3xl lg:text-4xl',
      lg: 'text-3xl md:text-4xl lg:text-5xl',
      xl: 'text-4xl md:text-5xl lg:text-6xl',
    },
    h3: {
      sm: 'text-lg md:text-xl lg:text-2xl',
      md: 'text-xl md:text-2xl lg:text-3xl',
      lg: 'text-2xl md:text-3xl lg:text-4xl',
      xl: 'text-3xl md:text-4xl lg:text-5xl',
    },
    h4: {
      sm: 'text-base md:text-lg lg:text-xl',
      md: 'text-lg md:text-xl lg:text-2xl',
      lg: 'text-xl md:text-2xl lg:text-3xl',
      xl: 'text-2xl md:text-3xl lg:text-4xl',
    },
    h5: {
      sm: 'text-sm md:text-base lg:text-lg',
      md: 'text-base md:text-lg lg:text-xl',
      lg: 'text-lg md:text-xl lg:text-2xl',
      xl: 'text-xl md:text-2xl lg:text-3xl',
    },
    h6: {
      sm: 'text-xs md:text-sm lg:text-base',
      md: 'text-sm md:text-base lg:text-lg',
      lg: 'text-base md:text-lg lg:text-xl',
      xl: 'text-lg md:text-xl lg:text-2xl',
    },
  };

  const baseClasses = cn(
    'font-lexend font-bold leading-tight',
    sizeClasses[level][size],
    className
  );

  // Function to apply gradient to specific words
  const applyGradientToWords = (text: string, wordsToHighlight: string[]) => {
    if (wordsToHighlight.length === 0) {
      return text;
    }

    let processedText = text;
    
    wordsToHighlight.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      processedText = processedText.replace(
        regex,
        `<span class="bg-gradient-to-r from-[#008F7F] to-[#2EC38C] bg-clip-text text-transparent">${word}</span>`
      );
    });

    return processedText;
  };

  // If children is a string and we have gradient words, process it
  const processContent = () => {
    if (typeof children === 'string' && gradientWords.length > 0) {
      const processedText = applyGradientToWords(children, gradientWords);
      return <span dangerouslySetInnerHTML={{ __html: processedText }} />;
    }
    return children;
  };

  return (
    <Component
      className={baseClasses}
      style={style}
      data-testid={testId}
    >
      {processContent()}
    </Component>
  );
};

export { Heading };
export type { HeadingProps };
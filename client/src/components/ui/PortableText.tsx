import { PortableText as PortableTextReact } from '@portabletext/react';
import { urlFor } from '../../../../lib/sanity';

interface PortableTextProps {
  value: any[];
  className?: string;
}

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          src={urlFor(value).width(800).height(600).url()}
          alt={value.alt || ''}
          className="w-full h-auto my-8 rounded-lg"
        />
      );
    },
  },
  marks: {
    // Strong/Bold text
    strong: ({ children }: any) => (
      <strong className="font-bold text-[var(--lina-dark)]">{children}</strong>
    ),
    // Emphasized/Italic text
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
    // Links
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noindex nofollow' : undefined}
          className="text-[var(--lina-cyan)] hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    // Paragraphs
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
    ),
    // Headings
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-[var(--lina-dark)] mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-[var(--lina-dark)] mb-4 mt-8">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-[var(--lina-dark)] mb-4 mt-6">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-bold text-[var(--lina-dark)] mb-3 mt-6">{children}</h4>
    ),
    // Blockquotes
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[var(--lina-cyan)] pl-6 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    // Unordered lists
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">{children}</ul>
    ),
    // Ordered lists
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-6 text-gray-700 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    // List items
    bullet: ({ children }: any) => <li className="mb-2">{children}</li>,
    number: ({ children }: any) => <li className="mb-2">{children}</li>,
  },
};

export default function PortableText({ value, className = "" }: PortableTextProps) {
  if (!value || !Array.isArray(value)) {
    return null;
  }

  return (
    <div 
      className={`prose prose-lg max-w-none ${className}`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <PortableTextReact
        value={value}
        components={components}
      />
    </div>
  );
}
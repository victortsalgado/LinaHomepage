import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavigationDropdownProps {
  label: string;
  items: DropdownItem[];
  className?: string;
}

export default function NavigationDropdown({ label, items, className = "" }: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="text-gray-600 hover:text-lina-cyan font-normal transition-colors flex items-center text-[13px] text-left"
        data-testid={`button-dropdown-${label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {label}
        <ChevronDown className={`ml-1 h-3 w-3 text-lina-cyan transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-3 hover:bg-gray-50 transition-colors"
              data-testid={`link-dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="font-medium text-gray-900 text-sm">{item.label}</div>
              {item.description && (
                <div className="text-gray-500 text-xs mt-1">{item.description}</div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
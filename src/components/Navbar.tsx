import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  onClick?: (event: React.MouseEvent) => void;
}

interface NavbarProps {
  items: NavItem[];
  children?: React.ReactNode;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ items, children, className }) => {
  return (
    <nav className={cn('p-4', className)}>
      <ul className="flex space-x-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-white hover:text-gray-300"
              onClick={item.onClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </nav>
  );
};

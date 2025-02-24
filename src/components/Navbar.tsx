'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  onClick?: (event: React.MouseEvent) => void;
}

interface NavbarProps {
  items: NavItem[];
  children?: React.ReactNode;
  className?: string;
  logoUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  items,
  children,
  className,
  logoUrl,
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={cn('p-4 flex justify-between items-center', className)}>
      <Link href="/" aria-label="Go to homepage" as={logoUrl}>
        <Image src={logoUrl} alt="Logo" />
      </Link>
      {/* Desktop Navigation (Medium screens and up) */}
      <ul className="hidden md:flex space-x-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-white hover:text-design-green transition-colors duration-300"
              onClick={item.onClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {children}

      {/* Mobile Hamburger Menu Button (Small screens)  */}
      <motion.button
        className="md:hidden text-white hover:text-design-green/85 focus:outline-none z-50"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <XIcon className="size-8" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <MenuIcon className="size-8" />
          </motion.div>
        )}
      </motion.button>

      {/* Mobile menu panel (small screens) - animatePresence for mount/unmount animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 shadow-md bg-neutral-900/95"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <ul className="text-center space-y-4 py-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-design-green transition-colors duration-300 text-lg"
                    onClick={item.onClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

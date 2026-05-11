'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

export default function Header() {
  const t = useTranslations('header');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-bg-secondary/95 backdrop-blur-sm border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className={`font-display text-lg font-semibold tracking-tight transition-colors ${
            scrolled ? 'text-text-primary' : 'text-white'
          }`}
        >
          University Square
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {(['gallery', 'reviews', 'map'] as const).map((section) => (
            <Link
              key={section}
              href={`/#${section}` as any}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-text-secondary' : 'text-white/85'
              }`}
            >
              {t(section)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}

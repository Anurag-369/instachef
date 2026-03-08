'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-foreground font-bold text-lg">🍽</span>
          </div>
          <span className="text-xl font-bold text-foreground">InstaChef</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground hover:text-primary transition">
            How It Works
          </a>
          <a href="#chefs" className="text-foreground hover:text-primary transition">
            Our Chefs
          </a>
          <a href="#cta" className="text-foreground hover:text-primary transition">
            Contact
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <div className="w-6 h-0.5 bg-foreground"></div>
          <div className="w-6 h-0.5 bg-foreground"></div>
          <div className="w-6 h-0.5 bg-foreground"></div>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <nav className="flex flex-col gap-4 p-6">
              <a href="#how-it-works" className="text-foreground hover:text-primary transition">
                How It Works
              </a>
              <a href="#chefs" className="text-foreground hover:text-primary transition">
                Our Chefs
              </a>
              <a href="#cta" className="text-foreground hover:text-primary transition">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-black/5 dark:border-white/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-sm">
            S
          </div>
          <span className="font-semibold text-lg tracking-tight">
            StackTrim
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 dark:text-gray-300">
          <a href="#features" className="hover:text-black dark:hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-black dark:hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#faq" className="hover:text-black dark:hover:text-white transition-colors">
            FAQ
          </a>
        </div>

        {/* CTA */}
        <a
          href="#audit"
          className="rounded-full bg-black dark:bg-white text-white dark:text-black px-5 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Run Audit
        </a>
      </nav>
    </header>
  );
}
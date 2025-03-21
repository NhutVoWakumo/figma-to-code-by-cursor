"use client";

import { Button } from "./Button";
import { Logo } from "./Logo";
import { useState } from "react";

const navItems = [
  { name: "About us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-[100px] w-full relative">
      <div>
        <Logo />
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-[40px]">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="nav-link text-black hover:text-opacity-70 transition-colors"
          >
            {item.name}
          </a>
        ))}

        <Button variant="outline">Request a quote</Button>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden text-black"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isMobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 py-5 px-6">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-black hover:text-opacity-70 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-3">
              <Button variant="outline" className="w-full">
                Request a quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="w-full b border-b border-gray-100 px-4 py-3 font-aboreto">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 relative">
                <Image
                  src="/wanderlust-logo.png"
                  alt="Wanderlust Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              Home
            </Link>
          </div>

          {/* Desktop Right Side - Currency & Language */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Currency Dropdown */}
            <div className="relative">
              <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium">
                AED
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden bg-white shadow-lg border border-gray-200 mt-1 w-32 rounded-md text-sm text-gray-700">
                <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                  AED
                </Link>
                <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                  USD
                </Link>
                <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                  EUR
                </Link>
                <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                  GBP
                </Link>
              </div>
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium">
                English
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden bg-white shadow-lg border border-gray-200 mt-1 w-32 rounded-md text-sm text-gray-700">
                <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                  English
                </Link>
                <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                  العربية
                </Link>
                <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                  Français
                </Link>
                <Link href="#" className="block px-3 py-2 hover:bg-gray-100">
                  Español
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-2 rounded-md"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="/"
                className="text-orange-500 hover:text-orange-600 font-medium transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div className="flex flex-col space-y-2 px-2">
                <div className="text-sm text-gray-600 font-medium">
                  Currency
                </div>
                <div className="relative">
                  <button className="flex items-center text-orange-500 border border-orange-200 px-3 py-2 rounded-md w-full text-left hover:bg-orange-50">
                    AED
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute hidden bg-white shadow-lg border border-gray-200 mt-1 w-full rounded-md text-sm text-gray-700">
                    <Link
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100"
                    >
                      AED
                    </Link>
                    <Link
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100"
                    >
                      USD
                    </Link>
                    <Link
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100"
                    >
                      EUR
                    </Link>
                    <Link
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100"
                    >
                      GBP
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-2 px-2">
                <div className="text-sm text-gray-600 font-medium">
                  Language
                </div>
                <div className="relative">
                  <button className="flex items-center text-orange-500 border border-orange-200 px-3 py-2 rounded-md w-full text-left hover:bg-orange-50">
                    English
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute hidden bg-white shadow-lg border border-gray-200 mt-1 w-full rounded-md text-sm text-gray-700">
                    <Link
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100"
                    >
                      English
                    </Link>
                    <Link
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100"
                    >
                      العربية
                    </Link>
                    <Link
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100"
                    >
                      Français
                    </Link>
                    <Link
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100"
                    >
                      Español
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

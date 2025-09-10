"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // Import usePathname hook
import logo from '@/assests/logo.png';

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("AED");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const pathname = usePathname(); // Use usePathname to get the current path

  // Function to apply active class based on the current path
  const getLinkClass = (href: string) => {
    return pathname === href
      ? "text-[#FB5A10] font-medium transition-colors"
      : "text-white hover:text-orange-600 font-medium transition-colors";
  };

  // Handle selecting a currency
  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
    setIsCurrencyOpen(false);
  };

  // Handle selecting a language
  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <div>
      <nav className="w-full border-b border-gray-100 px-4 py-3 font-aboreto">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 relative">
                <Image
                  src={logo}
                  alt="Wanderlust Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={getLinkClass(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side - Currency & Language */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Currency Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-orange-500 hover:text-orange-600 font-medium"
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              >
                {selectedCurrency}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isCurrencyOpen && (
                <div className="absolute bg-white shadow-lg border border-gray-200 mt-1 w-32 rounded-md text-sm text-gray-700">
                  <button
                    onClick={() => handleCurrencySelect("AED")}
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    AED
                  </button>
                  <button
                    onClick={() => handleCurrencySelect("USD")}
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    USD
                  </button>
                  <button
                    onClick={() => handleCurrencySelect("EUR")}
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    EUR
                  </button>
                  <button
                    onClick={() => handleCurrencySelect("GBP")}
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    GBP
                  </button>
                </div>
              )}
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-orange-500 hover:text-orange-600 font-medium"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                {selectedLanguage}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isLanguageOpen && (
                <div className="absolute bg-white shadow-lg border border-gray-200 mt-1 w-32 rounded-md text-sm text-gray-700">
                  <button
                    onClick={() => handleLanguageSelect("English")}
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageSelect("العربية")}
                    className="block px-3 py-2 hover:bg-gray-100"
                  >
                    العربية
                  </button>
            
           
                </div>
              )}
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
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-orange-500 font-medium transition-colors px-2 ${
                    pathname === item.href ? "text-[#FB5A10]" : "text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex flex-col space-y-2 px-2">
                <div className="text-sm text-gray-600 font-medium">Currency</div>
                <div className="relative">
                  <button
                    onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                    className="flex items-center text-orange-500 border border-orange-200 px-3 py-2 rounded-md w-full text-left hover:bg-orange-50"
                  >
                    {selectedCurrency}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isCurrencyOpen && (
                    <div className="absolute z-30 bg-white shadow-lg border border-gray-200 mt-1 w-full rounded-md text-sm text-gray-700">
                      <button
                        onClick={() => handleCurrencySelect("AED")}
                        className="block px-3 py-2 hover:bg-gray-100"
                      >
                        AED
                      </button>
                      <button
                        onClick={() => handleCurrencySelect("USD")}
                        className="block px-3 py-2 hover:bg-gray-100"
                      >
                        USD
                      </button>
             
                  
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col space-y-2 px-2">
                <div className="text-sm text-gray-600 font-medium">Language</div>
                <div className="relative">
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="flex items-center text-orange-500 border border-orange-200 px-3 py-2 rounded-md w-full text-left hover:bg-orange-50"
                  >
                    {selectedLanguage}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isLanguageOpen && (
                    <div className="absolute bg-white shadow-lg border border-gray-200 mt-1 w-full rounded-md text-sm text-gray-700">
                      <button
                        onClick={() => handleLanguageSelect("English")}
                        className="block px-3 py-2 hover:bg-gray-100"
                      >
                        English
                      </button>
                      <button
                        onClick={() => handleLanguageSelect("العربية")}
                        className="block px-3 py-2 hover:bg-gray-100"
                      >
                        العربية
                      </button>
             
                
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

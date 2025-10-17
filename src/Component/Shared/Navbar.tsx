'use client';

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname, Link } from "@/utils/navigation";
import logo from "@/assests/logo.png";

export function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const tCommon = useTranslations();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(tCommon("currency"));
  const [selectedLanguage, setSelectedLanguage] = useState(
    locale === "en" ? "English" : "العربية"
  );

  const pathname = usePathname();
  const router = useRouter();

  // ✅ Handle locale change manually (no next-intl/navigation)
  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);

    const newLocale = language === "English" ? "en" : "ar";

    // When you are on the root path
    if (!pathname.startsWith(`/${locale}`)) {
      router.push(`/${newLocale}`);
      router.refresh();
      return;
    }

    // Replace current locale in the path
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    router.refresh();
  };



  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
    setIsCurrencyOpen(false);
  };

  const toggleCurrencyDropdown = () => {
    setIsCurrencyOpen(!isCurrencyOpen);
    if (isLanguageOpen) setIsLanguageOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
    if (isCurrencyOpen) setIsCurrencyOpen(false);
  };

  // ✅ Localized path builder
  const localizedPath = (href: string) => `/${locale}${href === "/" ? "" : href}`;

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("category"), href: "/category" },
    { name: t("about"), href: "/about" },
    { name: t("blogs"), href: "/blogs" },
    { name: t("contact"), href: "/contact" },
  ];

  const getLinkClass = (href: string) => {
    const categoryRoutes = [
      "/category",
      "/payment",
      "/bookNow",
      "/personalInfo",
      "/otpVerification",
    ];

    if (href === "/category" && categoryRoutes.includes(pathname)) {
      return "text-[#FB5A10] font-medium transition-colors";
    }

    return pathname === href
      ? "text-[#FB5A10] font-bold transition-colors"
      : "text-black hover:text-orange-600 font-medium transition-colors";
  };

  return (
    <nav className="w-full px-4 py-3 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 font-aboreto">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-14 h-14 relative">
            <Image src={logo} alt="Logo" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={localizedPath(item.href)}
              className={getLinkClass(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Currency */}
          <div className="relative">
            <button
              className="flex items-center text-orange-500 hover:text-orange-600 font-medium"
              onClick={toggleCurrencyDropdown}
            >
              {/* {selectedCurrency} */}
              AED
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {/* {isCurrencyOpen && (
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
              </div>
            )} */}
          </div>

          {/* Language */}
          <div className="relative">
            <button
              className="flex items-center text-orange-500 hover:text-orange-600 font-medium"
              onClick={toggleLanguageDropdown}
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
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100 bg-transparent backdrop-blur-md">
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={localizedPath(item.href)}
                className={`text-orange-500 font-medium transition-colors px-2 ${
                  pathname === item.href ? "text-[#FB5A10]" : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Currency (Mobile) */}
           
          <div className="relative">
            <button
              className="flex items-center text-orange-500 hover:text-orange-600 font-medium"
              onClick={toggleCurrencyDropdown}
            >
              {/* {selectedCurrency} */}
              AED
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {/* {isCurrencyOpen && (
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
              </div>
            )} */}
          </div>

            {/* Language (Mobile) */}
            <div className="flex flex-col space-y-2 px-2">
              <div className="text-sm text-black font-medium">Language</div>
              <button
                onClick={toggleLanguageDropdown}
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
      )}
    </nav>
  );
}

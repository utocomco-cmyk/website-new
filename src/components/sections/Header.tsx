"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { LanguageSwitcher, useTranslation } from "@/components/LanguageSwitcher";

const getNavItems = (t: Record<string, string>) => [
  { name: t.home || "Home", href: "/" },
  { name: t.products || "Products", href: "/products" },
  { name: t.solutions || "Solutions", href: "/solutions" },
  { name: t.support || "Support", href: "/support" },
  { name: t.about || "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const { t } = useTranslation();
  const navItems = getNavItems(t);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-sm">UC</span>
            </div>
            <div>
              <span className={`font-bold text-lg leading-none ${scrolled ? 'text-gray-900' : 'text-white'}`}>Utocom</span>
              <span className={`text-xs block leading-none mt-0.5 ${scrolled ? 'text-blue-600' : 'text-blue-400'}`}>Industrial Vision</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? scrolled ? "text-blue-600 bg-blue-50" : "text-blue-400 bg-blue-500/10"
                      : scrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className={`hidden md:flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-colors ${
              scrolled 
                ? "text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300" 
                : "text-gray-300 hover:text-white border border-white/10 hover:border-white/20"
            }`}>
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
            <QuoteForm
              buttonText="Get Quote"
              buttonVariant="default"
              buttonClassName="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white"
              source="header"
            />
            
            {/* Language Switcher */}
            <div className={scrolled ? "text-gray-600" : "text-white"}>
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger>
                <Button variant="ghost" size="icon" className={scrolled ? "text-gray-600 md:hidden" : "text-gray-300 md:hidden"}>
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-gray-200 w-[280px]">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`py-2 text-lg font-medium transition-colors ${
                          active ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  <div className="mt-4">
                    <QuoteForm
                      buttonText="Get Quote"
                      buttonVariant="default"
                      buttonClassName="w-full bg-blue-600 hover:bg-blue-500"
                      source="mobile_menu"
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

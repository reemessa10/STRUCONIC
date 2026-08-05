"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Moon, Sun, Phone } from "lucide-react";
import { company } from "@/lib/content";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services", mega: true },
  { label: "مشاريعنا", href: "#projects" },
  { label: "لماذا ستركونيك", href: "#whyus" },
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "تواصل معنا", href: "#contact" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-navy-900/95 backdrop-blur shadow-soft py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-page flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <div className="bg-white rounded-lg px-3 py-1.5 shadow-md">
            <div className="relative h-9 md:h-10 w-32 md:w-36">
              <Image src="/images/brand/logo-full.jpg" alt="شعار ستركونيك للمقاولات" fill className="object-contain" />
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => link.mega && setMegaOpen(true)}
              onMouseLeave={() => link.mega && setMegaOpen(false)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm text-navy-100 hover:text-gold-400 transition-colors font-medium"
              >
                {link.label}
                {link.mega && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>

              {link.mega && megaOpen && (
                <div className="absolute top-full right-1/2 translate-x-1/2 pt-4 w-[640px]">
                  <div className="bg-white rounded-xl shadow-soft border border-navy-100 p-6 grid grid-cols-2 gap-2">
                    {["المقاولات العامة", "تنفيذ المنشآت الخرسانية", "التشطيبات الداخلية والخارجية", "أعمال البنية التحتية", "الأعمال الكهروميكانيكية", "تنفيذ أعمال اللاند سكيب"].map((title) => (
                      <Link
                        key={title}
                        href="#services"
                        className="flex flex-col gap-0.5 rounded-lg px-3 py-2 hover:bg-paper transition-colors"
                      >
                        <span className="text-sm font-heading font-semibold text-navy-900">{title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${company.phone}`} className="flex items-center gap-2 text-navy-100 text-sm hover:text-gold-400 transition-colors">
            <Phone className="h-4 w-4" />
            <span dir="ltr">{company.phone}</span>
          </a>
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="تبديل الوضع الليلي"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-600 text-navy-100 hover:border-gold-400 hover:text-gold-400 transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link href="#contact" className="btn-primary !py-2.5 !px-5 text-xs">
            اطلب استشارة
          </Link>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="فتح القائمة"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-navy-700 mt-4">
          <div className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-navy-100 text-sm border-b border-navy-800 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

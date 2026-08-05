import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, MessageCircle, Facebook, Linkedin } from "lucide-react";
import { company } from "@/lib/content";

const quickLinks = [
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "مشاريعنا", href: "#projects" },
  { label: "تواصل معنا", href: "#contact" }
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100 pt-20 pb-8">
      <div className="container-page grid md:grid-cols-4 gap-12 mb-14">
        <div>
          <div className="mb-5">
            <div className="bg-white rounded-lg px-3 py-2 inline-block">
              <div className="relative h-10 w-36">
                <Image src="/images/brand/logo-full.jpg" alt="شعار ستركونيك للمقاولات" fill className="object-contain" />
              </div>
            </div>
          </div>
          <p className="text-sm text-navy-300 leading-relaxed">
            شريكك الموثوق في المقاولات العامة والإنشاءات والتشطيبات بالمملكة العربية السعودية.
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-white mb-5">روابط سريعة</h3>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-navy-300 hover:text-gold-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-white mb-5">بيانات التواصل</h3>
          <ul className="space-y-3 text-sm text-navy-300 text-right">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
              {company.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-400 shrink-0" />
              <span dir="ltr">{company.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-gold-400 shrink-0" />
              <span dir="ltr">{company.whatsapp}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-400 shrink-0" />
              {company.email}
            </li>
            <li className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
              {company.workingHours}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-white mb-5">تابعنا</h3>
          <div className="flex items-center gap-3">
            {[Facebook, Linkedin, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="وسائل التواصل الاجتماعي"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page pt-8 border-t border-navy-800 text-center">
        <p className="text-xs text-navy-400">
          &copy; {new Date().getFullYear()} ستركونيك للمقاولات. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Cairo, Tajawal, Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import CookieNotice from "@/components/CookieNotice";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap"
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  title: "ستركونيك للمقاولات | STRUCONIC CONSTRUCTION",
  description:
    "شركة ستركونيك للمقاولات، إحدى الشركات السعودية الرائدة في مجال المقاولات العامة والإنشاءات والهندسة المدنية والبنية التحتية والتشطيبات، بخبرة ممتدة وحلول عقارية مبتكرة تلبي احتياجات العملاء وتتجاوز توقعاتهم.",
  keywords: [
    "شركة مقاولات بالرياض",
    "ستركونيك للمقاولات",
    "مقاولات عامة السعودية",
    "تشطيبات فلل",
    "إنشاءات وبنية تحتية",
    "STRUCONIC CONSTRUCTION"
  ],
  openGraph: {
    title: "ستركونيك للمقاولات | STRUCONIC CONSTRUCTION",
    description:
      "شريكك الموثوق في المقاولات العامة والإنشاءات والتشطيبات بالمملكة العربية السعودية.",
    locale: "ar_SA",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable} ${poppins.variable}`}>
      <body className="antialiased overflow-x-hidden">
        <ScrollProgress />
        {children}
        <WhatsAppButton />
        <BackToTop />
        <CookieNotice />
      </body>
    </html>
  );
}

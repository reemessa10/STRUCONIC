"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <Image
          src="/images/projects/project-06.jpg"
          alt="مشروع إنشائي لستركونيك للمقاولات"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/85 to-navy-900/60" />
      </div>

      <div className="container-page relative z-10 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="section-eyebrow !mb-6">
            <Building2 className="h-4 w-4" />
            شركة سعودية رائدة في المقاولات والإنشاءات
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white leading-[1.15] mb-6">
            نبني الثقة قبل أن نبني <span className="text-gold-400">المباني</span>
          </h1>
          <p className="text-navy-100 text-lg leading-relaxed mb-10 max-w-xl">
            ستركونيك للمقاولات تقدّم حلولاً هندسية وإنشائية متكاملة، من المقاولات العامة والبنية التحتية إلى التشطيبات الفاخرة، بجودة تنافس كبرى الشركات وخبرة تراكمية تقود النهضة العمرانية بالمملكة.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#contact" className="btn-primary bg-gold-500 hover:bg-gold-600">
              اطلب عرض سعر
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link href="#projects" className="btn-outline border-navy-100 text-white hover:bg-white hover:text-navy-900">
              استعرض مشاريعنا
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gold-line" />
    </section>
  );
}

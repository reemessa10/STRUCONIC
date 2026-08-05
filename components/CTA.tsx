"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Phone } from "lucide-react";
import { company } from "@/lib/content";

export default function CTA() {
  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "linear-gradient(45deg, #B08D57 25%, transparent 25%, transparent 75%, #B08D57 75%), linear-gradient(45deg, #B08D57 25%, transparent 25%, transparent 75%, #B08D57 75%)",
        backgroundSize: "60px 60px",
        backgroundPosition: "0 0, 30px 30px"
      }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container-page relative z-10 text-center max-w-2xl mx-auto"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">
          هل لديك مشروع تريد إنجازه بثقة؟
        </h2>
        <p className="text-navy-100 mb-10">
          تواصل مع فريق ستركونيك اليوم واحصل على استشارة مجانية.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-gold-500 hover:bg-gold-600"
          >
            تواصل عبر واتساب
            <ArrowLeft className="h-4 w-4" />
          </a>
          <a href={`tel:${company.phone}`} className="btn-outline border-navy-100 text-white hover:bg-white hover:text-navy-900">
            <Phone className="h-4 w-4" />
            <span dir="ltr">{company.phone}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

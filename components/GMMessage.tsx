"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { gmMessage } from "@/lib/content";

export default function GMMessage() {
  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="/images/projects/project-06.jpg" alt="" fill className="object-cover" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container-page relative z-10 max-w-4xl mx-auto text-center"
      >
        <div className="section-eyebrow !mx-auto !text-gold-400">كلمة المدير العام</div>
        <div className="text-5xl text-gold-500 font-heading mb-4">&rdquo;</div>
        <p className="text-navy-100 text-lg md:text-xl leading-loose mb-8">{gmMessage}</p>
        <div className="w-16 h-px bg-gold-500 mx-auto mb-4" />
        <p className="font-heading text-white font-semibold">المدير العام</p>
        <p className="text-navy-300 text-sm">ستركونيك للمقاولات</p>
      </motion.div>
    </section>
  );
}

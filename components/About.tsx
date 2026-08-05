"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Award, Users } from "lucide-react";
import { aboutUs } from "@/lib/content";

const points = [
  { icon: ShieldCheck, title: "التزام والمصداقية", desc: "تسليم المشاريع في مواعيدها بمعايير جودة واضحة." },
  { icon: Award, title: "خبرة متراكمة", desc: "خبرات تراكمية في تنفيذ مشاريع سكنية وإنشائية متنوعة." },
  { icon: Users, title: "فريق متخصص", desc: "كوادر هندسية وفنية متخصصة في جميع مراحل التنفيذ." }
];

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-soft">
            <Image src="/images/projects/project-05.jpg" alt="مشروع إنشائي" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-navy-900 rounded-2xl p-6 shadow-soft hidden md:block">
            <p className="text-4xl font-heading font-bold text-gold-400">+140</p>
            <p className="text-navy-100 text-sm">فيلا ومشروع منفّذ</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-eyebrow">من نحن</div>
          <h2 className="section-title">شريكك الموثوق في عالم المقاولات</h2>
          <p className="text-navy-500 leading-loose mb-8">{aboutUs}</p>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {points.map((p) => (
              <div key={p.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 mb-3">
                  <p.icon className="h-5 w-5 text-gold-400" />
                </div>
                <p className="font-heading font-semibold text-navy-900 text-sm mb-1">{p.title}</p>
                <p className="text-navy-400 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <Link href="#services" className="btn-outline">
            المزيد عن الشركة
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

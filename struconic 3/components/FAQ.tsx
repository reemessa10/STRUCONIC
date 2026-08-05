"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "ما هي المدة الزمنية المتوقعة لتنفيذ مشروع سكني؟",
    a: "تختلف المدة حسب حجم ونوع المشروع، وتُحدد بدقة بعد دراسة المخططات ومتطلبات العميل."
  },
  {
    q: "هل تقدمون خدمة الإشراف الهندسي فقط دون التنفيذ؟",
    a: "نعم، نوفر خدمات الإشراف على التنفيذ بشكل منفصل لضمان جودة الأعمال."
  },
  {
    q: "هل يمكن الدفع على أقساط ميسّرة؟",
    a: "نعم، نوفر خيارات دفع مرنة وأقساط ميسّرة تناسب احتياجات عملائنا."
  },
  {
    q: "في أي مدن المملكة تعملون؟",
    a: "مقرنا الرئيسي في الرياض، ونعمل على تنفيذ مشاريع في مختلف مناطق المملكة."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container-page max-w-3xl">
        <div className="text-center mb-14">
          <div className="section-eyebrow !mx-auto">الأسئلة الشائعة</div>
          <h2 className="section-title">أسئلة يتكرر طرحها من عملائنا</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-navy-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-right bg-paper hover:bg-navy-50 transition-colors"
              >
                <span className="font-heading font-semibold text-navy-900 text-sm">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-gold-500 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 py-5 text-navy-400 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

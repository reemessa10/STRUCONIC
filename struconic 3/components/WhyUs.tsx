"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { whyUs, stats } from "@/lib/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="counter-number">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-eyebrow !mx-auto">لماذا ستركونيك</div>
          <h2 className="section-title">أسباب تجعلك تختار شركة ستركونيك</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-4 mb-20">
          {whyUs.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-start gap-3 py-3 border-b border-navy-100"
            >
              <CheckCircle2 className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
              <p className="text-navy-500 text-sm leading-relaxed">{reason}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl bg-navy-900 p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <p className="text-navy-100 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

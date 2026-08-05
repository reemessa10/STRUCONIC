"use client";

import { motion } from "framer-motion";
import { vision, goal } from "@/lib/content";

export default function Vision() {
  return (
    <section className="py-24 bg-white">
      <div className="container-page grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-paper rounded-2xl p-10 border border-navy-100"
        >
          <div className="section-eyebrow">رؤيتنا</div>
          <p className="text-navy-500 leading-loose">{vision}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-navy-900 rounded-2xl p-10"
        >
          <div className="section-eyebrow !text-gold-400">هدفنا</div>
          <p className="text-navy-100 leading-loose">{goal}</p>
        </motion.div>
      </div>
    </section>
  );
}

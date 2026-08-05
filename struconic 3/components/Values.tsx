"use client";

import { motion } from "framer-motion";
import { values } from "@/lib/content";

export default function Values() {
  return (
    <section className="py-24 bg-paper">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-eyebrow !mx-auto">قيمنا</div>
          <h2 className="section-title">المبادئ التي نؤمن بها بشكل مطلق</h2>
          <p className="text-navy-400">
            نحرص في جميع أعمالنا على الالتزام التام والتطبيق العملي لقواعد السلوك المهني، وللقيم والمبادئ التي نؤمن بها بشكل مطلق.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((value, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-hover bg-white rounded-xl border border-navy-100 p-5 text-center"
            >
              <div className="w-2 h-2 rounded-full bg-gold-500 mx-auto mb-3" />
              <p className="font-heading font-semibold text-navy-900 text-sm">{value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

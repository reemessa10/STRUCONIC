"use client";

import { motion } from "framer-motion";
import {
  Building, Layers, Boxes, Paintbrush, Wrench, Droplets,
  ShieldCheck, Network, Waves, Zap, ClipboardCheck, Settings,
  Mountain, ArrowUpDown, Fan, Trees, LucideIcon
} from "lucide-react";
import { services } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  building: Building, layers: Layers, boxes: Boxes, paintbrush: Paintbrush,
  wrench: Wrench, droplets: Droplets, "shield-check": ShieldCheck, network: Network,
  waves: Waves, zap: Zap, "clipboard-check": ClipboardCheck, settings: Settings,
  mountain: Mountain, "arrow-up-down": ArrowUpDown, fan: Fan, trees: Trees
};

export default function Services() {
  return (
    <section className="py-24 bg-paper">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-eyebrow !mx-auto">خدماتنا</div>
          <h2 className="section-title">حلول مقاولات متكاملة تحت سقف واحد</h2>
          <p className="text-navy-400">
            من التصميم إلى التسليم، نغطي كل مراحل المشروع بخبرة هندسية ودقة تنفيذية عالية.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map((service, i) => {
            const Icon = iconMap[service.icon] ?? Building;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-hover bg-white rounded-xl border border-navy-100 p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 mb-5">
                  <Icon className="h-5.5 w-5.5 text-gold-400" />
                </div>
                <h3 className="font-heading font-semibold text-navy-900 mb-2">{service.title}</h3>
                <p className="text-navy-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

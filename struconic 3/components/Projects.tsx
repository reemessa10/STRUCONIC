"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Search, X, ChevronRight, ChevronLeft } from "lucide-react";
import { projects } from "@/lib/content";

export default function Projects() {
  const featured = projects;
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [photoIdx, setPhotoIdx] = useState(0);

  const openLightbox = (idx: number) => {
    setOpenIdx(idx);
    setPhotoIdx(0);
  };

  const closeLightbox = () => setOpenIdx(null);

  const nav = (dir: 1 | -1) => {
    if (openIdx === null) return;
    const total = featured[openIdx].count;
    setPhotoIdx((prev) => (prev + dir + total) % total);
  };

  const current = openIdx !== null ? featured[openIdx] : null;

  return (
    <section className="py-24 bg-navy-900">
      <div className="container-page">
        <div className="mb-14">
          <div className="section-eyebrow">أبرز مشاريعنا</div>
          <h2 className="section-title !text-white">أعمال تتحدث عن جودتنا</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => openLightbox(i)}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="flex items-center gap-2 bg-white/90 text-navy-900 text-xs font-heading font-semibold px-4 py-2 rounded-full">
                  <Search className="h-3.5 w-3.5" />
                  عرض {project.count} صور
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-block bg-gold-500 text-white text-[11px] font-heading font-semibold px-2.5 py-1 rounded mb-2">
                  {project.category}
                </span>
                <h3 className="font-heading font-semibold text-white mb-1">{project.title}</h3>
                <p className="flex items-center gap-1 text-navy-100 text-xs">
                  <MapPin className="h-3 w-3" />
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          >
            <button
              onClick={closeLightbox}
              aria-label="إغلاق"
              className="absolute top-6 left-6 text-white hover:text-gold-400 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={() => nav(-1)}
              aria-label="السابق"
              className="absolute right-4 md:right-8 text-white hover:text-gold-400 z-10"
            >
              <ChevronRight className="h-9 w-9" />
            </button>
            <button
              onClick={() => nav(1)}
              aria-label="التالي"
              className="absolute left-4 md:left-8 text-white hover:text-gold-400 z-10"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>

            <div className="max-w-4xl w-full px-6">
              <div className="relative w-full aspect-[4/3] max-h-[75vh]">
                <Image
                  src={`/images/galleries/${current.gallery}/${String(photoIdx + 1).padStart(2, "0")}.jpg`}
                  alt={current.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-white font-heading font-semibold">{current.title}</p>
                <p className="text-navy-300 text-sm">
                  {photoIdx + 1} / {current.count}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// src/components/SectionPaketKomplitBelajarAgamaIslam.jsx
"use client";

import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import ItemIllustration1 from "@/components/ItemIllustration1";

export default function SectionPaketKomplitBelajarAgamaIslam({
  label,
  className = "",
}) {
  // Dummy data untuk looping
  const items = [
    { label: "Aqidah & Tauhid" },
    { label: "Adab & Akhlak" },
    { label: "Fiqih Ibadah" },
    { label: "Fiqih Muamalah" },
    { label: "Ulumul Qur’an" },
    { label: "Hadits" },
    { label: "Bahasa Arab" },
  ];

  return (
    <section className="bg-base">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-0.5 text-subtitle-1 txet-primary opacity-[0.64]">
          Ilmu Syar’i yang Menyeluruh
        </div>
        <h3 className="text-h3 mb-2">
          Paket Komplit
          <span className="text-secondary block"> Belajar Agama Islam</span>
        </h3>
        <div className="mb-0.5 text-secondary text-subtitle-2 opacity-[0.72]">
          Bekal Menunaikan Seluruh Kewajiban Seorang Hamba dalam Kehidupan
        </div>
        {/* <div className="flex gap-5 justify-center mt-16"> */}
        <div className="max-w-[888px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-5 mt-16">
          {items.map((item, index) => (
            <ItemIllustration1 key={index} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

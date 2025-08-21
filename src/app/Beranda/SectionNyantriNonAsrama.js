// src/components/SectionNyantriNonAsrama.jsx
"use client";

import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import ItemIllustration1 from "@/components/ItemIllustration1";

export default function SectionNyantriNonAsrama({
  
  label,
  className = ""
}) {
  // Dummy data untuk looping
  const items = [
    { label: "Kajian Kitab Rutin" },
    { label: "Belajar Urut dan Bertahap" },
    { label: "Dibimbing Asatidzah Alumni Timur Tengah" },
    { label: "Waktu Pembelajaran di Luar Jam Kantor & Kuliah" },
    { label: "Lokasi Pembelajaran Berada di Pusat Kota" },
    { label: "Ilmu Syar’i yang Menyeluruh" },
  ];

  return (
    <section className="bg-base">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-0.5 text-subtitle-1 txet-primary opacity-[0.64]">
          Siapa saja boleh ikut
        </div>
        <h3 className="text-h3 mb-2">
          Nyantri Non-Asrama
          <span className="text-secondary"> di Pagi & Malam</span>
        </h3>
        <div className="mb-0.5 text-secondary text-subtitle-2 opacity-[0.72]">
          Terbuka Untuk Mahasiswa, Pekerja, & Semua Kalangan
        </div>
        {/* <div className="flex gap-5 justify-center mt-16"> */}
        <div className="max-w-[888px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-5 mt-16">
          {items.map((item, index) => (
            <ItemIllustration1 key={index} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

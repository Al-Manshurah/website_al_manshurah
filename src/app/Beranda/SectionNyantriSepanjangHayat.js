// src/components/SectionNyantriSepanjangHayat.jsx
"use client";

import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import ItemIllustration1 from "@/components/ItemIllustration1";

export default function SectionNyantriSepanjangHayat({
  href,
  label,
  className = "",
}) {
  // Dummy data untuk looping
  const items = [
    { label: "Kajian Kitab Rutin" },
    { label: "Tahsin Al-Qur’an" },
    { label: "Halaqah Bahasa Arab" },
    { label: "Kajian Aqidah" },
    { label: "Pembahasan Fiqih" },
    { label: "Diskusi Tematik Islam" },
  ];

  return (
    // <section className="bg-base">
    <section className="bg-primary/[0.025]">
      <div className="max-w-7xl mx-auto ">
        <div className="mb-3 text-primary text-subtitle-2 opacity-[0.72]">
          Menimba Ilmu Sepanjang Hayat
        </div>
        <div className="flex">
          <h3 className="text-h1 mb-2 italic">
            Santri Sejati
            <span className="text-secondary">
              , <br />
              Belajar Hingga Ajal Mendapati
            </span>
          </h3>
          <div className="bg-primary/10 !h-[320px] !w-[320px] min-h-[320px] min-w-[320px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

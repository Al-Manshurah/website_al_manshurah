// src/components/SectionNyantriSambilMempraktikkanPelajaran.jsx
"use client";

import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import ItemIllustration1 from "@/components/ItemIllustration1";

export default function SectionNyantriSambilMempraktikkanPelajaran({
  label,
  className = "",
}) {
  // Dummy data untuk looping
  const items = [
    { label: "Belajar Tajwid Sambil Setoran Tahsin & Tahfizh Al Qur’an" },
    { label: "Belajar Bahasa Arab Sambil Baca Kitab & Praktif Komunikasi" },
    { label: "Belajar Materi Qurban Serta Praktik Menyembelih Qurban Sendiri" },
  ];

  return (
    <section className="bg-base">
      <div className="flex gap-5">
        <div className="w-1/2">
          <div className="mb-0.5 text-subtitle-1 txet-primary opacity-[0.64]">
            Kapan lagi bisa
          </div>
          <div className="relative">
            <h3 className="text-h3 mb-2">
              Nyantri Sambil
              <span className="text-secondary"> Mempraktikkan Pelajaran</span>
            </h3>
            <svg
              className="absolute left-0 top-[88px]"
              width="511"
              height="475"
              viewBox="0 0 511 475"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.2"
                cx="237.5"
                cy="237.5"
                r="237.5"
                fill="#01002B"
              />
              <ellipse cx="368.5" cy="332" rx="142.5" ry="143" fill="#1E1D75" />
            </svg>
          </div>
          {/* <div className="mb-0.5 text-secondary text-subtitle-2 opacity-[0.72]">
            Teks
          </div> */}
        </div>
        {/* <div className="flex gap-5 justify-center mt-16"> */}
        <div className="w-1/2 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-14 gap-x-5 text-center">
          {items.map((item, index) => (
            <ItemIllustration1 key={index} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

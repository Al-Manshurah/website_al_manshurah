// src/components/SectionHero.jsx
"use client";

import Link from "next/link";
import ItemIllustration1 from "@/components/ItemIllustration1";
import { RiArrowRightLine } from "@remixicon/react";
import BtnCTA1 from "@/components/BtnCTA1";

export default function SectionHero({ href, label, className = ""}) {
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
    <section className="bg-gradient-primary">
      <div className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center text-white">
        {/* <div className="bg-black/50 absolute inset-0" /> */}
        <div className="z-[1] absolute mx-auto inset-0 bg-gradient-primary opacity-80"></div>
        <div className="w-2/3 mx-auto px-4 relative  z-[2] text-center">
          <div className="w-full mx-auto">
            <h1 className="text-h3 mb-3">Nyantri Sunnah di Kota Santri!</h1>
            <p className="text-subtitle-1 opacity-[0.64] mb-9">
              Siapa saja bisa belajar Agama Islam dari dasar sesuai tuntunan Al
              Qur’an dan Sunnah berdasarkan pemahaman Salafush Shaleh secara
              runtut dan sistematis walaupun angin kesibukan kuliah dan bekerja
              telah menerpa.
            </p>
            <BtnCTA1 href="#tentang" label="Lihat Jadwal Kajian" />
          </div>

          <div className="w-full h-full"></div>
        </div>
      </div>
    </section>
  );
}

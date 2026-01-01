// src/components/SectionNggaAdaAlasanNggaNyantri.jsx
"use client";

import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import ItemIllustrationHorizontal1 from "@/components/ItemIllustrationHorizontal1";

export default function SectionNggaAdaAlasanNggaNyantri({
  label,
  className = "",
}) {
  // Dummy data untuk looping
  const items = [
    { label: "Jadwal Pembelajaran Dilaksanakan di Luar Jam Kerja dan Kantor" },
    {
      label:
        "Lokasi Pembelajar di Sekitaran Pusat (Dekat Kampus & Tempat Kerja)",
    },
    {
      label:
        "Materi Dirancang Untuk Belajar Secara Runtut dan Bertahap Sepanjang Hayat",
    },
  ];

  return (
    <section className="bg-base">
      <div className="flex gap-5">
        <div className="w-1/2">
          {/* <div className="mb-0.5 text-subtitle-1 txet-primary opacity-[0.64]">
            teks 
          </div> */}
          <div className="relative">
            <h3 className="text-h3 mb-6">
              Ngga Ada Alasan Lagi
              <span className="text-secondary">
                {" "}
                Untuk Ngga Nyantri & Ngaji Lagi Karena:
              </span>
            </h3>
            <ul className="mb-0.5 list-decimal list-inside italic text-secondary text-subtitle-2 opacity-[0.72]">
              <li>Sibuk Kuliah</li>
              <li>Sibuk Kerja</li>
              <li>Umur Sudah Tua</li>
              <li>dll.</li>
            </ul>
            {/* <svg
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
            </svg> */}
          </div>
          {/* <div className="mb-0.5 text-secondary text-subtitle-2 opacity-[0.72]">
            Teks
          </div> */}
        </div>
        {/* <div className="flex gap-5 justify-center mt-16"> */}
        <div className="w-1/2 mx-auto flex flex-col items-start gap-y-5 p-10 rounded-[40px] bg-secondary text-white">
          <h3 className="text-h3">Sebab:</h3>
          {items.map((item, index) => (
            <ItemIllustrationHorizontal1 key={index} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

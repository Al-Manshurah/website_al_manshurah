// src/components/ItemIllustration1.jsx
"use client";

import Image from "next/image";
import { gitRepoS } from "@/utils/utilStrings";

export default function ItemIllustration1({ image, label, className = "" }) {
  return (
    <div className="wrap_illustration_item flex flex-col items-center gap-4">
      <div className="custom_illustration_item_small relative w-24 h-24 flex items-center justify-center">
        {image && (
          <Image
            src={`${gitRepoS}${image}`}
            alt={label}
            width={160}
            height={160}
            className="object-contain"
          />
        )}
      </div>
      <div className="text-label-item text-center">{label}</div>
    </div>
  );
}

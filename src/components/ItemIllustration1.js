// src/components/ItemIllustration1.jsx
"use client";

import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";

export default function ItemIllustration1({ icon, label, className = "" }) {
  return (
    <div className="wrap_illustration_item">
      <div className="custom_illustration_item_small"></div>
      <div className="text-label-item">{label}</div>
    </div>
  );
}

// src/components/ItemIllustrationHorizontal1.jsx
"use client";

import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";

export default function ItemIllustrationHorizontal1({ icon,label, className = "" }) {
  return (
    <div className="wrap_illustration_item custom_vertical">
      <div className="custom_illustration_item_small"></div>
      <div className="text-label-item">{label}</div>
    </div>
  );
}

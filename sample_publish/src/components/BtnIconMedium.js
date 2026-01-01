// src/components/BtnIconMedium.jsx
"use client";

import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";

export default function BtnIconMedium({
  href,
  label,
  icon,
  className = "",
}) {
  return (
    <Link
      href={href}
      className="cButton bg-base text-primary !min-h-fit !h-fit px-3 !py-2 rounded-[12px] text-text-menu transition shadow inline-flex items-center gap-2"
    >
      {label}
      {icon}
    </Link>
  );
}

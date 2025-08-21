// src/components/BtnCTA1.jsx
"use client";

import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";

export default function BtnCTA1({ href, label, className = "", ...props }) {
  return (
    <Link
      href={href}
      className={`flex justify-center items-center gap-2 mx-auto w-fit bg-base text-primary text-text-menu transition px-5 py-3 rounded-[12px] hover:bg-primary hover:text-white ${className}`}
      {...props}
    >
      {label}
      <div className="bg-primary/20 rounded-[10px] p-1">
        <RiArrowRightLine size={16} />
      </div>
    </Link>
  );
}

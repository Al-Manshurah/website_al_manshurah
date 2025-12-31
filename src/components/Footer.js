// src/components/Footer.jsx

import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import strings from "@/utils/utilStrings";

export default function Footer({}) {
  return (
    <footer className="bg-primary text-right pt-[72px] pb-[132px] px-20 text-sm text-white/30 mt-10">
      &copy; 2025 {strings.namaOrganisasi}
    </footer>
  );
}

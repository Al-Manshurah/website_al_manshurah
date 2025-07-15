"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { gitRepoS, imgLogoS } from "../utils/utilStrings";

import { usePathname } from "next/navigation";
import { utilRoutes } from "../utils/utilRoutes";

import { RiArrowDropDownLine, RiCustomerServiceLine } from "@remixicon/react";

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState("");
  const closeTimer = useRef(null);

  const toggleMenu = (menu) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const handleMouseEnter = (menu) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu("");
    }, 500);
  };

  const parentBtnClass =
    "cursor-pointer inline-flex items-center gap-1 transition";

  const arrow = <span className="text-xs">▼</span>;

  const pathname = usePathname();
  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  const menus = utilRoutes.filter((menu) => !menu.isButton);
  const buttons = utilRoutes.filter((menu) => menu.isButton);

  return (
    <header className="bg-green-950 text-white shadow-md">
      <div className="flex items-center justify-between bg-white border-b-8 border-green-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-black">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src={`${gitRepoS}${imgLogoS}`}
              alt="Logo"
              width={96}
              height={96}
            />
            <div className="flex flex-col gap-0">
              <div className="fKufam font-bold text-xl h-fit max-h-fit opacity-70">
                Halaqah Ilmu
              </div>
              <div className="fKufam font-extrabold text-3xl h-fit max-h-fit">
                Al Manshurah
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Menu Navigation */}
        <nav className="w-full max-w-7xl mx-auto flex justify-between items-center z-50">
          {/* Menu Navigasi */}
          <div className="flex items-center gap-0">
            {menus.map((menu) => {
              const activeClass = isActive(menu.href)
                ? "text-green-500 font-semibold"
                : "";

              if (menu.submenu) {
                return (
                  <div
                    key={menu.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(menu.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => toggleMenu(menu.name)}
                      className={`${parentBtnClass} ${activeClass}`}
                    >
                      {menu.name}
                      <RiArrowDropDownLine />
                    </button>
                    <div
                      className={`cDropdown ${
                        openMenu === menu.name
                          ? "opacity-100 scale-100 visible"
                          : "opacity-0 scale-95 invisible"
                      }`}
                    >
                      {menu.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className={`cSubMenu ${
                            isActive(sub.href)
                              ? "text-green-500 font-semibold"
                              : ""
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={menu.name}
                  href={menu.href}
                  className={`transition ${activeClass}`}
                >
                  {menu.name}
                </Link>
              );
            })}
          </div>

          {/* Tombol Aksi */}
          <div className="flex items-center gap-3">
            {buttons.map((btn) => (
              <Link
                key={btn.name}
                href={btn.href}
                className="cButton bg-green-700 text-white! px-4 py-2 rounded-[16px] font-medium hover:bg-green-100 transition shadow flex items-center gap-2"
              >
                {btn.icon}
                {btn.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

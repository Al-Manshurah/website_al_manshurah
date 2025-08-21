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
    <header className="bg-secondary text-white shadow-md">
      <div className="py-7 flex items-center justify-between bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-black">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-[100%]">
              <div className="p-1 bg-base rounded-[100%] overflow-hidden">
                <Image
                  src={`${gitRepoS}${imgLogoS}`}
                  alt="Logo"
                  width={64}
                  height={64}
                />
              </div>
            </div>
            <div className="flex flex-col gap-0 relative">
              <svg
              className="absolute right-0 left-0 top-4"
                width="250"
                height="19"
                viewBox="0 0 250 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  d="M236.408 0.114544C240.436 0.114544 246.814 2.7425 249.5 4.05648C237.918 0.114544 236.408 -0.96053 230.365 9.43185C224.323 19.8242 208.713 18.7492 201.663 16.9574C196.023 15.5239 183.871 16.3601 178.5 16.9574C188.571 14.0905 196.124 14.0905 210.727 15.8823C225.33 17.6741 231.372 0.114544 236.408 0.114544Z"
                  fill="#01002B"
                />
                <path
                  opacity="0.2"
                  d="M13.4078 0.114544C9.43617 0.114544 3.14775 2.7425 0.5 4.05648C11.9184 0.114544 13.4078 -0.96053 19.3652 9.43185C25.3227 19.8242 40.7128 18.7492 47.6631 16.9574C53.2234 15.5239 65.2045 16.3601 70.5 16.9574C60.5709 14.0905 53.1241 14.0905 38.7269 15.8823C24.3298 17.6741 18.3723 0.114544 13.4078 0.114544Z"
                  fill="#01002B"
                />
              </svg>
              <div className="fKufam font-bold h-fit max-h-fit text-primary text-center tracking-[0.24em] text-[20px]">
                Halaqah Ilmu
              </div>
              <div className="fKufam font-extrabold text-[36px] h-fit max-h-[42px] text-secondary text-center">
                Al Manshurah
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[3px] bg-gradient-primary"></div>
      <div className="mx-auto flex items-center justify-between">
        {/* Menu Navigation */}
        <nav className="px-[80px] w-full flex justify-between items-center z-50 shadow-nav">
          {/* Menu Navigasi */}
          <div className="flex items-center gap-0">
            {menus.map((menu) => {
              const activeClass = isActive(menu.href)
                ? "text-accent2 font-semibold bg-primary !h-full relative menu-nav-active"
                : " ";

              if (menu.submenu) {
                return (
                  <div
                    key={menu.name}
                    className="relative !h-full"
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
                      className={`cDropdown  self-start w-full  ml-[-16px] ${
                        openMenu === menu.name
                          ? "opacity-100 scale-100 visible mt-[38px]"
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
                  className={`transition ${activeClass} items-center px-5`}
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
                className="cButton bg-base text-primary !min-h-fit !h-fit px-3 !py-2 rounded-[12px] text-text-menu transition shadow inline-flex items-center gap-2"
              >
                {btn.name}
                {btn.icon}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

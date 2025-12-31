"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { gitRepoS, imgLogoS } from "../utils/utilStrings";

import { usePathname } from "next/navigation";
import { utilRoutes } from "../utils/utilRoutes";
import BtnIconMedium from "@/components/BtnIconMedium";

import { RiArrowDropDownLine, RiCustomerServiceLine, RiMenuLine, RiCloseLine } from "@remixicon/react";

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState("");
  const closeTimer = useRef(null);

  const toggleMenu = (menu) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const toggleMobileSubmenu = (menu) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === menu ? "" : menu);
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

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    if (drawerOpen) {
      setMobileSubmenuOpen(""); // Close submenu when closing drawer
    }
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setMobileSubmenuOpen("");
  };

  const parentBtnClass =
    "cursor-pointer inline-flex items-center gap-1 transition";

  const pathname = usePathname();
  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  const menus = utilRoutes.filter((menu) => !menu.isButton);
  const buttons = utilRoutes.filter((menu) => menu.isButton);

  return (
    <header className="bg-secondary text-white shadow-md">
      <div className="py-2 md:py-7 flex items-center justify-between bg-white">
        <div className="w-full mx-auto px-4 py-1 md:py-3 flex items-center justify-center  text-black">
          {/* Logo */}
          <div className="flex  flex-col md:flex-row items-center justify-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-[100%] scale-[0.8] md:scale[1]">
              <div className="p-1 bg-base rounded-[100%] overflow-hidden">
                <Image
                  src={`${gitRepoS}${imgLogoS}`}
                  alt="Logo"
                  width={64}
                  height={64}
                />
              </div>
            </div>
            <div className="flex flex-col gap-0 relative justify-center items-center">
              <svg
                className="absolute right-0 left-0 md:top-4 top-2 -ml-4"
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
              <div className="fKufam font-bold h-fit max-h-fit text-primary text-center tracking-[0.24em] text-[16px] md:text-[20px]">
                Halaqah Ilmu
              </div>
              <div className="fKufam font-extrabold text-[32px] md:text-[36px] h-fit max-h-[42px] text-secondary text-center">
                Al Manshurah
              </div>
            </div>
          </div>

          {/* Hamburger Button (Tablet & Mobile only) */}
          <button
            onClick={toggleDrawer}
            className="lg:hidden p-2 text-primary hover:text-secondary transition fixed md:relative right-0 top-0 bg-white/80 z-50"
            aria-label="Toggle menu"
          >
            <RiMenuLine size={24} />
          </button>
        </div>
      </div>
      <div className="w-full h-[3px] bg-gradient-primary"></div>

      {/* Desktop Navigation (hidden on tablet/mobile) */}
      <div className="mx-auto hidden lg:flex items-center justify-between">
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
                      className={`cDropdown  self-start w-full  ml-[-16px] ${openMenu === menu.name
                        ? "opacity-100 scale-100 visible mt-[38px]"
                        : "opacity-0 scale-95 invisible mt-[72px]"
                        }`}
                    >
                      {menu.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className={`cSubMenu ${isActive(sub.href) ? "" : ""}`}
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
              <BtnIconMedium
                key={btn.name}
                href={btn.href}
                label={btn.name}
                icon={btn.icon}
              />
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile/Tablet Drawer */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${drawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={closeDrawer}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-gradient-primary text-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${drawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <h2 className="text-xl font-bold uppercase">Menu</h2>
            <button
              onClick={closeDrawer}
              className="p-2 hover:bg-white/10 rounded-lg transition"
              aria-label="Close menu"
            >
              <RiCloseLine size={24} />
            </button>
          </div>

          {/* Drawer Menu Items */}
          <nav className="p-6">
            <ul className="space-y-4">
              {menus.map((menu) => {
                const activeClass = isActive(menu.href)
                  ? "bg-secondary text-accent2 border border-accent2/30"
                  : "hover:bg-primary/80 bg-primary/40 border border-primary/40 text-white/70";

                if (menu.submenu) {
                  return (
                    <li key={menu.name}>
                      <button
                        onClick={() => toggleMobileSubmenu(menu.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition ${activeClass}`}
                      >
                        <span className="font-semibold">{menu.name}</span>
                        <RiArrowDropDownLine
                          className={`transition-transform duration-200 ${mobileSubmenuOpen === menu.name ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      {/* Submenu */}
                      <ul
                        className={`bg-primary/10 rounded-lg space-y-1 overflow-hidden transition-all duration-300 ${mobileSubmenuOpen === menu.name
                          ? "max-h-120 opacity-100"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        {menu.submenu.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              onClick={closeDrawer}
                              className={`block px-4 py-4 rounded-lg transition border-b border-primary/40 ${isActive(sub.href)
                                ? "bg-secondary text-accent2"
                                : "hover:bg-white/10"
                                }`}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                return (
                  <li key={menu.name}>
                    <Link
                      href={menu.href}
                      onClick={closeDrawer}
                      className={`block px-4 py-3 rounded-lg font-semibold transition ${activeClass}`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Action Buttons in Drawer */}
            <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
              {buttons.map((btn) => (
                <Link
                  key={btn.name}
                  href={btn.href}
                  onClick={closeDrawer}
                  className="flex items-center gap-3 px-4 py-3 bg-white hover:bg-white/80 rounded-xl transition text-primary text-[14px]"
                >
                  {btn.icon}
                  <span>{btn.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </>
    </header>
  );
}

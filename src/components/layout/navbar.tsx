"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleDropdownMenu = () => setIsDropdownOpen((prev) => !prev);
  const openDropdownOnHover = () => !isMobile && setIsDropdownOpen(true);
  const closeDropdownOnLeave = () => !isMobile && setIsDropdownOpen(false);

  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownIcon = isDropdownOpen ? "rotated" : "initial";

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    toggleDropdownMenu,
    openDropdownOnHover,
    closeDropdownOnLeave,
    animateMobileMenu,
    animateDropdownMenu,
    animateDropdownIcon,
  };
};

export function Navbar() {
  const useActive = useRelume();
  return (
    <section className="z-[999] grid w-full grid-cols-[1fr_max-content_1fr] items-center justify-between border-b border-scheme-border bg-scheme-background px-[5%] md:min-h-18">
      <button
        className="flex size-12 flex-col justify-center lg:hidden"
        onClick={useActive.toggleMobileMenu}
        title="Toggle mobile menu"
        aria-label="Toggle mobile menu"
      >
        <span className="my-[3px] h-0.5 w-6 bg-neutral-darkest lg:hidden" />
        <span className="my-[3px] h-0.5 w-6 bg-neutral-darkest lg:hidden" />
        <span className="my-[3px] h-0.5 w-6 bg-neutral-darkest lg:hidden" />
      </button>
      <AnimatePresence>
        <motion.div
          initial="closed"
          animate={useActive.animateMobileMenu}
          exit="closed"
          variants={{
            open: {
              x: 0,
              opacity: 1,
              transition: { type: "spring", duration: 0.4, bounce: 0 },
            },
            close: {
              x: "-100%",
              opacity: 1,
              transition: { type: "spring", duration: 0.6, bounce: 0 },
              transitionEnd: {
                opacity: "var(--opacity-closed, 0%)",
                x: "var(--x-closed, -100%)",
              },
            },
            closed: {
              x: "-100%",
              opacity: 1,
              transition: { type: "spring", duration: 0.6, bounce: 0 },
              transitionEnd: {
                opacity: "var(--opacity-closed, 0%)",
                x: "var(--x-closed, -100%)",
              },
            },
          }}
          className="absolute top-0 left-0 z-50 flex h-dvh w-[90%] flex-col border-r border-scheme-border bg-white px-[5%] pb-4 md:w-[80%] lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:border-none lg:px-0 lg:pb-0 lg:[--opacity-closed:100%] lg:[--x-closed:0%]"
        >
          <Link href="/" className="mt-10 mb-8 flex shrink-0 lg:hidden">
            <img
              src="/VICINITY.png"
              alt="VICINITY Logo"
              className="h-8 w-auto"
            />
          </Link>
          <Link
            href="/events"
            className="text-regular relative block py-3 lg:px-4 lg:py-2 hover:text-primary transition-colors"
          >
            Events
          </Link>
          <Link
            href="/create-event"
            className="text-regular relative block py-3 lg:px-4 lg:py-2 hover:text-primary transition-colors"
          >
            Create Event
          </Link>
          <div
            onMouseEnter={useActive.openDropdownOnHover}
            onMouseLeave={useActive.closeDropdownOnLeave}
          >
            <button
              className="text-regular flex w-full items-center justify-between gap-2 py-3 lg:flex-none lg:justify-start lg:px-4 lg:py-2"
              onClick={useActive.toggleDropdownMenu}
            >
              <span>Alerts</span>
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownIcon}
                transition={{ duration: 0.3 }}
              >
                <RxChevronDown />
              </motion.span>
            </button>
            <AnimatePresence>
              <motion.nav
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="bg-scheme-background lg:absolute lg:z-50 lg:border lg:border-scheme-border lg:p-2 lg:[--y-close:25%]"
              >
                <Link
                  href="/profile"
                  className="text-regular block py-3 pl-[5%] lg:py-2 lg:pr-8 lg:pl-4 lg:text-left hover:text-primary transition-colors"
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="text-regular block py-3 pl-[5%] lg:py-2 lg:pr-8 lg:pl-4 lg:text-left hover:text-primary transition-colors"
                >
                  Settings
                </Link>
                <Link
                  href="/help"
                  className="text-regular block py-3 pl-[5%] lg:py-2 lg:pr-8 lg:pl-4 lg:text-left hover:text-primary transition-colors"
                >
                  Help
                </Link>
              </motion.nav>
            </AnimatePresence>
          </div>
          <Button className="mt-6 w-full lg:hidden" title="Menu" size="sm">
            Menu
          </Button>
        </motion.div>
        {useActive.isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-neutral-darkest lg:hidden"
            onClick={useActive.toggleMobileMenu}
          />
        )}
      </AnimatePresence>
      <Link href="/" className="flex min-h-16 shrink-0 items-center">
        <img
          src="/VICINITY.png"
          alt="VICINITY Logo"
          className="h-10 w-auto"
        />
      </Link>
      <div className="flex min-h-16 items-center justify-end gap-x-4">
        <div>
          <Button title="Join" size="sm" className="px-4 py-1 md:px-6 md:py-2">
            Join
          </Button>
        </div>
      </div>
    </section>
  );
}

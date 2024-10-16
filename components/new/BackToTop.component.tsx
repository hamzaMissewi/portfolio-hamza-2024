"use client";

import React, { useEffect, useState } from "react";

import { RocketLaunchIcon } from "@heroicons/react/24/solid";

import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY >= 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      aria-label="Scroll to Top"
      className={`fixed bottom-4 right-4 z-30 flex items-center ${styles.wrapper}`}
      data-visibility={isVisible}
      onClick={scrollToTop}
    >
      <RocketLaunchIcon
        aria-hidden="true"
        className={`mb-3 h-10 w-10 ${styles.icon}`}
      />
      <span className={`font-bold uppercase ${styles.text}`}>Scroll Top</span>
    </button>
  );
}

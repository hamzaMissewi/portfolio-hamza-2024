"use client";
import NavigationLink from "./navigationLink";
import { useTranslations } from "next-intl";
import { useLocale } from "use-intl";
import Image from "next/image";
import React from "react";
import { ThemeToggler } from "@/theme/themeToggler";
import LocaleSwitcher from "@/components/localeSwitcher";

export default function Sidebar() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    // <motion.div
    //   initial={{
    //     opacity: 0.5,
    //     x: -100,
    //   }}
    //   animate={{
    //     x: 0,
    //     opacity: 1,
    //   }}
    //   transition={{
    //     duration: 0.4,
    //   }}
    <div
      // dark:bg-grid-white/[0.03]
      className={`flex flex-col space-y-2 mb-5 sticky z-99 py-1 px-3 max-w-[350px] w-fit h-full ${locale !== "ar" ? "left-1" : "right-1"} rounded-1xl 
   dark:bg-darkBackground bg-white-100 bg-grid-black/[0.2] my-5 border border-white/[0.2] border-white-200 pb-20 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}>
      {/*<div className={"flex flex-col space-y-2"}>*/}
      <NavigationLink href={"https://www.b2b-alive.com"} target={"_blank"}>
        {/*<Image src={"/hamza/b2b-alive.svg"} width={200} height={200} alt="b2b logo"      className={"border border-red-400"}*/}
        <Image src={"/png/b2b-alive-icon.png"} width={110} height={60} alt="b2b logo" />
      </NavigationLink>

      {/*<NavigationLink href={"/pathnames"}>Pathnames</NavigationLink>*/}
      <div>
        <NavigationLink href={"/en"}>{t("languages.en")}</NavigationLink>
        <NavigationLink href={"/fr"}>{t("languages.fr")}</NavigationLink>
        <NavigationLink href={"/ar"}>{t("languages.ar")}</NavigationLink>
      </div>
      <LocaleSwitcher />
      <ThemeToggler />
    </div>
  );
}
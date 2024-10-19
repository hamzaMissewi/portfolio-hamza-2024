// "use client";
import React, { useCallback, useState } from "react";
import NavigationLink from "./navigationLink";
import { useTranslations } from "next-intl";
import { useLocale } from "use-intl";
import Image from "next/image";
import { ThemeToggler } from "@/theme/themeToggler";
import LocaleSwitcher from "@/components/localeSwitcher";
import { Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { useTheme } from "next-themes";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

export default function Sidebar() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  // const theme = useTheme();
  // const isXsScreen = useMediaQuery(theme.breakpoints.up("xs"));
  // const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  // const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [openSidebar, setOpenSidebar] = useState(false);
  const handleToggleSidebar = useCallback(() => {
    setOpenSidebar((isOpen) => !isOpen);
  }, [setOpenSidebar]);

  return (
    // <section id="sidebar">
    <div
      // bg-grid-black/[0.2] dark:bg-grid-white/[0.03]
      className={`w-55 fixed top-0.5 z-50 flex h-full min-w-0 space-y-2 ${
        locale !== "ar" ? "left-0 pr-5" : "right-0 pl-5"
      } rounded-xl border border-black border-white/[0.2] bg-[#fff] dark:bg-gray-800`}
      // shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"*/}
    >
      <div
        // className={`top-1 ${openSidebar ? (locale === "ar" ? "left-50" : "right-50") : "right-1"} absolute`}
        className={`top-0 ${locale === "ar" ? "left-[-15px]" : "right-[-15px]"} absolute`}
        // style={{display: { xs: "none", sm: "block" }}
      >
        <IconButton
          aria-label="Toggle button"
          size="small"
          onClick={handleToggleSidebar}
          sx={{
            border: "1px solid black",
            backgroundColor: "white",
            // boxShadow:
            //   "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
            p: 0.5,
            ":hover": {
              backgroundColor: "#f5f5f5",
              "&:hover": { textDecoration: "none" },
            },
          }}
        >
          {!openSidebar &&
            (locale === "ar" ? (
              <ChevronLeftIcon fontSize={"small"} />
            ) : (
              <ChevronRightIcon fontSize={"small"} />
            ))}
          {openSidebar &&
            (locale === "ar" ? (
              <ChevronRightIcon fontSize={"small"} />
            ) : (
              <ChevronLeftIcon fontSize={"small"} />
            ))}
        </IconButton>
      </div>

      {openSidebar && (
        <div
        // initial={{
        //   opacity: 0.5,
        //   x: -100,
        // }}
        // animate={{
        //   x: 0,
        //   opacity: 1,
        // }}
        // transition={{
        //   duration: 0.4,
        // }}
        >
          <NavigationLink href={"https://www.b2b-alive.com"} target={"_blank"}>
            <Image
              className={"border border-black-100 bg-white p-1"}
              // src={"/hamza/b2b-alive.svg"}
              src="https://s3-eu-west-1.amazonaws.com/public.b2b-alive.files/logo/b2b-alive-logo_256.png"
              width={140}
              height={140}
              alt="b2b alive"
            />
          </NavigationLink>

          <div className={"flex flex-col"}>
            <NavigationLink href={"/en"}>{t("languages.en")}</NavigationLink>
            <Divider />
            <NavigationLink href={"/fr"}>{t("languages.fr")}</NavigationLink>
            <Divider />
            <NavigationLink href={"/ar"}>{t("languages.ar")}</NavigationLink>
            <Divider />
          </div>
          <div className={"mx-2 flex flex-col space-y-2"}>
            <LocaleSwitcher />
            <ThemeToggler />
          </div>
        </div>
      )}
    </div>
  );
}

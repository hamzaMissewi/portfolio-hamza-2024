"use client";
import NavigationLink from "./navigationLink";
import { useTranslations } from "next-intl";
import { useLocale } from "use-intl";
import Image from "next/image";
import React, { useState } from "react";
import { ThemeToggler } from "@/theme/themeToggler";
import LocaleSwitcher from "@/components/localeSwitcher";
// import { useTheme } from "next-themes";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
// import { useTheme } from "next-themes";

export default function Sidebar() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const [openSidebar, setOpenSidebar] = useState(false);

  // const theme = useTheme();

  // const isXsScreen = useMediaQuery(theme.breakpoints.up("xs"));
  // const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  // const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  // useEffect(() => {
  //   if (isLgScreen) {
  //     setOpenSidebar(true);
  //   }
  // }, [isLgScreen]);

  return (
    <div
      className={`sticky inset-0 mt-2 ${locale !== "ar" ? "left-2" : "right-2"}`}
    >
      {/*<Portal container={navBarToggleButtonEl}>*/}
      <Box
        sx={{
          top: 3,
          right: openSidebar ? 15 : 0,
          // marginLeft: openSidebar?"-15px":0,
          width: 0,
          position: "absolute",
          display: { xs: "none", sm: "block" },
          zIndex: 99,
          // top: `${appBarHeight + 18}px`,
        }}
      >
        <IconButton
          aria-label="Toggle button"
          size="small"
          onClick={() => setOpenSidebar((isOpen) => !isOpen)}
          sx={{
            border: "1px solid black",
            backgroundColor: "white",
            boxShadow:
              "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
            ":hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          {!openSidebar && <ChevronRightIcon fontSize="inherit" />}
          {openSidebar && <ChevronLeftIcon fontSize="inherit" />}
        </IconButton>
      </Box>

      {openSidebar && (
        <div
          className={
            "top-5 z-10 flex min-h-0 w-fit min-w-0 flex-col rounded-xl border border-black pb-5" +
            " h-fit max-h-screen items-center space-y-2 border-white/[0.2] bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.03]"
          }
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
          // shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
        >
          <NavigationLink href={"https://www.b2b-alive.com"} target={"_blank"}>
            {/*/!*<Image src={"/hamza/b2b-alive.svg"} width={200} height={200} alt="b2b logo"      */}
            <Image
              className={"border border-black-100 bg-white p-1"}
              //src={"/png/b2b-alive-icon.png"}
              // src={"/hamza/b2b-alive.svg"}
              src="https://s3-eu-west-1.amazonaws.com/public.b2b-alive.files/logo/b2b-alive-logo_256.png"
              width={140}
              height={140}
              alt="b2b logo"
            />
          </NavigationLink>

          {/*<NavigationLink href={"/pathnames"}>Pathnames</NavigationLink>*/}
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

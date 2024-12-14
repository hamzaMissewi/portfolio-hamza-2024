"use client";
// import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { ButtonGroup } from "@mui/material";
import Image from "next/image";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  useAuth,
  UserButton,
  useUser,
} from "@clerk/nextjs"; // TODO not
import { useLocale, useTranslations } from "next-intl";
import { Button } from "./ui/button";
// import { ThemeToggler } from "@/theme/themeToggler";
import LocaleSwitcher from "@/components/localeSwitcher";
import Socials from "@/components/socials";
import { Social } from "@/sanity.types";
import { ThemeToggler } from "@/components/common/themeToggler";
// import { useUpdateLanguageDialog } from "./common/UpdateLanguage";
// import { Social } from "@/typings";

// "disney": "https://links.papareact.com/a943ae"

type IHeaderProps = {
  socials?: Social[];
};

const Header: React.FC<IHeaderProps> = ({ socials }) => {
  const { user } = useUser();
  const { isSignedIn, signOut, sessionId } = useAuth();
  const router = useRouter();
  const t = useTranslations("Navbar");
  const locale = useLocale();

  // const { updateLanguageDialogProps, openUpdateLanguageDialog } =
  //   useUpdateLanguageDialog();

  // const socials = await fetchSocials();

  return (
    <header
      className={
        // "sticky flex items-center justify-between border border-lightBackground dark:border-darkBackground  bg-lightBlue dark:bg-darkRed" +
        "dark:bg-darkBlueBackground sticky flex items-center justify-between backdrop-blur-0" +
        " z-50 h-[60px] w-full bg-lightBackground"
      }
    >
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className={`flex-start flex space-x-2 ${locale === "ar" ? "mr-5" : "ml-5"}`}
      >
        <Link href="/">
          <p>{t("home")}</p>
        </Link>
      </motion.div>
      {/*<Button*/}
      {/*  size={"sm"}*/}
      {/*  asChild*/}
      {/*  onClick={openUpdateLanguageDialog}*/}
      {/*  color={"info"}*/}
      {/*>*/}
      {/*  Update Language Dialog*/}
      {/*</Button>*/}
      <div
        className={
          // "flex justify-center space-x-2 border child:border-black dark:bg-black"
          "grid grid-cols-3 gap-2"
        }
      >
        <LocaleSwitcher />
        <ThemeToggler />
      </div>

      <RedirectToSignIn />

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      {!isSignedIn ? (
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
      ) : (
        <SignedIn>
          <SignOutButton />
          <UserButton />
          {/*  <SignInButton />*/}
        </SignedIn>
      )}

      <div className="flex">
        {isSignedIn ? (
          <div className={"flex flex-row space-x-2"}>
            <h1 className={"text-xl font-semibold"}>
              {t("welcome", { username: user?.username })}
            </h1>
            <UserButton />
            <SignedIn>
              <SignOutButton />
            </SignedIn>
          </div>
        ) : (
          // <ButtonGroup color={"success"} size={"small"}>
          <ButtonGroup>
            <Button
              type={"button"}
              asChild
              color={"info"}
              onClick={() => {
                router.push("/signIn");
              }}
            >
              {t("signIn")}
            </Button>
            <Button
              asChild
              color={"warning"}
              onClick={() => {
                router.push("/signUp");
              }}
            >
              {t("signUp")}
            </Button>
          </ButtonGroup>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className={`z-1 flex flex-nowrap items-center space-x-2
                ${locale === "ar" ? "ml-5" : "mr-5"}`}
      >
        <Link
          href="https://b2b-alive.com"
          rel={"noopener noreferrer"}
          target={"_blank"}
        >
          <Image
            src={"/assets/b2b-alive-ltd-icon.svg"}
            alt="Society Logo"
            width={40}
            height={30}
            objectFit={"cover"}
            className={
              "w-15 relative my-1 h-full cursor-pointer bg-lightBackground p-1"
            }
          />
        </Link>

        {/*<SocialIcon*/}
        {/*  url={"https://www.youtube.com/@hamza_blingos-khebra"}*/}
        {/*  bgColor={"transparent"}*/}
        {/*  fgColor={"gray"}*/}
        {/*  target={"_blank"}*/}
        {/*/>*/}

        {/*<SocialIcon*/}
        {/*  url={"https://www.github.com/hamzaMissewi"}*/}
        {/*  bgColor={"transparent"}*/}
        {/*  fgColor={"gray"}*/}
        {/*  target={"_blank"}*/}
        {/*/>*/}

        <div
          className="flex cursor-pointer items-center space-x-1"
          onClick={() => router.push("mailto:hamza.missaoui@b2b-alive.com")}
        >
          {socials && <Socials socials={socials} />}
          <p className={"hidden md:block"}>{t("getInTouch")}</p>
        </div>
      </motion.div>
      <div className="h-4 border-y border-black" />
    </header>
  );
};

export default Header;

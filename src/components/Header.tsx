"use client";
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {ButtonGroup} from "@mui/material";
import Image from "next/image";
import {SignedIn, SignOutButton, UserButton} from "@clerk/nextjs";
import {useUser} from "@clerk/clerk-react";
import {useLocale, useTranslations} from "next-intl";
import {ThemeToggler} from "./theme/ThemeToggler";
import LocaleSwitcher from "./LocaleSwitcher";
import {Button} from "./ui/button";
import UpdateLanguageDialog, {useUpdateLanguageDialog,} from "./common/UpdateLanguage";

// const b2bAliveLogo =
// "https://media.licdn.com/dms/image/C4E0BAQECttqhzuGqBw/company-logo_200_200/0/1651029832992/b2b_alive_logo?e=2147483647&v=beta&t=yaQVzsyhkQw3LhBJexMtVjWovIEQXEzzxRmGTF20RHk";
// "disney": "https://links.papareact.com/a943ae"

const Header: React.FC = () => {
    // const { isSignedIn, signOut } = useAuth();
    const {user, isSignedIn, isLoaded} = useUser();
    const router = useRouter();
    const t = useTranslations("Navbar");
    const locale = useLocale();

    // const [openUpdateLanguageDialog, setOpenUpdateLanguageDialog] = useState(false);

    const {updateLanguageDialogProps, openUpdateLanguageDialog} =
        useUpdateLanguageDialog();

    return (
        <div
            className={
                // bg-lightBlue dark:bg-darkBlueBackground
                // "sticky flex items-center justify-between border border-lightBackground dark:border-darkBackground  bg-lightBlue dark:bg-darkRed" +
                // bg-white dark:bg-gray-800
                "sticky flex items-center justify-between backdrop-blur-0 dark:bg-darkBlueBackground" +
                " bg-lightBackground" +
                " w-full z-50 h-[60px]"
            }
        >
            <motion.div
                initial={{opacity: 0, x: -500, scale: 0.5}}
                animate={{x: 0, opacity: 1, scale: 1}}
                transition={{duration: 1}}
                className={`flex flex-start space-x-2 ${locale === "ar" ? "mr-5" : "ml-5"}`}
            >
                <Link href="/">
                    {/*<p className={"text-black dark:text-white"}>*/}
                    <p>
                        {t('home')}</p>
                </Link>
            </motion.div>


            {/*<Button asChild onClick={openUpdateLanguageDialog} color={"info"}>*/}
            {/*    Update Language*/}
            {/*</Button>*/}

            <div
                className={
                    // "flex justify-center space-x-2 border child:border-black dark:bg-black"
                    "grid grid-cols-3 gap-2"
                }
            >
                <LocaleSwitcher/>
                <ThemeToggler/>
                {/*<ThemeSwitcher/>*/}
            </div>

            <div className="flex">
                {user && isSignedIn ? (
                    <div className={"flex flex-row space-x-2"}>
                        <h1 className={"text-xl font-semibold"}>
                            {t("welcome", {username: user?.username})}
                        </h1>
                        <UserButton/>
                        <SignedIn>
                            <SignOutButton/>
                        </SignedIn>
                    </div>
                ) : (
                    // <SignedOut>
                    <ButtonGroup color={"success"} size={"small"}>
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
                initial={{opacity: 0, x: 500, scale: 0.5}}
                animate={{x: 0, opacity: 1, scale: 1}}
                transition={{duration: 1.5}}
                className={`flex items-center space-x-2 z-1 flex-nowrap
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
                        className={"cursor-pointer bg-lightBackground w-15 h-full relative p-1 my-1"}
                    />
                </Link>

                <SocialIcon
                    url={"https://www.youtube.com/@hamza_blingos-khebra"}
                    bgColor={"transparent"}
                    fgColor={"gray"}
                    target={"_blank"}
                />

                <SocialIcon
                    url={"https://www.github.com/hamzaMissewi"}
                    bgColor={"transparent"}
                    fgColor={"gray"}
                    target={"_blank"}
                />

                <div
                    className="flex items-center cursor-pointer space-x-1"
                    onClick={() =>
                        router.push(
                            "mailto:hamza.missaoui@b2b-alive.com",
                        )
                    }
                >
                    <SocialIcon
                        network={"email"}
                        bgColor={"transparent"}
                        fgColor={"gray"}
                        target={"_blank"}
                        href={"mailto:hamza.missaoui@b2b-alive.com?subject=offer_job"}
                        className={"size-1.5"}
                    />
                    <p className={"hidden md:block"}>{t("getInTouch")}</p>
                </div>
            </motion.div>
            <UpdateLanguageDialog {...updateLanguageDialogProps} />
        </div>
    );
};

export default Header;

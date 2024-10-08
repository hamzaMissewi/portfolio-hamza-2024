"use client"
import {useState} from "react";
import {MenuItem, MenuList} from "@mui/material";
import {Link} from "../lib/intl";
import {useTranslations} from "next-intl";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Sidebar() {
    const t = useTranslations("Sidebar");
    const [showSidebar, setShowSidebar] = useState(false)


    return (
        <div
            className={"relative space-x-2 w-200"}
        >
            {/*<Typography component={"h5"} style={{ color: "#ccc" }}>*/}
            {/*  Sidebar*/}
            {/*</Typography>*/}

            {showSidebar ?
                <KeyboardArrowLeftIcon color={"action"} fontSize="small" onClick={() => setShowSidebar(false)}/> :
                <KeyboardArrowRightIcon color={"action"} fontSize="small" onClick={() => setShowSidebar(true)}/>}

            {showSidebar &&
                <div
                    className={"rounded-lg shadow-sm transition-colors hover:bg-gray-50 space-y-2 bg-lightBackground" +
                        " dark:bg-darkBlueBackground shadow hover:shadow-slate-700 flex-col w-fit"}
                >
                    <MenuList>
                        <Link href={"/"}>
                            <MenuItem>{t("mainPage")}</MenuItem>
                        </Link>
                        <Link href={"/movies"}>
                            <MenuItem>{t("moviesPage")}</MenuItem>
                        </Link>
                        <Link href={"/about"}>
                            <MenuItem>{t("aboutPage")}</MenuItem>
                        </Link>
                    </MenuList>
                </div>
            }
        </div>
    );
}

export default Sidebar;

function PlayIcon() {
    return (
        <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="6 3 20 12 6 21 6 3"/>
        </svg>
    );
}

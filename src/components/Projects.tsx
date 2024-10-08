"use client";
import {motion} from "framer-motion";
// import { useTranslations } from "next-intl";
import Link from "next/link";
import TabIcon from "@mui/icons-material/Tab";
import Image from "next/image";
import {Tooltip} from "@mui/material";
import {useLocale, useTranslations} from "next-intl";
// import { CodeIcon } from "lucide-react";
import CodeIcon from '@mui/icons-material/Code';

export type ProjectType = {
    // description?: string;
    title?: string;
    thumbnail?: string;
    liveUrl?: string;
    code?: string;
};

const projectUrls: {
    professional: ProjectType[];
    personal: ProjectType[];
} = {
    personal: [
        {
            title: "netlify movies web app",
            thumbnail:
                "https://res.cloudinary.com/hamzaostouri/image/upload/v1728135248/Capture_d_%C3%A9cran_2024-10-05_143358_eawvpb.png",
            liveUrl: "https://quirky-wright-757726.netlify.app/",
        },
        {
            title: "amazon clone with react",
            thumbnail: "",
            liveUrl: "https://clone-127fa.web.app/",
        },
        {
            title: "google calendar clone app with react",
            thumbnail: "",
            liveUrl: "https://calendar.google.com/calendar/u/0/r?pli=1",
        },
        {
            title: "old portfolio app",
            thumbnail:
                "https://res.cloudinary.com/hamzaostouri/image/upload/v1728134489/Capture_d_%C3%A9cran_2024-10-05_142025_vusnbp.png",
            liveUrl: "https://hamza-missaoui-resume.netlify.app/",
        },
    ],
    professional: [
        {
            thumbnail:
                "https://res.cloudinary.com/hamzaostouri/image/upload/v1724472245/Capture_d_%C3%A9cran_2024-08-22_131442_utriiu.png",
            // live: "",
        },
        {
            thumbnail:
                "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022099/Capture_d_%C3%A9cran_2024-03-18_192908_xsd9iw.png",
            // live: ""
        },
        {
            thumbnail:
                "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022087/Capture_d_%C3%A9cran_2024-03-19_161306_nblwjp.png",
            // live: ""
        },
        {
            thumbnail:
                "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022637/b2b-ui-schedule-page_biyxel.png",
            // live: ""
        },
        {
            thumbnail:
                "https://res.cloudinary.com/hamzaostouri/image/upload/v1728022637/graphql-playground_mprfrb.png",
            // live: ""
        },
    ],
};

function Projects() {
    const t = useTranslations("Experience");
    const language = useLocale()

    // const handleOpenCodeDemo = useCallback((code?: string) => {
    //   if (!code) return;
    //   router.push(code);
    // }, []);

    return (
        <motion.div
            className={"min-h-screen flex flex-col text-left justify-evenly mx-auto"}
        >
            {/*<div className={"flex flex-col"}>*/}
            {/*  <h3 className="uppercase tracking tracking-[20px] text-gray-500 text-2xl">*/}
            {/*    {t("title")}*/}
            {/*  </h3>*/}
            {/*  <p className={"relative z-1 text-gray-500 text-md"}>*/}
            {/*    {t("description")}*/}
            {/*  </p>*/}
            {/*</div>*/}

            <div className="flex flex-col space-y-3 snap-x snap-mandatory">
                <h3 className={`text-center uppercase text-gray-500 ${language && "tracking tracking-[20px]"} text-2xl font-bold`}>
                    {t("personalProjects.title")}
                </h3>

                {/*{Array.from(*/}
                {/*  { length: projectUrls.personal.length - 1 },*/}
                {/*  (_, index) => index,*/}
                {/*)*/}
                <ul>
                    {projectUrls.personal.map((personalProject, index) => (
                        <li key={index} className={"mb-5"}>
                            {personalProject.thumbnail ? (
                                <div className={
                                    // p-20 md:p-44
                                    "relative flex flex-col items-center space-y-5"
                                }>

                                    {/*<p className="font-semibold text-center decoration-[#F7AB0A]/50">*/}
                                    {/*<p className={"text-lg text-center md:text-left mb-2"}>*/}
                                    {/*    {index + 1}/{projectUrls.personal.length} -{" "}*/}
                                    {/*    {t(`personalProjects.projects.${index}.description`)}*/}
                                    {/*</p>*/}

                                    <div className={'items-center flex space-x-2'}>
                                        <p className={"text-lg"}>
                                            {index + 1}/{projectUrls.personal.length}
                                        </p>
                                        <p className={"text-gray-500"}>
                                            {t(`personalProjects.projects.${index}.description`)}
                                        </p>
                                    </div>


                                    <div className={"flex relative"}>
                                        <Image
                                            // initial={{ y: -300, opacity: 0 }}
                                            // transition={{ duration: 1.2 }}
                                            // whileInView={{ opacity: 1, y: 0 }}
                                            // viewport={{ once: true }}
                                            width={250}
                                            height={250}
                                            src={personalProject.thumbnail}
                                            alt={"project"}
                                            objectFit={"contain"}
                                            // sm:w-10 sm:h-10 w-[100%] md:h-[550px]
                                            className="rounded-md items-center border border-customOrange cursor-pointer"
                                            onClick={() => {
                                                if (personalProject.liveUrl) {
                                                    window.open(personalProject.liveUrl, "_blank");
                                                    // router.push(personalProject.liveUrl);
                                                }
                                            }}
                                        />

                                        <div className={"absolute right-1 top-0 flex"}>
                                            {personalProject.liveUrl && (
                                                <Link
                                                    href={personalProject.liveUrl}
                                                    rel={"noopener noreferrer"}
                                                    target={"_blank"}
                                                >
                                                    <Tooltip title={"Live"}>
                                                        <TabIcon fontSize={"small"} color={"error"}/>
                                                    </Tooltip>
                                                </Link>
                                            )}

                                            {personalProject.code && (
                                                <Link
                                                    href={personalProject.code}
                                                    rel={"noopener noreferrer"}
                                                    target={"_blank"}
                                                >
                                                    <Tooltip title={"Code"}>
                                                        <CodeIcon fontSize={"small"} color={"error"}/>
                                                    </Tooltip>
                                                </Link>
                                            )}
                                        </div>
                                        {/*decoration-[#F7AB0A]/50*/}
                                        <div className={"absolute bottom-2 right-2"}>
                                            <p className="font-semibold text-sm text-center bg-white text-black">
                                                {index + 1}/{projectUrls.personal.length}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={"flex relative justify-center space-x-2"}>
                                    <p className={"text-lg"}>
                                        {index + 1}/{projectUrls.personal.length}
                                    </p>
                                    <p className={"text-gray-500"}>
                                        {t(`personalProjects.projects.${index}.description`)}
                                    </p>
                                    {/*<p>no thumbnail</p>*/}
                                    {personalProject.liveUrl && (
                                        <Link
                                            href={personalProject.liveUrl}
                                            rel={"noopener noreferrer"}
                                            target={"_blank"}
                                        >
                                            <Tooltip title={"Live"}>
                                                <TabIcon fontSize={"small"} color={"error"}/>
                                            </Tooltip>
                                            {/*<p>Live</p>*/}
                                        </Link>
                                    )}

                                    {personalProject.code && (
                                        <Link
                                            href={personalProject.code}
                                            rel={"noopener noreferrer"}
                                            target={"_blank"}
                                        >
                                            <Tooltip title={"Code"}>
                                                <CodeIcon fontSize={"small"} color={"error"}/>
                                            </Tooltip>
                                        </Link>
                                    )}
                                </div>
                            )}

                            {/*<Divider sx={{pt: 2}}/>*/}
                        </li>
                    ))}
                </ul>
            </div>

            {/*<div className={"relative w-full flex flex-col snap-x snap-mandatory"}>*/}
            <div className="flex flex-col space-y-3 snap-x snap-mandatory">
                <h3 className={`text-center uppercase text-gray-500 ${language && "tracking tracking-[20px]"} text-2xl font-bold`}>
                    {t("professionalProjects.title")}
                </h3>

                {/*{Array.from(*/}
                {/*  { length: projectUrls.professional.length - 1 },*/}
                {/*  (_, index) => index,*/}
                {/*)*/}
                <div className={"flex flex-row flex-wrap justify-center"}>
                    {projectUrls.professional.map((proProject, index) => (
                        <div key={index}>
                            {/*<h3 className={"text-lg text-center md:text-left"}>*/}
                            {/*  {t(`professionalProjects.projects.${index}.society`)}*/}
                            {/*</h3>*/}
                            {/*<p className={"text-lg text-center md:text-left"}>*/}
                            {/*  {t(`professionalProjects.projects.${index}.description`)}*/}
                            {/*</p>*/}

                            {proProject.title && (
                                <p className={"text-lg text-center md:text-left"}>
                                    {proProject.title}
                                </p>
                            )}

                            {proProject.thumbnail && (
                                <Image
                                    // initial={{ y: -300, opacity: 0 }}
                                    // transition={{ duration: 1.2 }}
                                    // whileInView={{ opacity: 1, y: 0 }}
                                    // viewport={{ once: true }}
                                    src={proProject.thumbnail}
                                    width={250}
                                    height={150}
                                    alt={`${index} professional project`}
                                    className={
                                        // md:w-[100%] md:h-[550px] sm:w-10 sm:h-10
                                        "rounded-md  items-center object-center p-2"
                                    }
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;

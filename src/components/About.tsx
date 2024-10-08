"use client";
import {motion} from "framer-motion";
import {useLocale, useTranslations} from "next-intl";

export const selfies = [
    "https://res.cloudinary.com/hamzaostouri/image/upload/v1724392322/1000038266_pzd2ji.jpg",
    "https://res.cloudinary.com/hamzaostouri/image/upload/v1663579330/avatar_photos/gjyv2ua2oh43thk1xw5z.jpg",
    "https://res.cloudinary.com/hamzaostouri/image/upload/v1663664915/avatar_photos/ra3cbssf64n3ihc2fw0o.png",
];

const skillKeys = [
    "technicalProficiency",
    "problemSolving",
    "projectManagement",
] as const;

function About() {
    const t = useTranslations("AboutMe");
    const language = useLocale()


    return (
        <motion.div
            // className="relative  md:flex-row max-w-7xl flex flex-col md:flex-row space-y-4 h-screen md:text-left
            // max-w-7xl px-10 justify-evenly mx-auto
            className={
                "relative flex flex-col overflow-hidden text-left max-w-7xl justify-center mx-auto" +
                " space-y-2"
            }
        >
            <h3
                // className="absolute top-14 uppercase text-gray-500 text-2xl"
                className={`text-center uppercase text-gray-500 ${language && "tracking tracking-[20px]"} text-2xl font-bold`}
                // className={"text-center uppercase tracking tracking-[20px] text-2xl "}
            >
                {t("title")}
            </h3>
            <div className={"relative flex flex-row space-x-10"}>
                <motion.img
                    className={
                        "self-start mt-2 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-fill md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                    }
                    initial={{x: -200, opacity: 0}}
                    transition={{duration: 1.2}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9a2kU-lkyJTp7tUBqh02YhJqtbHBBZYVuw&s"
                    }
                />

                <div className={"flex flex-col space-y-2"}>
                    {/*<span className={"underline decoration-[#F7AB0A]/50"}>*/}
                    <p className={"text-md text-lg"}>{t("intro")}</p>
                    <p className={"text-base"}>{t("description")}</p>
                    <ul>
                        {skillKeys.map((key) => (
                            <li key={key}>{t(`skills.${key}`)}</li>
                        ))}

                        {/*<li>Cross-Functional Collaboration: "Proven track record of working effectively with*/}
                        {/*    cross-functional teams, including designers, product managers, and stakeholders, to deliver*/}
                        {/*    user-centric solutions."*/}
                        {/*</li>*/}
                        {/*<li>Achievements: "Successfully led the development of a high-traffic e-commerce platform, resulting*/}
                        {/*    in a 30% increase in user engagement and a 20% boost in revenue within the first year."*/}
                        {/*</li>*/}
                        {/*<li>Continuous Learning: "Committed to staying updated with industry trends and best practices,*/}
                        {/*    including recent certifications in cloud computing and cybersecurity."*/}
                        {/*</li>*/}
                        {/*<li>Customer Focus: "Strong understanding of client requirements and business objectives, with a*/}
                        {/*    history of delivering tailored software solutions that exceed expectations and drive growth."*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default About;

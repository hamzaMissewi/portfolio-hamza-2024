import {useLocale} from "next-intl";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Hero from "@/components/Hero";
import ChatBot from "@/components/ChatBot";

function Page() {
    const locale = useLocale();

    return (
        <div
            className={
                // "md:overflow-hidden overflow-y-scroll flex flex-col xl:-mt-48 space-y-2
                // bg-lightBackground dark:bg-darkBlueBackground
                // "bg-lightBackground dark:bg-gradient-to-b from-slate-900/100 via-gray-900 to-gray-300 w-full" +
                "h-full  bg-lightHeader dark:bg-darkBlueBackground " +
                " overflow-auto snap-y snap-mandatory z-0 min-h-screen"
            }
        >
            <section id={"hero"} className={"snap-start"}>
                <Hero/>
            </section>
            <section id={"about"} className={"snap-center"}>
                <About/>
            </section>
            <section id={"experience"} className={"snap-center"}>
                <Experience/>
            </section>
            <section id={"skills"} className={"snap-center"}>
                <Skills/>
            </section>
            <section id={"projects"} className={"snap-center"}>
                <Projects/>
            </section>
            <section id={"contactMe"} className={"snap-center"}>
                <ContactMe/>
            </section>
            <div className={`fixed z-1 ${locale === "ar" ? "left-3" : "right-3"} bottom-1`}>
                <ChatBot/>
            </div>
        </div>
    )
}

export default Page;

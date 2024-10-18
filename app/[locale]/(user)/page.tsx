"use client";
import React from "react";

import { Approach } from "@/components/approach";
import { Clients } from "@/components/clients";
import { ExperiencesComponent } from "@/components/experiencesComponent";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";
import Sidebar from "@/components/sidebar";
import ChatBot from "@/components/chatBot";
import Footer2 from "@/components/footer2";
import { Experience, Project, SectionWrapper } from "@/typings";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSections } from "@/utils/fetchSection";
import SanityProjects from "@/components/studio/projects";
import { SanityExperiencesComponent } from "@/components/sanityExperiences";
// import sanityClient from "@sanity/client";

export default async function MainPage() {
  // const locale = useLocale();
  // const isActive = locales.includes(locale);
  // const pathname = usePathname();
  // const isActive = pathname === `/${locale}`;
  // const isActive = locales.includes(pathname.slice(1));
  // // console.log("pathname ", pathname);
  // const router = useRouter();
  // if (!isActive) {
  //   // console.log("not active");
  //   router.replace("not-found");
  // }

  const projects: Project[] = await fetchProjects();
  const experiences: Experience[] = await fetchExperiences();
  const sections: SectionWrapper[] = await fetchSections();
  // const skills: Skill[] = await fetchSkills();
  // const skillCategories: SkillCategory[] = await fetchSkillCategories();
  // const socials: Social[] = await fetchSocials();
  // const testimonials: Testimonial[] = await fetchTestimonials();

  // const client = sanityClient({});

  const extractPropsFromSection = (title: string) => {
    const section = sections.find((section) => section.title === title);
    return {
      addSectionColor: section?.addSectionColor || false,
      displayInNav: section?.displayInNav || false,
      dividerBackground: section?.dividerBackground || false,
      dividerPattern: section?.dividerPattern || false,
      heading: section?.heading || "",
      menuUrl: section?.menuUrl || "",
      patternBottom: section?.patternBottom || "",
      patternTop: section?.patternTop || "",
      sectionBackground: section?.sectionBackground,
      sectionColor: section?.sectionColor,
      sectionIcon: section?.sectionIcon || "",
      subText: section?.subText || "",
      title: section?.title || "",
    };
  };

  // const homeProps = extractPropsFromSection("Home");
  const projectsProps = extractPropsFromSection("Project");
  const experienceProps = extractPropsFromSection("Experience");

  console.log("experiences");

  return (
    <main
      // className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 text-white dark:text-red-700">
      className="relative mx-auto flex flex-col overflow-clip bg-lightBackground dark:bg-darkBackground"
    >
      {/*<div className={"relative flex flex-col flex-grow  items-center justify-center"}>*/}
      <FloatingNav navItems={navItems} className={undefined} />
      <div className={"flex w-full justify-between space-x-20"}>
        {/*<section id="sidebar" className={"relative"}>*/}
        <Sidebar />
        <div className="z-0 flex h-full w-full flex-1 flex-grow flex-col items-center overflow-x-auto text-white">
          <Hero />
          <Grid />
          {/*<RecentProjects />*/}
          <SanityProjects projects={projects} {...projectsProps} />
          <Clients />
          <ExperiencesComponent />

          <SanityExperiencesComponent
            experiences={experiences}
            {...experienceProps}
          />

          <Approach />
          <Footer />
          <Footer2 />
        </div>
      </div>
      <ChatBot />
    </main>
  );
}

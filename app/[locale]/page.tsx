// "use client";
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
import SanityProjects from "@/components/sanityProjects";
import { SanityExperiencesComponent } from "@/components/sanityExperiences";
import { RecentProjects } from "@/components/recent-projects";
import Socials from "@/components/socials";
import Skills from "@/components/skills";
import fetchData from "@/app/fetchData";
// import { fetchSocials } from "@/utils/fetchSocials";
// import { fetchProjects } from "@/utils/fetchProjects";
// import { fetchExperiences } from "@/utils/fetchExperiences";
// import { fetchSections } from "@/utils/fetchSection";
// import { fetchSkills } from "@/utils/fetchSkills";
// import { Experience, Project, SectionWrapper, Skill, Social } from "@/typings";

export default async function MainPage() {
  // const projects: Project[] = await fetchProjects();
  // const experiences: Experience[] = await fetchExperiences();
  // const sections: SectionWrapper[] = await fetchSections();
  // const socials: Social[] = await fetchSocials();
  // const skills: Skill[] = await fetchSkills();
  // const skillCategories: SkillCategory[] = await fetchSkillCategories();
  // const testimonials: Testimonial[] = await fetchTestimonials();

  const {
    experiences,
    projects,
    skillCategories,
    skills,
    socials,
    sections,
    siteWides,
    testimonials,
    extractPropsFromSection,
  } = await fetchData();

  // const extractPropsFromSection = (title: string) => {
  //   const section = sections.find((section) => section.title === title);
  //   return {
  //     addSectionColor: section?.addSectionColor || false,
  //     displayInNav: section?.displayInNav || false,
  //     dividerBackground: section?.dividerBackground || false,
  //     dividerPattern: section?.dividerPattern || false,
  //     heading: section?.heading || "",
  //     menuUrl: section?.menuUrl || "",
  //     patternBottom: section?.patternBottom || "",
  //     patternTop: section?.patternTop || "",
  //     sectionBackground: section?.sectionBackground,
  //     sectionColor: section?.sectionColor,
  //     sectionIcon: section?.sectionIcon || "",
  //     subText: section?.subText || "",
  //     title: section?.title || "",
  //   };
  // };

  const projectsProps = extractPropsFromSection("Project");
  const experienceProps = extractPropsFromSection("Experience");
  // const skillProps = extractPropsFromSection("Skill");

  console.log("sanity experiences", experienceProps);
  console.log("sanity projects", projectsProps);

  return (
    <main className="mx-auto flex w-full flex-col items-center overflow-clip bg-lightBackground dark:bg-darkBackground">
      <FloatingNav navItems={navItems} className={undefined} />
      <div className={"flex w-full flex-1"}>
        <Sidebar />
        <div className="inset-0 flex flex-col items-center">
          <Hero />
          <Grid />
          <Skills skills={skills} />
          <RecentProjects />
          <SanityProjects projects={projects} {...projectsProps} />
          <ExperiencesComponent />
          <SanityExperiencesComponent
            experiences={experiences}
            {...experienceProps}
          />
          <Clients />
          <Approach />
          <Socials socials={socials} />
          <Footer />
          <Footer2 />
        </div>
      </div>
      <ChatBot />
    </main>
  );
}

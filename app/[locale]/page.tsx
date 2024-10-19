"use client";
// import React, { useEffect, useState } from "react";
import { Approach } from "@/components/approach";
import { Clients } from "@/components/clients";
import { ExperiencesComponent } from "@/components/experiencesComponent";
import Footer from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";
import Sidebar from "@/components/sidebar";
import ChatBot from "@/components/chatBot";
import SanityProjects from "@/components/sanityProjects";
import { SanityExperiencesComponent } from "@/components/sanityExperiences";
import { RecentProjects } from "@/components/recentProjects";
import fetchData from "@/utils/index";
import Skills from "@/components/skills";
import ContactMe from "@/components/contactMe";
import Socials from "@/components/socials";

// import { Experience, Project, SectionWrapper, Skill, Social } from "@/typings";
// interface IMainPageProps {
//   experiences: Experience[];
//   projects: Project[];
//   skills: Skill[];
//   socials: Social[];
//   sections: SectionWrapper[];
// }

// const MainPage = ({
//   socials,
//   skills,
//   projects,
//   experiences,
//   sections,
// }: IMainPageProps) => {
export default async function Component() {
  // const [sanityData, setSanityData] = useState<SanityDataTypes | null>(null);
  //
  // useEffect(() => {
  //   // let isMounted = true; // flag to track if component is mounted
  //   const sanity = async () => {
  //     const data = await fetchData();
  //     setSanityData(data);
  //   };
  //   sanity();
  //   // return () => {
  //   //   isMounted = false; // cleanup function to set flag to false
  //   // };
  // }, []);

  const sanityData = await fetchData();
  const extractPropsFromSection = (title: string) => {
    const section = sanityData?.sections.find(
      (section) => section.title === title
    );

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

  const projectsProps = extractPropsFromSection("Project");
  const experienceProps = extractPropsFromSection("Experience");
  const socialProps = extractPropsFromSection("Social");
  // const skillProps = extractPropsFromSection("Skill");

  // console.log("sanity experiences", experienceProps);
  // console.log("sanity projects", projectsProps);

  return (
    <main className="flex flex-1 flex-col overflow-clip bg-lightBackground dark:bg-darkBackground">
      <FloatingNav navItems={navItems} />
      <div className={"relative flex flex-row space-x-2 overflow-x-hidden"}>
        <Sidebar />
        <div className="ml-70 relative flex flex-1 flex-col items-center px-1">
          <Hero />
          <Grid />
          {sanityData?.skills && <Skills skills={sanityData.skills} />}
          <div className={"flex flex-col"}>
            <RecentProjects />
            {sanityData?.projects && (
              <SanityProjects
                projects={sanityData.projects}
                {...projectsProps}
              />
            )}
          </div>

          <div>
            <ExperiencesComponent />
            {sanityData?.experiences && (
              <SanityExperiencesComponent
                experiences={sanityData.experiences}
                {...experienceProps}
              />
            )}
          </div>
          <Clients />
          <Approach />
          {sanityData?.socials && (
            <Socials socials={sanityData.socials} {...socialProps} />
          )}
          <ContactMe />
          <Footer />
        </div>
      </div>
      <ChatBot />
    </main>
  );
}

// export async function getServerSideProps() {
//   const {
//     experiences,
//     projects,
//     skills,
//     socials,
//     sections,
//   } = await fetchData();
//
//   return {
//     props: {
//       experiences,
//       projects,
//       socials,
//       skills,
//       sections,
//     },
//   };
// }

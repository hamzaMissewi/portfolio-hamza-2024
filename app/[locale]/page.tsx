"use client";
import React, { useEffect, useState } from "react";
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
import fetchData, { SanityDataTypes } from "@/app/fetchData";
// import { fetchSocials } from "@/utils/fetchSocials";
// import { fetchProjects } from "@/utils/fetchProjects";
// import { fetchExperiences } from "@/utils/fetchExperiences";
// import { fetchSections } from "@/utils/fetchSection";
// import { fetchSkills } from "@/utils/fetchSkills";
// import { Experience, Project, SectionWrapper, Skill, Social } from "@/typings";

// import fetchData from "@/app/fetchData";

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
const MainPage = () => {
  const [sanityData, setSanityData] = useState<SanityDataTypes | null>(null);
  useEffect(() => {
    // let isMounted = true; // flag to track if component is mounted
    const sanity = async () => {
      const data = await fetchData();
      // return data;
      setSanityData(data);
    };
    sanity();
    // return () => {
    //   isMounted = false; // cleanup function to set flag to false
    // };
  }, []);

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

  console.log("sanity experiences", experienceProps);
  console.log("sanity projects", projectsProps);

  return (
    <main className="max-w-screen mx-auto flex flex-col overflow-clip bg-lightBackground dark:bg-darkBackground">
      <FloatingNav navItems={navItems} className={undefined} />
      <div className={"flex flex-1 flex-grow"}>
        <Sidebar />
        <div className="flex max-w-full flex-col overflow-x-hidden">
          <Hero />
          <Grid />
          {/*{sanityData?.skills && <Skills skills={sanityData.skills} />}*/}
          <RecentProjects />
          {sanityData?.projects && (
            <SanityProjects projects={sanityData.projects} {...projectsProps} />
          )}
          <ExperiencesComponent />
          {sanityData?.experiences && (
            <SanityExperiencesComponent
              experiences={sanityData.experiences}
              {...experienceProps}
            />
          )}
          <Clients />
          <Approach />
          {sanityData?.socials && <Socials socials={sanityData.socials} />}
          <Footer />
          <Footer2 />
        </div>
      </div>
      <ChatBot />
    </main>
  );
};

export default MainPage;

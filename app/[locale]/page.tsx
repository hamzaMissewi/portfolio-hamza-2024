"use client";
import React, { useEffect, useState } from "react";
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
import { RecentProjects } from "@/components/recent-projects";
import fetchData, { SanityDataTypes } from "@/utils/index";
import Skills from "@/components/skills";
import ContactMe from "@/components/contactMe";
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

  // console.log("sanity experiences", experienceProps);
  // console.log("sanity projects", projectsProps);

  return (
    <main className="flex h-full w-full flex-col overflow-clip bg-lightBackground dark:bg-darkBackground">
      <FloatingNav navItems={navItems} className={undefined} />
      <div className={"relative flex flex-row space-x-2 overflow-x-hidden"}>
        <Sidebar />
        <div className="ml-70 relative flex flex-1 flex-col items-center px-1">
          <Hero />
          <Grid />
          {sanityData?.skills && <Skills skills={sanityData.skills} />}
          <div>
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
          {/*{sanityData?.socials && <Socials socials={sanityData.socials} />}*/}
          <ContactMe />
          <Footer />
        </div>
      </div>
      <ChatBot />
    </main>
  );
};

export default MainPage;

// export async function getServerSideProps() {
//   const {
//     experiences,
//     projects,
//     skills,
//     socials,
//     sections,
//     // skillCategories,
//     // sections,
//     // testimonials,
//     // extractPropsFromSection,
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

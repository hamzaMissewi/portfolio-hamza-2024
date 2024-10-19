import {
  Experience,
  Project,
  SectionWrapper,
  Skill,
  SkillCategory,
  Social,
  Testimonial,
} from "@/typings";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSections } from "@/utils/fetchSection";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchTestimonials } from "@/utils/fetchTestimonials";
import { fetchSkillCategories } from "@/utils/fetchSkillCategories";

export default async function fetchData() {
  const projects: Project[] = await fetchProjects();
  const experiences: Experience[] = await fetchExperiences();
  const sections: SectionWrapper[] = await fetchSections();
  // const siteWides: Sitewide[] = await fetchSitewide();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  const testimonials: Testimonial[] = await fetchTestimonials();
  const skillCategories: SkillCategory[] = await fetchSkillCategories();

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

  return {
    projects,
    experiences,
    socials,
    skills,
    sections,
    testimonials,
    skillCategories,
    // siteWides,
    extractPropsFromSection,
  };
}

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

export type SanityDataTypes = {
  projects: Project[];
  experiences: Experience[];
  socials: Social[];
  skills: Skill[];
  sections: SectionWrapper[];
  testimonials: Testimonial[];
  skillCategories: SkillCategory[];
};

export default async function fetchData(): Promise<SanityDataTypes> {
  const projects: Project[] = await fetchProjects();
  const experiences: Experience[] = await fetchExperiences();
  const sections: SectionWrapper[] = await fetchSections();
  // const siteWides: Sitewide[] = await fetchSitewide();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  const testimonials: Testimonial[] = await fetchTestimonials();
  const skillCategories: SkillCategory[] = await fetchSkillCategories();

  return {
    projects,
    experiences,
    socials,
    skills,
    sections,
    testimonials,
    skillCategories,
    // siteWides,
  };
}

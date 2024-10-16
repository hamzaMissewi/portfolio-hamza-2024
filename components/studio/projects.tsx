import React, { useRef } from "react";

import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { urlFor } from "@/sanity";
import { BaseImage, Color, Project } from "@/typings";
import { useTranslations } from "next-intl";
import HeadingDivider from "@/components/new/HeadingDivider.component";
import InnerSection from "@/components/new/InnerSection.component";
import Section from "@/components/new/Section";
import ProjectCardComponent from "@/components/new/ProjectCard.component";
import Container from "@/components/new/Container.component";
// import styles from "./Projects.module.scss";

type IProjectsProps = {
  projects: Project[];
  addSectionColor: boolean;
  displayInNav: boolean;
  dividerBackground: boolean;
  dividerPattern: boolean;
  heading: string;
  menuUrl: string;
  patternBottom: BaseImage;
  patternTop: BaseImage;
  sectionBackground: BaseImage;
  sectionColor?: Color;
  sectionIcon?: string;
  subText: string;
  title: string;
};

function SanityProjects({
  addSectionColor,
  displayInNav,
  dividerBackground,
  dividerPattern,
  heading,
  menuUrl,
  patternBottom,
  patternTop,
  projects,
  sectionBackground,
  sectionColor,
  sectionIcon,
  subText,
  title,
}: IProjectsProps) {
  const t = useTranslations("Projects");
  const dataPosition = displayInNav && menuUrl.length > 0 ? menuUrl : null;
  const animatedWrapper = useRef(null);

  const isInViewWrapper = useInView(animatedWrapper, {
    once: true,
  });

  return (
    <AnimatePresence>
      <Section
        dataPosition={dataPosition}
        sectionClassName="relative"
        sectionColor={addSectionColor ? sectionColor?.hex : undefined}
      >
        <HeadingDivider
          title={heading || ""}
          icon={sectionIcon}
          background={dividerBackground ? true : undefined}
          patternBottom={
            dividerPattern && patternBottom.asset
              ? urlFor(patternBottom.asset).url()
              : undefined
          }
          patternTop={
            dividerPattern ? urlFor(patternTop?.asset)?.url() : undefined
          }
          sectionColor={
            addSectionColor && !dividerBackground
              ? sectionColor?.hex
              : "#74c197"
          }
        />
        <InnerSection innerContentClass="relative overflow-hidden">
          {!addSectionColor && sectionBackground && (
            <Image
              alt={`${title} region background image`}
              className="absolute left-0 top-0 h-full w-full object-cover"
              height={1080}
              loading="lazy"
              src={urlFor(sectionBackground.asset).url()}
              width={1920}
            />
          )}
          <motion.div
            animate={
              isInViewWrapper
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            initial={{
              opacity: 0,
              y: 100,
            }}
            ref={animatedWrapper}
            transition={{
              delay: 0.2,
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <Container>
              {/*<p className={`relative text-center ${styles.subheading}`}>*/}
              {/*  {subText}*/}
              {/*</p>*/}
              <div className="flex flex-wrap items-start justify-center">
                {projects.map((project: Project) => (
                  <ProjectCardComponent
                    backgroundText={project?.projectBackground}
                    brandColor={project?.brandColor.hex}
                    coverImage={urlFor(project?.coverImage)?.url()}
                    futureUseText={project?.futureUse || undefined}
                    github={{
                      url: project?.codeURL,
                    }}
                    key={project._id}
                    skills={
                      project?.technologies.map((skill) => skill.title) || []
                    }
                    text={project?.summary}
                    title={project?.title}
                    website={{
                      url: project?.previewURL,
                    }}
                  />
                ))}
              </div>
            </Container>
          </motion.div>
        </InnerSection>
      </Section>
    </AnimatePresence>
  );
}

export default SanityProjects;

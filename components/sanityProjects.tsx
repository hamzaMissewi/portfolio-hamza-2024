"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { urlFor } from "@/sanity/sanity";
import { BaseImage, Color, Project } from "@/typings";
import { useTranslations } from "next-intl";
import InnerSection from "@/components/new/InnerSection.component";
import Section from "@/components/new/Section";
import ProjectCardComponent from "@/components/new/ProjectCard.component";
import Container from "@/components/new/Container.component";
// import HeadingDivider from "@/components/new/HeadingDivider.component";
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
  title: string;
};

function SanityProjects({
                          addSectionColor,
                          displayInNav,
                          menuUrl,
                          projects,
                          sectionBackground,
                          title,
                          // dividerBackground,
                          // dividerPattern,
                          // heading,
                          // patternBottom,
                          // patternTop,
                          // sectionColor,
                          // sectionIcon,
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
        sectionColor={addSectionColor ? "#fff" : undefined}
      >
        {/*<HeadingDivider*/}
        {/*  title={heading || ""}*/}
        {/*  icon={sectionIcon}*/}
        {/*  background={dividerBackground ? true : undefined}*/}
        {/*  patternBottom={*/}
        {/*    dividerPattern && patternBottom.asset*/}
        {/*      ? urlFor(patternBottom.asset).url()*/}
        {/*      : undefined*/}
        {/*  }*/}
        {/*  patternTop={*/}
        {/*    dividerPattern ? urlFor(patternTop?.asset)?.url() : undefined*/}
        {/*  }*/}
        {/*  sectionColor={*/}
        {/*    addSectionColor && !dividerBackground*/}
        {/*      ? sectionColor?.hex*/}
        {/*      : "#b9b9b9"*/}
        {/*  }*/}
        {/*/>*/}
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
              <div className="flex flex-wrap">
                {projects.map((project: Project) => (
                  <ProjectCardComponent
                    key={project._id}
                    backgroundText={project.projectBackground}
                    // brandColor={project.brandColor.hex}
                    coverImage={urlFor(project.coverImage).url()}
                    futureUseText={project.futureUse || undefined}
                    github={{ url: project.codeURL }}
                    skills={project.technologies}
                    text={project.summary}
                    title={project.title}
                    website={{
                      url: project.previewURL,
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

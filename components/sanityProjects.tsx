"use client";
import React, { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import InnerSection from "@/components/new/InnerSection.component";
// import Section from "@/components/new/Section";
import ProjectCardComponent from "@/components/new/ProjectCard.component";
import Container from "@/components/new/Container.component";
import { Project } from "@/sanity.types";
import { urlFor } from "@/lib/imageUrl";
// import { BaseImageInputProps } from "sanity/src/core/form/inputs/files/ImageInput";
// import { BaseImage, Color, Project } from "@/typings";
// import HeadingDivider from "@/components/new/HeadingDivider.component";

type IProjectsProps = {
  projects: Project[];
  // addSectionColor: boolean;
  // displayInNav: boolean;
  // dividerBackground: boolean;
  // dividerPattern: boolean;
  // heading: string;
  // menuUrl: string;
  // title: string;
  //
  // sectionBackground: BaseImageInputProps;
  // patternBottom: BaseImage;
  // patternTop: BaseImage;
  // sectionColor?: Color;
  // sectionIcon?: string;
};

function SanityProjects({
                          projects,
                          // addSectionColor,
                          // displayInNav,
                          // menuUrl,
                          // title,
                          // dividerPattern,
                          // heading,
                          // dividerBackground,
                        }: IProjectsProps) {
  // const t = useTranslations();
  // const dataPosition = displayInNav && menuUrl.length > 0 ? menuUrl : null;
  const animatedWrapper = useRef(null);

  const isInViewWrapper = useInView(animatedWrapper, {
    once: true,
  });

  return (
    <AnimatePresence>
      {/*<Section*/}
      {/*  // dataPosition={dataPosition}*/}
      {/*  sectionClassName="relative"*/}
      {/*  // sectionColor={addSectionColor ? "#fff" : undefined}*/}
      {/*>*/}
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
        {/*{!addSectionColor && sectionBackground && (*/}
        {/*  <Image*/}
        {/*    alt={`${title} region background image`}*/}
        {/*    className="absolute left-0 top-0 h-full w-full object-cover"*/}
        {/*    height={1080}*/}
        {/*    loading="lazy"*/}
        {/*    src={urlFor(sectionBackground.asset).url()}*/}
        {/*    width={1920}*/}
        {/*  />*/}
        {/*)}*/}
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
                  brandColor={project.brandColor}
                  coverImage={project.coverImage ? urlFor(project.coverImage).url() : undefined}
                  // brandColor={project.brandColor.hex}
                  // futureUseText={project.futureUse || undefined}
                  // github={{ url: project.codeURL }}
                  // skills={project.technologies}
                  text={project.summary}
                  title={project.title}
                  website={project.previewURL ? { url: project.previewURL } : undefined}
                />
              ))}
            </div>
          </Container>
        </motion.div>
      </InnerSection>
      {/*</Section>*/}
    </AnimatePresence>
  );
}

export default SanityProjects;

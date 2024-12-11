"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef } from "react";

import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";

// import ModalCard from "../ModalCard/ModalCard.component";
import styles from "./ProjectCard.module.scss";
// import { Dialog } from "@radix-ui/react-dialog";
import * as Dialog from "@radix-ui/react-dialog";
import SkillComponent from "@/components/skillComponent";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity/sanity";

type ProjectCardProps = {
  backgroundText?: string;
  brandColor?: string;
  coverImage: string;
  futureUseText?: string;
  github?: {
    url: string;
  };
  skills: Skill[];
  text: string;
  title: string;
  website: {
    url: string;
  };
};

export default function ProjectCardComponent({
                                               // futureUseText,
                                               backgroundText,
                                               brandColor,
                                               coverImage,
                                               github,
                                               skills,
                                               text,
                                               title,
                                               website,
                                             }: ProjectCardProps) {
  const animatedCard = useRef(null);
  const isInViewCard = useInView(animatedCard, {
    once: true,
  });

  return (
    <AnimatePresence>
      <motion.div
        animate={
          isInViewCard
            ? {
              opacity: 1,
              scale: 1,
              y: 0,
            }
            : {}
        }
        className={`relative px-3.5 ${styles.card}`}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        ref={animatedCard}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div
          className="mb-7"
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className={`block rounded-t-lg px-4 py-2.5 text-center font-medium uppercase ${styles.header}`}
            style={{
              backgroundColor: `${brandColor}`,
            }}
          >
            {title}
          </div>
          <div className="relative">
            <Image
              alt={title}
              height={500}
              loading="lazy"
              src={coverImage}
              width={767}
            />
            <div
              className={`absolute top-0 z-10 h-full w-full ${styles.overlay}`}
            />
            <div
              className={`absolute top-0 z-10 flex h-full w-full items-center justify-center px-4 ${styles.details}`}
            >
              <p
                className={`z-20 text-center ${styles.copy}`}
                style={{
                  transform: "translateZ(75px)",
                }}
              >
                {text}
              </p>
              <span className={`mt-2.5 block h-px w-0 ${styles.line}`} />
            </div>
          </div>
          <div
            className="flex justify-between border-b border-solid py-2.5"
            style={{
              borderColor: brandColor,
            }}
          >
            {skills?.map((skill) => (
              <SkillComponent
                key={skill._id}
                title={skill.title}
                skillUrl={urlFor(skill.logo).url()}
                percent={40}
              />
            ))}
            <div className="flex w-full justify-between">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button
                    className={`rounded-lg p-2.5 uppercase ${styles.button}`}
                    style={{
                      color: brandColor,
                      backgroundColor: backgroundText,
                    }}
                  >
                    Project Info
                  </button>
                </Dialog.Trigger>
                {/*<ModalCard*/}
                {/*  backgroundText={backgroundText}*/}
                {/*  futureUseText={futureUseText}*/}
                {/*  modalLink={website.url}*/}
                {/*  modalTitle={title}*/}
                {/*  skills={skills}*/}
                {/*/>*/}
              </Dialog.Root>
              <div className="flex">
                {github && github.url && (
                  <Link
                    aria-label="Github project profile page"
                    className={styles.iconLink}
                    href={github.url}
                    rel="noopener"
                    target="_blank"
                  >
                    <CodeBracketIcon
                      className="h-8 w-8"
                      style={{ fill: `${brandColor}` }}
                    />
                  </Link>
                )}
                {website && website.url && (
                  <Link
                    aria-label={`${title} page URL`}
                    className={styles.iconLink}
                    href={website.url}
                    rel="noopener"
                    target="_blank"
                  >
                    <EyeIcon className="h-8 w-8" style={{ fill: brandColor }} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

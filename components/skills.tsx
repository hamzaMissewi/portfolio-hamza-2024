"use client";
import { motion } from "framer-motion";
import SkillComponent from "./skillComponent";
import { useTranslations } from "next-intl";
import { Skill } from "@/sanity.types";
import SanitySkill from "@/components/sanitySkill";
import React from "react";
import SkillsByCategory from "@/components/skillsByCategory";

type SkillsProps = { skills: Skill[] };

function Skills({ skills }: SkillsProps) {
  const t = useTranslations("Skills");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={
        "relative mx-auto flex  max-w-[2000px] flex-col  items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
      }
    >
      <h1 className="heading absolute top-36 text-sm uppercase tracking-[3px] text-gray-500">
        <span className="text-purple">{t("title")}</span>
      </h1>

      <div className={"flex w-full flex-wrap items-center space-x-2 p-1"}>
        {skills.map((skill) => (
          <>
            <SanitySkill key={skill._id} skill={skill} />
            Related skills
            {skill.skillCategory?._ref &&
              <SkillsByCategory skillByCategory={skill.skillCategory._ref} />
            }
          </>
        ))}
      </div>


      <div className={"grid grid-cols-4 gap-5"}>
        <SkillComponent
          title={"Javascript - Typescript"}
          skillUrl={
            "https://www.adm.ee/wordpress/wp-content/uploads/2023/12/javascript_and_typescript-1.jpg"
          }
          percent={95}
        />
        <SkillComponent
          title={"Node Js (Express - Koa)"}
          skillUrl={
            "https://www.appdevelopmentagency.com/wp-content/uploads/2019/08/koa-vs-express.png"
          }
          percent={90}
        />
        <SkillComponent
          title={"React Js"}
          skillUrl={
            "https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png"
          }
          percent={85}
        />
        <SkillComponent
          title={"Graph ql"}
          skillUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElXpEZNK5ocb5yYy8wfBv6ODmge4N6tGJTA&s"
          }
          percent={85}
        />
        <SkillComponent
          title={"Mongo Db"}
          skillUrl={
            "https://www.threatdown.com/wp-content/uploads/2024/04/MongoDB_data_breach.png"
          }
          percent={80}
        />
        <SkillComponent
          title={"Next Js"}
          skillUrl={
            "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75"
          }
          percent={75}
        />
        <SkillComponent
          title={"React Native"}
          skillUrl={
            "https://devtop.io/wp-content/uploads/2022/10/react-native-1.png"
          }
          percent={65}
        />
        <SkillComponent
          title={"Sanity"}
          skillUrl={
            "https://avatars.githubusercontent.com/u/17177659?s=280&v=4"
          }
          percent={40}
        />
      </div>
    </motion.div>
  );
}

export default Skills;

"use client";
// import React from "react";
import { motion } from "framer-motion";
import { Stack, Switch, Typography } from "@mui/material";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type SkillProps = { skill: Skill };

function SanitySkill({ skill }: SkillProps) {
  return (
    <Stack
      key={skill._id}
      className={"relative flex cursor-pointer flex-col items-center   py-2"}
      spacing={2}
    >
      <Typography variant={"body2"} fontSize={"medium"}>
        {skill.title}
      </Typography>

      {/*<p>{skill.activeSkill}</p>*/}
      <Switch checked={skill.activeSkill} disabled={true} />
      <p>{skill.category.title}</p>
      {/*<Image src={urlFor(skill.logo).url()} alt={""} />*/}
      <motion.img
        // initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.logo).url()}
        className="h-24 w-24 rounded-full border border-gray-500 bg-white object-cover filter transition duration-300 ease-in-out md:h-28 md:w-28 xl:h-32 xl:w-32"
      />
      <div className={"flex h-full items-center justify-center"}>
        <p className={"text-3xl font-bold text-black opacity-100"}>
          {skill.percent}%
        </p>
      </div>
    </Stack>
  );
}

export default SanitySkill;

"use client";
// import React from "react";
import { motion } from "framer-motion";
import { Stack, Typography } from "@mui/material";
import { Skill } from "@/typings";
import Image from "next/image";
import { urlFor } from "@/sanity";

type SkillProps = {
  // directionLeft?: boolean;
  skillUrl: string;
  percent: number;
  title: string;
} & { skill?: Skill };

function SkillComponent({
  // directionLeft,
  skillUrl,
  percent,
  title,
  skill,
}: SkillProps) {
  return (
    <Stack className={"relative flex flex-col items-center py-2"} spacing={2}>
      <Typography
        // sx={{color: "black", backgroundColor: "white", fontWeight: "bold"}}
        fontSize={"medium"}
      >
        {title}
      </Typography>

      {skill && (
        <div>
          <p>{skill.title}</p>
          <Image src={urlFor(skill.logo).url()} alt={""} />
        </div>
      )}

      <div className={"group relative flex cursor-pointer"}>
        <motion.img
          // initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={skillUrl}
          // group-hover:grayscale
          className="h-24 w-24 rounded-full border border-gray-500 bg-white object-cover filter transition duration-300 ease-in-out md:h-28 md:w-28 xl:h-32 xl:w-32"
        />
        <div
          className={
            "absolute z-0 h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32"
          }
        >
          <div className={"flex h-full items-center justify-center"}>
            <p className={"text-3xl font-bold text-black opacity-100"}>
              {percent}%
            </p>
          </div>
        </div>
      </div>
    </Stack>
  );
}

export default SkillComponent;

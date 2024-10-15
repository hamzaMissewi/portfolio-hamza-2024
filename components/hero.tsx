"use client";
// import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
//
import { useLocale } from "use-intl";
import { useTranslations } from "next-intl";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "@/lib/intl";


const introductionsByLang: { [locale: string]: string[] } = {
  en: [
    "Hi, My name is Hamza Missaoui",
    "I am software engineer and web developer who loves",
    "I love programming and design elegant web applications",
    "I have advanced knowledge in typescript, react, next and node",
    "Knowledge on variety of frameworks like react, next js , django and spring boot",
    "Knowledge in aws cloud serivces and docker containerisation",
  ],
  fr: [
    "Salut, je m'appelle Hamza Missaoui",
    "Je suis ingénieur génie logiciel et développeur web",
    "Je travaille sur des fullstack applications web responsives avec graphql et rest api",
    "J'ai des connaissances avancés en différents langages comme typescript python et java",
    "Aussi frameworks comme react, next js , django et spring boot",
    "Connaissances en aws cloud serivces et docker conteneurisation",
  ],
  ar: [
    "مرحبا، اسمي حمزة ميساوي",
    "أنا مهندس برمجيات ومطور ويب أحب",
    "أنا أحب البرمجة وتصميم تطبيقات الويب الأنيقة",
    "لدي معرفة متقدمة في الآلة الكاتبة والتفاعل والتالي والعقدة",
    "المعرفة بمجموعة متنوعة من أطر العمل مثل رد الفعل، وjs التالي، وجانغو، والتمهيد الربيعي",
    "المعرفة في الخدمات السحابية لـ aws وحاويات الإرساء",
  ],
};


export const Hero = () => {
  const localActive = useLocale();
  const t = useTranslations("Hero");
  const [dynamicTexts] = useTypewriter({
    words: introductionsByLang[localActive],
    // words: [...introductionsByLang[localActive], "<ButtonLovesToCodeMore />"],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        // className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        className="absolute left-0 top-0 flex w-full items-center justify-center bg-grid-black/[0.2] bg-black-100 dark:bg-grid-white/[0.03]">
        <div
          // bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
          className="pointer-events-none absolute inset-0 flex items-center justify-center dark:bg-black-100" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className={"text-sm uppercase text-gray-500"}>{t("title")}</h2>
          <div className={"flex justify-center items-center text-5xl lg:text-6xl"}>
            <h5 className={"text-3xl lg:text-5xl font-semibold"}>{dynamicTexts}</h5>
            <Cursor cursorColor={"#F7AB0A"} />
          </div>

          {/*<h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">*/}
          {/*  Dynamic Web Magic with Next.js*/}
          {/*</h2>*/}

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            // words="Transforming Concepts into Seamless User Experiences"
            words={t("text_effect")}
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            {/*Hi, I&apos;m {links.ownerName}, a Fullstack web developer from Tunisia working with next js and aws other modern technologies.*/}
            {t("title")}
          </p>

          <Link href="#about" className="md:mt-10">
            <MagicButton
              title={t("showWork")}
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

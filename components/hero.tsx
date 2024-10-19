"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { useTranslations } from "next-intl";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "@/lib/intl";

export const Hero = () => {
  const t = useTranslations("Hero");
  const [dynamicTexts] = useTypewriter({
    words: [
      t("words.0"),
      t("words.1"),
      t("words.2"),
      t("words.3"),
      t("words.4"),
      t("words.5"),
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 3,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center pb-20 pt-36">
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
        className="right absolute top-0 flex w-full justify-center bg-black-100 bg-grid-black/[0.2] dark:bg-grid-white/[0.03]"
      >
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white
                    [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"
        />
      </div>

      {/*<p className=" text-sm md:text-lg mb-3 text-2xl uppercase md:tracking-wider">*/}
      {/*  {t("title")}*/}
      {/*</p>*/}

      <div className="relative z-10 my-20 flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
        <div className="mb-3 flex items-center justify-center md:text-lg lg:text-xl">
          <h5 className={"text-2xl font-semibold uppercase md:tracking-wider"}>
            {dynamicTexts}
          </h5>
          <Cursor cursorColor={"#F7AB0A"} />
        </div>

        <TextGenerateEffect
          className="text-blue-100 text-md text-center uppercase tracking-widest"
          words={t("text_effect")}
        />

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
  );
};

// export const introductionsByLang: { [locale: string]: string[] } = {
//   en: [
//     "Hi, My name is Hamza Missaoui",
//     "I am software engineer and web developer who loves",
//     "I love programming and design elegant web applications",
//     "I have advanced knowledge in typescript, react, next and node",
//     "Knowledge on variety of frameworks like react, next js , django and spring boot",
//     "Knowledge in aws cloud serivces and docker containerisation",
//   ],
//   fr: [
//     "Salut, je m'appelle Hamza Missaoui",
//     "Je suis ingénieur génie logiciel et développeur web",
//     "Je travaille sur des fullstack applications web responsives avec graphql et rest api",
//     "J'ai des connaissances avancés en différents langages comme typescript python et java",
//     "Aussi frameworks comme react, next js , django et spring boot",
//     "Connaissances en aws cloud serivces et docker conteneurisation",
//   ],
//   ar: [
//     "مرحبا، اسمي حمزة ميساوي",
//     "أنا مهندس برمجيات ومطور ويب أحب",
//     "أنا أحب البرمجة وتصميم تطبيقات الويب الأنيقة",
//     "لدي معرفة متقدمة في الآلة الكاتبة والتفاعل والتالي والعقدة",
//     "المعرفة بمجموعة متنوعة من أطر العمل مثل رد الفعل، وjs التالي، وجانغو، والتمهيد الربيعي",
//     "المعرفة في الخدمات السحابية لـ aws وحاويات الإرساء",
//   ],
// };

// words: [...introductionsByLang[localActive], "<ButtonLovesToCodeMore />"],

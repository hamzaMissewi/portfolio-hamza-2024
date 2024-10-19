"use client";
import Image from "next/image";
import { Button } from "@/components/ui/moving-borders";
import { BaseImage, Color, Experience } from "@/typings";
import { urlFor } from "@/sanity";
import DateUtils from "@/lib/date";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";

type ISanityExperiences = {
  experiences: Experience[];
  // TODO
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
export const SanityExperiencesComponent = ({
  experiences,
  ...props
}: ISanityExperiences) => {
  const t = useTranslations("Experience");

  return (
    <section id="sanity-experiences" className="py-20">
      {/*<h1 className="heading">*/}
      {/*<span className="text-purple">Sanity {t("title")}</span>*/}
      {/*<span className="text-purple">Sanity experiences</span>*/}
      {/*</h1>*/}
      <div>
        <Typography component={"h4"}>{props.title}</Typography>
        <Typography component={"h4"}>{t("personalProjects")}</Typography>
        <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
          {experiences.map((experience) => (
            <div key={experience._id}>
              <Button
                borderRadius="1.75rem"
                className="flex-1 border-neutral-200 text-white dark:border-slate-800"
                duration={Math.floor(Math.random() * 10000 + 10000)}
              >
                <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
                  <div className="h-30 flex justify-between">
                    <Image
                      width={95}
                      height={87}
                      src={urlFor(experience.companyIcon).url()}
                      alt={experience.company}
                      className="w-32 lg:w-32"
                    />

                    <Image
                      width={95}
                      height={87}
                      src={urlFor(experience.companyLogo).url()}
                      alt={experience.company}
                      className="h-16 w-16"
                      // className="w-16 md:w-20 lg:w-32"
                    />
                  </div>

                  <div className="lg:ms-5">
                    {/*<p className="text-start font-semibold text-white-100">*/}
                    {/*  {experience.role}*/}
                    {/*</p>*/}
                    <h1 className="text-start text-xl font-bold md:text-2xl">
                      {experience.role}
                    </h1>
                    <p className="mt-3 text-start font-semibold text-white-100">
                      {experience.company}
                    </p>
                    <div>
                      <p className="text-start font-semibold text-white-100">
                        {experience.dateStarted}
                      </p>
                      {experience.currentlyWorkplace ? (
                        <p className="text-start font-semibold text-white-100">
                          {DateUtils.getHumanDate(new Date())}
                        </p>
                      ) : (
                        <p className="text-start font-semibold text-white-100">
                          {experience.dateEnded}
                        </p>
                      )}
                    </div>

                    <div
                      className={
                        "my-2 flex w-full flex-col items-center space-y-1"
                      }
                    >
                      <Typography component={"h4"}>{t("skills")}</Typography>
                      <div className={"flex justify-between"}>
                        {experience.technologies.map((skill) => (
                          <div
                            key={skill._id}
                            className={
                              "flex flex-col items-center space-y-1 p-3 shadow-md"
                            }
                          >
                            <p className="text-start font-semibold text-white-100">
                              {skill.title}
                            </p>
                            <p className="text-start font-semibold text-white-100">
                              {skill.activeSkill
                                ? "active skill"
                                : "not active skill"}
                            </p>
                            <Image
                              width={50}
                              height={50}
                              src={urlFor(skill.logo).url()}
                              alt={skill._createdAt}
                              className="h-15 object-cover"
                              // className="w-16 md:w-20 lg:w-32"
                            />
                            {/*<Typography>{technology.category}</Typography>*/}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// export async function getStaticProps() {
//   // const query = '*[_type == "experience"]'; // Adjust this to your schema
//   const query = groq`
//   *[_type == "experience"] {
//     ...,
//     technologies[] ->
//   } | order(_createdAt desc)
// `;
//
//   const experiences = await sanityClient.fetch(query);
//
//   return {
//     props: {
//       experiences,
//     },
//   };
// }

"use client";
import Image from "next/image";
import { Button } from "@/components/ui/moving-borders";
// import { urlFor } from "@/sanity/sanity";
import DateUtils from "@/lib/date";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { Experience } from "@/sanity.types";
import { urlFor } from "@/lib/imageUrl";

type ISanityExperiences = {
  experiences: Experience[];
  // sectionColor?: Color;
  // addSectionColor: boolean;
  // displayInNav: boolean;
  // dividerBackground: boolean;
  // dividerPattern: boolean;
  // heading: string;
  // menuUrl: string;
  // patternBottom: BaseImage;
  // patternTop: BaseImage;
  // sectionBackground: BaseImage;
  // sectionIcon?: string;
  // title: string;
};
export const SanityExperiencesComponent = ({
                                             experiences,
                                             // sectionColor,
                                           }: ISanityExperiences) => {
  // const t = useTranslations("Experience");
  const t = useTranslations();

  return (
    <section
      id="sanity-experiences"
      className="flex flex-col items-center py-20"
    >
      <div className={"flex flex-col items-center justify-center"}>
        <h1 className="heading">
          <span className="text-purple">{t("title")}</span>
          <Typography
            // style={{ bgcolor: sectionColor?.hex }}
            className={"bg-red-500"}
            component={"h4"}
          >
            Experiences
            {/*{props.title}*/}
          </Typography>
        </h1>
        {/*<Typography component={"h4"}>{t("personalProjects")}</Typography>*/}
        <div className="mt-12  grid w-full grid-cols-1 flex-col gap-10 lg:grid-cols-4">
          {experiences.map((experience) => (
            <div key={experience._id}>
              <Button
                borderRadius="1.75rem"
                className="flex-1 border-neutral-200 text-white dark:border-slate-800"
                duration={Math.floor(Math.random() * 10000 + 10000)}
              >
                <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
                  <div className="h-30 flex justify-between">
                    {experience.companyLogo &&
                      <Image
                        width={95}
                        height={87}
                        src={urlFor(experience.companyLogo).url()}
                        alt={experience.company || ""}
                        className="w-32 lg:w-32"
                      />
                    }
                    {experience.companyLogo &&
                      <Image
                        width={95}
                        height={87}
                        src={urlFor(experience.companyLogo).url()}
                        alt={experience.company || "B2b alive"}
                        className="h-16 w-16"
                        // className="w-16 md:w-20 lg:w-32"
                      />
                    }
                  </div>

                  <div className="lg:ms-5">
                    {/*<p className="text-start font-semibold text-white-100">*/}
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
                      {experience.currentlyOccupied ? (
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
                      {/*<Typography component={"h4"}>{t("skills")}</Typography>*/}
                      <Typography component={"h4"}>Skills</Typography>
                      {/*<div className={"flex justify-between items-center"}>*/}
                      {/*  /!*TODO *!/*/}
                      {/*  {experience.technologies.map((skill) => (*/}
                      {/*    <div*/}
                      {/*      key={skill._id}*/}
                      {/*      className={*/}
                      {/*        "flex flex-col items-center space-y-1 p-3 shadow-md"*/}
                      {/*      }*/}
                      {/*    >*/}
                      {/*      <p className="text-start font-semibold text-white-100">*/}
                      {/*        {skill.title}*/}
                      {/*      </p>*/}
                      {/*      <p className="text-start font-semibold text-white-100">*/}
                      {/*        {skill.activeSkill*/}
                      {/*          ? "active skill"*/}
                      {/*          : "not active skill"}*/}
                      {/*      </p>*/}
                      {/*      <Image*/}
                      {/*        width={50}*/}
                      {/*        height={50}*/}
                      {/*        src={urlFor(skill.logo).url()}*/}
                      {/*        alt={skill._createdAt}*/}
                      {/*        className="h-15 object-cover"*/}
                      {/*        // className="w-16 md:w-20 lg:w-32"*/}
                      {/*      />*/}
                      {/*      /!*<Typography>{technology.category}</Typography>*!/*/}
                      {/*    </div>*/}
                      {/*  ))}*/}
                      {/*</div>*/}
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
//   const experiences = await sanityClient.fetch(query);
//
//   return {
//     props: {
//       experiences,
//     },
//   };
// }

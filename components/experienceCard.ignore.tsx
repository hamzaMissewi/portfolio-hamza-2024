"use client";
import { motion } from "framer-motion";
// import Link from "next/link";
import Image from "next/image";
import { Link } from "@/lib/intl";

type ExperienceCardType = {
  image?: string;
  companyName?: string;
  title?: string;
  description?: string;
  images?: { url: string; name: string }[];
  imageLink?: string;
};

export const ExperienceCard = ({
  image,
  companyName,
  title,
  description,
  images,
  imageLink,
}: ExperienceCardType) => {
  return (
    <article
      className={
        "flex w-[200px] flex-shrink-0 flex-col items-center space-y-7 rounded-lg md:w-[600px] xl:w-[900px]" +
        " cursor-pointer snap-center bg-lightBackground p-10 opacity-40 hover:opacity-100 dark:bg-[#292929]" +
        " transition-opacity duration-200" +
        " overflow-hidden"
      }
    >
      <Link
        href={imageLink || ""}
        rel={imageLink ? "noopener noreferrer" : undefined}
        target={imageLink ? "_blank" : undefined}
      >
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={
            "h-32 w-32 rounded-full bg-white object-fill object-center xl:h-[200px] xl:w-[200px]"
          }
          src={image}
          alt={""}
        />
      </Link>

      <div className={"px-0 md:px-10"}>
        <p className={"mt-1 text-2xl font-bold"}>{companyName}</p>
        <h4 className={"text-4xl font-light"}>{title}</h4>
        <div className={"my-2 flex space-x-2"}>
          {/*    TECH USED*/}
          {images &&
            images.map((image, i) => (
              <Image
                key={i}
                width={95}
                height={87}
                className={"h-12 w-12 rounded-full object-fill"}
                alt={image.name}
                src={image.url}
              />
            ))}
        </div>
        <p>{description}</p>

        <ul className={"ml-5 list-disc space-y-4 text-lg"}>
          <li>
            <span>
              Proven Expertise: Experienced software developer with 2 years in
              web developing,including cloud-based solutions.
            </span>
          </li>
          <li>
            <span>
              Innovation and Efficiency: Implemented automated testing
              frameworks and CI/CD pipelines that reduced deployment time by 40%
              and increased code quality.
            </span>
          </li>
          <li>
            <span>
              Leadership and Mentoring: Experienced in mentoring junior
              developers and leading technical teams, fostering a collaborative
              environment that encourages innovation and professional growth.
            </span>
          </li>
        </ul>
      </div>
    </article>
  );
};

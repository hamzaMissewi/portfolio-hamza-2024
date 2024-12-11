"use client";
import React from "react";
import { Social } from "@/typings";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity";
import { useRouter } from "next/navigation";
import { SlSocialGoogle } from "react-icons/sl";
import { useTranslations } from "next-intl";

type ISocialsProps = {
  socials: Social[];
};

function Socials({ socials }: ISocialsProps) {
  const router = useRouter();
  const t = useTranslations("Socials");

  return (
    <div className={"flex"}>
      <h3 className={"absolute top-32 text-center text-xl italic lg:text-3xl"}>
        {t("title")}
      </h3>
      <p className={"text-lg text-darkBackground dark:text-gray-200"}>
        {t("description")}
      </p>

      {socials.map((social) => (
        <div className={"flex"} key={social._id}>
          {social.title.includes("email") ? (
            <div
              className="flex cursor-pointer items-center space-x-1"
              onClick={() => router.push("mailto:hamza.missaoui@b2b-alive.com")}
            >
              <SlSocialGoogle
                // network={"email"}
                // fgColor={"gray"}
                color={"transparent"}
                target={"_blank"}
                href={"mailto:hamza.missaoui@b2b-alive.com?subject=offer_job"}
                className={"size-1.5"}
              />
              <p className={"hidden md:block"}>{t("getInTouch")}</p>
            </div>
          ) : (
            <div>
              <p className={"text-lg font-bold"}>{social.title}</p>
              <p className={"text-md text-gray-900"}>{social.url}</p>
              <Image
                className={`color-${social.primaryColor}`}
                alt={social.title}
                src={urlFor(social.icon).url()}
              />
              {/*<Link*/}
              {/*  aria-label={`${title} profile page`}*/}
              {/*  className={`flex items-center py-12 ${styles.box}`}*/}
              {/*  href={url}*/}
              {/*  rel="noopener"*/}
              {/*  style={{*/}
              {/*    backgroundImage: `linear-gradient(55deg, ${secondaryColor} 20%, ${primaryColor} 50%)`,*/}
              {/*  }}*/}
              {/*  target="_blank"*/}
              {/*>*/}
              {/*  /!*<span className={`uppercase ${styles.heading}`}>*!/*/}
              {/*  /!*  My {title}*!/*/}
              {/*  /!*</span>*!/*/}
              {/*  <span*/}
              {/*    className={`mx-auto my-5 flex h-1.5 w-16 ${styles.divider}`}*/}
              {/*  />*/}
              {/*  <div*/}
              {/*    className={`mx-auto my-0 flex h-40 w-40 items-center justify-center rounded-full ${styles.circle}`}*/}
              {/*  >*/}
              {/*    <Image*/}
              {/*      alt={title}*/}
              {/*      height={100}*/}
              {/*      loading="lazy"*/}
              {/*      src={icon}*/}
              {/*      width={100}*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*</Link>*/}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Socials;

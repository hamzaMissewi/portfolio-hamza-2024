import React from "react";
import { Social } from "@/typings";
import Image from "next/image";
import { urlFor } from "@/sanity";

type ISocialsProps = {
  socials: Social[];
};

// function Socials({ socials }: ISocialsProps) {
//   return (
//     <Link
//       aria-label={`${title} profile page`}
//       className={`flex items-center py-12 ${styles.box}`}
//       href={url}
//       rel="noopener"
//       style={{
//         backgroundImage: `linear-gradient(55deg, ${secondaryColor} 20%, ${primaryColor} 50%)`,
//       }}
//       target="_blank"
//     >
//       <span className={`uppercase ${styles.heading}`}>My {title}</span>
//
//       <span className={`mx-auto my-5 flex h-1.5 w-16 ${styles.divider}`} />
//
//       <div
//         className={`mx-auto my-0 flex h-40 w-40 items-center justify-center rounded-full ${styles.circle}`}
//       >
//         <Image alt={title} height={100} loading="lazy" src={icon} width={100} />
//       </div>
//     </Link>
//   );
// }

function Socials({ socials }: ISocialsProps) {
  return (
    <div className={"flex"}>
      {socials.map((social) => (
        <div className={"flex"} key={social._id}>
          <p className={"text-lg font-bold"}>{social.title}</p>
          <Image
            className={`color-${social.primaryColor}`}
            alt={social.title}
            src={urlFor(social.icon).url()}
          />
        </div>
      ))}
    </div>
  );
}

export default Socials;

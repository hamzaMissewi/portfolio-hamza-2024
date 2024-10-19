"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/lib/intl";
import { links } from "@/config";
import { socialMedia } from "@/data";
import { Social } from "@/typings";
import { urlFor } from "@/sanity";

type IFooterProps = {
  socials?: Social[];
};
const Footer = ({ socials }: IFooterProps) => {
  const t = useTranslations("Footer");

  // const handleClickLocationMap = () => {
  //   const query = encodeURIComponent("El Mourouj 1");
  //   // const url = `https://www.google.com/maps/search/?api=${process.env.GOOGLE_MAPS_KEY}&query=${query}`;
  //   const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
  //   window.open(url, "_blank");
  // };

  return (
    // <div className="absolute -bottom-72 left-0 min-h-96 w-full">
    <footer>
      <div
        className="dark:bg-darkBlueBackground items-left relative bottom-0 left-5 ml-2
      flex w-full flex-col justify-between overflow-hidden p-1 text-center"
      >
        {/*<div className="mb-[100px] mt-5 w-full items-center pb-10 md:mb-auto">*/}
        {/*<Image*/}
        {/*  src="/footer-grid.svg"*/}
        {/*  alt="grid"*/}
        {/*  className="h-full w-full opacity-50"*/}
        {/*  width={1260}*/}
        {/*  height={863}*/}
        {/*/>*/}
        {/*</div>*/}
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright &copy; {new Date().getFullYear()}
          {/*<Link*/}
          {/*  href={"https://www.linkedin.com/in/hamza-missaoui/"}*/}
          {/*  target="_blank"*/}
          {/*  rel="noreferrer noopener"*/}
          {/*  className="text-purple"*/}
          {/*>*/}
          {/*</Link>{" "}*/}
          Hamza |
          <Link href={links.sourceCode} className="underline">
            Source Code
          </Link>
        </p>

        <div className="flex justify-center space-x-2">
          {/*TODO*/}
          {socials &&
            socials.map((social) => (
              <div
                key={social._id}
                style={{ backgroundColor: social.primaryColor.hex }}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="saturate-180 flex size-10 justify-center rounded-lg bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
                >
                  <Image
                    src={urlFor(social.icon).url()}
                    alt={social.title}
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            ))}

          {socialMedia.map((social) => (
            <Link
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 justify-center rounded-lg bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={social.name}
            >
              <Image
                src={social.img}
                alt={`social-${social.name}`}
                width={20}
                height={20}
              />
              <p>{social.name}</p>
            </Link>
          ))}

          {/*<Link*/}
          {/*  href="https://www.linkedin.com/in/hamza-missaoui/"*/}
          {/*  rel={"noopener noreferrer"}*/}
          {/*  target={"_blank"}*/}
          {/*  className={"flex space-x-1"}*/}
          {/*>*/}
          {/*  <i>*/}
          {/*    <LinkedIn />*/}
          {/*  </i>*/}
          {/*  <p>Linkedin</p>*/}
          {/*</Link>*/}

          {/*<Link*/}
          {/*  href="https://github.com/HamzaMissewi"*/}
          {/*  rel={"noopener noreferrer"}*/}
          {/*  target={"_blank"}*/}
          {/*  className={"flex space-x-1"}*/}
          {/*>*/}
          {/*  <i>*/}
          {/*    <GitHubIcon />*/}
          {/*  </i>*/}
          {/*  <p>Github</p>*/}
          {/*</Link>*/}

          {/*<Link*/}
          {/*  href="https://facebook.com/HamzaMissewi"*/}
          {/*  rel={"noopener noreferrer"}*/}
          {/*  target={"_blank"}*/}
          {/*  className={"flex space-x-1"}*/}
          {/*>*/}
          {/*  <i>*/}
          {/*    <Facebook />*/}
          {/*  </i>*/}
          {/*  <p>Facebook</p>*/}
          {/*</Link>*/}

          {/*<Link*/}
          {/*  href="https://www.twitter.com/hamzaostouri/"*/}
          {/*  rel={"noopener noreferrer"}*/}
          {/*  target={"_blank"}*/}
          {/*  className={"flex space-x-1"}*/}
          {/*>*/}
          {/*  <i>*/}
          {/*    <Twitter />*/}
          {/*  </i>*/}
          {/*  <p>Twitter</p>*/}
          {/*</Link>*/}
          {/*<Link*/}
          {/*  href="https://www.youtube.com/hamzatopg/"*/}
          {/*  rel={"noopener noreferrer"}*/}
          {/*  target={"_blank"}*/}
          {/*  className={"flex space-x-1"}*/}
          {/*>*/}
          {/*  <i>*/}
          {/*    <YoutubeIcon />*/}
          {/*  </i>*/}
          {/*  <p>Youtube</p>*/}
          {/*</Link>*/}
        </div>

        <div className="flex flex-col">
          <p>
            <b>Whatsapp</b>: <span>(+216) 56521184</span>
          </p>
          <div className={"flex"}>
            <p>
              <b>{t("address.title")}</b>:{" "}
            </p>
            <Link
              target={"_blank"}
              rel={"noopener noreferrer"}
              href={`https://www.google.com/maps/search/?api=1&query="El Mourouj 1"`}
            >
              <p className="color-blue cursor-pointer underline">
                {t("address.value")}
              </p>
            </Link>
          </div>

          <p>
            <b>{t("email")}</b>:{" "}
            <span>
              hamza.missaoui@b2b-alive.com - hamza.missaoui47@gmail.com{" "}
            </span>
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Image
            width={100}
            height={100}
            className="h-12 w-12 rounded-full grayscale filter hover:grayscale-0"
            src={
              "https://res.cloudinary.com/hamzaostouri/image/upload/v1663664915/avatar_photos/ra3cbssf64n3ihc2fw0o.png"
            }
            alt={"hamza-logo"}
          />

          <h2>&copy; {t("copyright")}</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

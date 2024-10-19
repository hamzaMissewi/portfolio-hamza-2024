"use client";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YoutubeIcon from "@mui/icons-material/YouTube";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/lib/intl";
// import Link from "next/link";

const Footer2 = () => {
  const t = useTranslations("Footer");

  const handleClickLocationMap = () => {
    const query = encodeURIComponent("El Mourouj 1");
    // const url = `https://www.google.com/maps/search/?api=${process.env.GOOGLE_MAPS_KEY}&query=${query}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="dark:bg-darkBlueBackground z-10 flex max-h-[400px] w-full flex-col overflow-hidden p-2">
      <div className="flex justify-between">
        <div className={"space-y-2"}>
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

          <div className={"items-left flex w-fit flex-col"}>
            <Link
              href="https://www.linkedin.com/in/hamza-missaoui/"
              rel={"noopener noreferrer"}
              target={"_blank"}
              className={"flex space-x-1"}
            >
              <i>
                <LinkedIn />
              </i>
              <p>Linkedin</p>
            </Link>

            <Link
              href="https://github.com/HamzaMissewi"
              rel={"noopener noreferrer"}
              target={"_blank"}
              className={"flex space-x-1"}
            >
              <i>
                <GitHubIcon />
              </i>
              <p>Github</p>
            </Link>

            <Link
              href="https://facebook.com/HamzaMissewi"
              rel={"noopener noreferrer"}
              target={"_blank"}
              className={"flex space-x-1"}
            >
              <i>
                <Facebook />
              </i>
              <p>Facebook</p>
            </Link>

            <Link
              href="https://www.twitter.com/hamzaostouri/"
              rel={"noopener noreferrer"}
              target={"_blank"}
              className={"flex space-x-1"}
            >
              <i>
                <Twitter />
              </i>
              <p>Twitter</p>
            </Link>

            <Link
              href="https://www.youtube.com/hamzatopg/"
              rel={"noopener noreferrer"}
              target={"_blank"}
              className={"flex space-x-1"}
            >
              <i>
                <YoutubeIcon />
              </i>
              <p>Youtube</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2">
        {/*<Link href={"#hero"}>*/}
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
        {/*<h2>&copy; 2024 Hamza Missaoui. All rights reserved.</h2>*/}
      </div>
    </footer>
  );
};

export default Footer2;

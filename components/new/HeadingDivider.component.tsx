import Image from "next/image";
import React, { ReactNode } from "react";
import * as HeroIcon from "@heroicons/react/24/solid";
import styles from "./HeadingDivider.module.css";
// import containerStyles from "./Container.module.scss";

type HeadingDividerProps = {
  background?: boolean;
  icon?: string;
  patternBottom?: string;
  patternTop?: string;
  sectionColor?: string;
  title: string;
};

const DynamicHeroIcon = ({ icon }: { icon: string }) => {
  const TheIcon = HeroIcon[icon as keyof typeof HeroIcon];

  return (
    <TheIcon
      aria-hidden="true"
      className={`absolute left-1/2 z-20 h-8 w-7 ${styles.dividerIcon}`}
    />
  );
};

export default function HeadingDivider({
  background,
  icon,
  patternBottom,
  patternTop,
  sectionColor,
  title,
}: HeadingDividerProps) {
  return (
    <>
      {patternTop && (
        <Image
          alt="Top pattern divider"
          className={`absolute left-0 top-0 w-full ${styles.dividerImage}`}
          height={32}
          loading="lazy"
          src={patternTop}
          width={1400}
        />
      )}
      <div
        className={`relative ${background ? `pb-8 pt-12 ${styles.dividerBgWrapper}` : ""}`.trim()}
      >
        <Container>
          <h2 className={`font-medium ${styles.dividerHeading}`}>
            {title}
            <span className="block w-64">
              <span
                className={`relative inline-block h-1 w-full text-center ${styles.dividerLine}`}
              >
                {icon ? (
                  <DynamicHeroIcon icon={icon} />
                ) : (
                  <span
                    className={`absolute left-1/2 z-20 h-6 w-6 rounded-full ${styles.placeholderIcon}`}
                  />
                )}
                <span
                  className={`absolute left-1/2 z-10 h-7 w-11 ${styles.dividerBg}`}
                  style={{
                    backgroundColor: sectionColor,
                  }}
                />
              </span>
            </span>
          </h2>
        </Container>
        {background && (
          <span
            className={`absolute left-1/2 z-10 h-0 w-0 ${styles.triangle}`}
          />
        )}
      </div>
      {patternBottom && (
        <Image
          alt="Bottom pattern divider"
          className={`absolute bottom-0 left-0 w-full ${styles.dividerImage}`}
          height={32}
          loading="lazy"
          src={patternBottom}
          width={1400}
        />
      )}
    </>
  );
}

type ContainerProps = {
  children: ReactNode;
  containerClassName?: string;
};

export function Container({ children, containerClassName }: ContainerProps) {
  return (
    <div
      // className={`mx-auto my-0 px-4 py-0 ${containerStyles.container} ${containerClassName || ""}`.trim()}
      className={`mx-auto my-0 px-4 py-0 ${containerClassName || ""}`.trim()}
    >
      {children}
    </div>
  );
}

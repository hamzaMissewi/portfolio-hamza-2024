import React, { ReactNode } from "react";

// import styles from "./Container.module.scss";

type ContainerProps = {
  children: ReactNode;
  containerClassName?: string;
};

export default function Container({
  children,
  containerClassName,
}: ContainerProps) {
  return (
    <div
      // ${styles.container}
      className={`mx-auto my-0 px-4 py-0 ${containerClassName || ""}`.trim()}
    >
      {children}
    </div>
  );
}

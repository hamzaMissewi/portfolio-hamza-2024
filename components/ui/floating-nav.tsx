"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Link } from "@/lib/intl";
import { useState } from "react";
import { navItems } from "@/data";
import { cn } from "@/lib/utils";

type FloatingNavProps = {
  navItems: typeof navItems;
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const { user } = useUser();
  // const signOut = useSignOut();

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 50) {
        setVisible(true);
      } else {
        if (current > lastScrollY) {
          setVisible(false); // Scrolling down
        } else {
          setVisible(true); // Scrolling up
        }
      }
      setLastScrollY(current);
    }
  });

  return (
    // <nav className={"container flex justify-between"}>
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4" +
            " rounded-3xl border border-white/[0.2] bg-white px-3 py-5 dark:bg-black-100" +
            " shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
      >
        {/*<SignedOut>*/}
        {/*  <SignInButton />*/}
        {/*</SignedOut>*/}
        {/*<SignedIn>*/}
        {/*  <UserButton />*/}
        {/*</SignedIn>*/}

        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center text-neutral-600 hover:text-neutral-500 dark:text-neutral-50" +
                " dark:hover:text-neutral-300"
            )}
          >
            <span className="mr-5 !cursor-pointer text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};

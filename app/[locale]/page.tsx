"use client";
import { Approach } from "@/components/approach";
import { Clients } from "@/components/clients";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-nav";
import { RecentProjects } from "@/components/recent-projects";
import { navItems } from "@/data";
import Sidebar from "@/components/sidebar";
// import ChatBot from "@/components/chatBot";

const MainPage = () => {
  return (
    <main
      className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 text-white dark:text-red-700">
      {/*<nav className={"flex justify-between dark:bg-black bg-white"}>*/}
      <FloatingNav navItems={navItems} className={undefined} />
      {/*</nav>*/}

      <div className={"flex flex-row justify-between w-full h-full flex-grow"}>
        <Sidebar />
        <div className="w-full h-full max-w-8xl">
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          {/*<ContactMe />*/}
          <Footer />
          {/*<ChatBot />*/}
        </div>
      </div>
    </main>
  );
};

export default MainPage;

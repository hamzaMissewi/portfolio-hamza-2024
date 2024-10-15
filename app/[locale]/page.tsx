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
import ChatBot from "@/components/chatBot";
import Footer2 from "@/components/footer2";
// import ContactMe from "@/components/contactMe";


const MainPage = () => {
  // const locale = useLocale();
  // const isActive = locales.includes(locale);
  // const pathname = usePathname();
  // const isActive = pathname === `/${locale}`;
  // const isActive = locales.includes(pathname.slice(1));
  // // console.log("pathname ", pathname);
  // const router = useRouter();
  // if (!isActive) {
  //   // console.log("not active");
  //   router.replace("not-found");
  // }


  return (
    <main
      // className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 text-white dark:text-red-700">
      className="relative mx-auto flex flex-col overflow-clip bg-lightBackground dark:bg-darkBackground">
      {/*<div className={"relative flex flex-col flex-grow  items-center justify-center"}>*/}
      <FloatingNav navItems={navItems} className={undefined} />
      <div className={"flex w-full justify-between space-x-20"}>
        {/*<section id="sidebar" className={"relative "}>*/}
        <Sidebar />
        {/*</section>*/}
        <div
          className="flex flex-col flex-1 flex-grow overflow-x-auto items-center w-full h-full z-0 text-white">
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          {/*<ContactMe />*/}
          <Footer />
          <Footer2 />
        </div>
      </div>
      <ChatBot />
    </main>
  );
};

export default MainPage;

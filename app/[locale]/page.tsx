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
      className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-lightBackground dark:bg-darkBackground text-black-100 dark:text-white">
      {/*{!isActive ? redirect("/not-found") : (*/}
      <div className={"flex flex-row w-full h-full"}>
        <Sidebar />

        <div className={"p-1 flex flex-col flex-grow"}>
          <FloatingNav navItems={navItems} className={undefined} />
          <div className="w-full h-full max-w-8xl z-0">
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
      </div>
    </main>
  );
};

export default MainPage;

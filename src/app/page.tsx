import {redirect} from "next/navigation";

function Home() {
    redirect("/en");
    // const locale = useLocale();
    // if (locale !== "en") {
    //     redirect("/en");
    // }
}

export default Home;

import {redirect} from "next/navigation";
import {useLocale} from "next-intl";

function Home() {
    const locale = useLocale();
    if (locale !== "en") {
        redirect("/en");
    }
}

export default Home;

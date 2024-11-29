import React from "react";
import HomeComponent from "@/components/home";
import { locales, useRouter } from "@/lib/intl";
import { useParams } from "next/navigation";

export default async function MainPage({
                                         params: { locale },
                                       }: {
  params: { locale: string };
}) {
  // const sanityData = await fetchData();
  // const [sanityData, setSanityData] = useState<SanityDataTypes | null>(null);
  // useEffect(() => {
  //   const sanity = async () => {
  //     const data = await fetchData();
  //     setSanityData(data);
  //   };
  //   sanity();
  // }, []);

  const router = useRouter();
  const params = useParams();
  // const { locale } = router;

  // Supported languages
  // const supportedLanguages = ["en", "fr", "es"];

  const paramsLocale = params?.locale as string;

  // If the locale is not supported, redirect to English
  if (!locales.includes(paramsLocale)) {
    router.replace(`/${paramsLocale}`, { locale: "/en" });
  }

  // return <HomeComponent sanityData={sanityData} />;
  return <HomeComponent />;
}

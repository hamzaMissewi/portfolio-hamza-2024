import React from "react";
import HomeComponent from "@/components/home";
import { locales, useRouter } from "@/lib/intl";
// import { useParams } from "next/navigation";

export default async function MainPage({ params }: {
  params: Promise<{ locale: string }>
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
  // const params = useParams();
  const paramsLocale = (await params).locale;

  // If the locale is not supported, redirect to English
  if (!locales.includes(paramsLocale)) {
    router.replace(`/${paramsLocale}`, { locale: "/en" });
  }

  // const socials = await fetchSocials();
  // const profile = await getProfile();
  // const experiences = await fetchExperiences();
// const sections=await getSections()

  // return <HomeComponent sanityData={sanityData} />;
  return <HomeComponent />;
}

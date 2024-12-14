import React from "react";
import HomeComponent from "@/components/home";
// import { locales, useRouter } from "@/lib/intl";

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

  const paramsLocale = (await params).locale;
  // // If the locale is not supported, redirect to English
  // if (!locales.includes(paramsLocale)) {
  //   router.replace(`/${paramsLocale}`, { locale: "/en" });
  // }

  return <HomeComponent />;
}

// export async function getStaticProps({ locale }: GetStaticPropsContext) {
//   return {
//     props: {
//       messages: (await import(`../../locales/${locale}.json`)).default,
//     },
//   };
// }

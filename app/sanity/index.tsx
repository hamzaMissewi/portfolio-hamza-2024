import { Studio } from "sanity";
import { config } from "@/sanity";
// import { getProfile } from "@/utils/fetchSkills";

export default function SanityPage() {
  return <Studio config={config} />;
}

// export default async function SanityProfile() {
//   const profile: ProfileType[] = await getProfile();
//
//   return (
//     <main className="mx-auto max-w-7xl px-6 lg:px-16">
//       <section className="mb-16 mt-20 flex flex-col items-start justify-between gap-x-12 lg:mt-32 xl:flex-row xl:items-center xl:justify-center">
//         {profile &&
//           profile.map((data) => (
//             <div key={data._id} className="max-w-2xl lg:max-w-2xl">
//               <h1 className="mb-6 min-w-full text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:min-w-[700px] lg:leading-[3.7rem]">
//                 {data.headline}
//               </h1>
//               // Add more content as needed
//             </div>
//           ))}
//       </section>
//     </main>
//   );
// }

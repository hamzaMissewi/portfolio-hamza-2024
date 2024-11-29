"use client";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";
// import { Testimonial } from "@/typings";
// import { urlFor } from "@/sanity";

export const Clients = ({ clients }: { clients?: Testimonial[] }) => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="relative flex h-[50vh] flex-col items-center justify-center  overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {clients &&
          clients.map((client) => (
            <div>
              <h1>{client.role}</h1>
              <h2>{client.quote}</h2>
              <h4>{client.author}</h4>
              <Image src={urlFor(client.image).url()} alt={client.quote} />
            </div>
          ))}

        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
              <Image
                height={28}
                width={143}
                src={img}
                alt={`${name}'s logo`}
                className="w-5 md:w-24"
              />
              <Image
                height={28}
                width={131}
                src={nameImg}
                alt={name}
                className="md:w-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

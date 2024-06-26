"use client";
import Link from "next/link";
import { cn, sortPosts } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { posts } from "@/.velite";
import { PostItem } from "@/components/post-item";
import { TypeAnimation } from "react-type-animation";
import { Icons } from "@/components/icons";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="flex flex-col mb-24 items-center justify-center">
          <div className="w-full hidden xl:block absolute">
            <Icons.blob_thing />
          </div>
        </div>
        <div className="container flex flex-col gap-5">
          <div className="text-center z-20">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
              <TypeAnimation
                sequence={[
                  "Je suis Théo Kreder-bail",
                  5000,
                  "Je suis aspirant développeur",
                  5000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h1>
            {/* <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-primary">
              <TypeAnimation
                sequence={[1500, "Je suis aspirant développeur", 2000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h2> */}
            <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl mt-3">
              Bienvenue sur mon site, ici vous pouvez retrouver mon CV, mes
              projets et mon blog documentant mes projets
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center sm:flex-row z-20">
            <Link
              href="/about"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              Voir mon CV et mes projets
            </Link>

            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              Voir mon blog
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Derniers articles
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

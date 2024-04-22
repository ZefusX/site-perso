import Link from "next/link";
import { cn, sortPosts } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { posts } from "@/.velite";
import { PostItem } from "@/components/post-item";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-5">
          <div className="mx-12 xl:mx-52">
            <h5 className="text-muted-foreground">Bonjour,</h5>
          </div>
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
              Je suis Théo Kreder-Bail
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-muted-foreground">
              Je suis aspirant développeur
            </h2>
            <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl mt-3">
              Bienvenue sur mon site, ici vous pouvez retrouver mon CV, mes
              projets et mon blog documentant mes projets
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
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

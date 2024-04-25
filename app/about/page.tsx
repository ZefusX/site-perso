import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            A propos de moi
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <h2 className="text-2xl font-bold">Informations générales</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mt-6">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>TKB</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words text-primary">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Aspirant développeur
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Elève de terminale en spécialité maths et informatique, je suis
          passionné par le développement depuis 5 ans. J&apos;ai commencé avec
          Python avant de m&apos;orienter vers le développement web (en
          utilisant des technologies tel que React et NextJS). Aujourd&apos;hui
          je code des projets pour résoudre des problèmes personnels, me
          challenger sur un ou plusieurs aspects, ou pour en apprendre plus sur
          certaines notions
        </p>
      </div>
      <hr className="my-8" />
      <h2 className="text-2xl font-bold">Compétences</h2>
      <div className="grid lg:grid-cols-9 grid-cols-4 gap-12 items-center md:items-start mt-6 lg:justify-center">
        <div className="h-12 w-12">
          <Icons.language_python />
          <span className="sr-only">Python</span>
          <p className="text-muted-foreground mt-2">Python</p>
        </div>
        <div className="h-12 w-12">
          <Icons.language_go />
          <span className="sr-only">Golang</span>
          <p className="text-muted-foreground mt-2">Golang</p>
        </div>
        <div className="h-12 w-12">
          <Icons.language_html />
          <span className="sr-only">HTML</span>
          <p className="text-muted-foreground mt-2">HTML</p>
        </div>
        <div className="h-12 w-12">
          <Icons.language_tailwind />
          <span className="sr-only">Tailwind CSS</span>
          <p className="text-muted-foreground mt-2">Tailwind</p>
        </div>
        <div className="h-12 w-12">
          <Icons.language_javascript />
          <span className="sr-only">Javascript</span>
          <p className="text-muted-foreground mt-2">Javascript</p>
        </div>
        <div className="h-12 w-12">
          <Icons.language_react />
          <span className="sr-only">React</span>
          <p className="text-muted-foreground mt-2">React</p>
        </div>
        <div className="h-12 w-12">
          <Icons.language_next />
          <span className="sr-only">NextJS</span>
          <p className="text-muted-foreground mt-2">NextJS</p>
        </div>
        <div className="h-12 w-12">
          <Icons.language_linux />
          <span className="sr-only">Linux</span>
          <p className="text-muted-foreground mt-2">Linux</p>
        </div>
        <div className="h-12 w-12">
          <Icons.language_git />
          <span className="sr-only">Git</span>
          <p className="text-muted-foreground mt-2">Git</p>
        </div>
      </div>
    </div>
  );
}

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        <div>
          <div className="h-12 w-12">
            <Icons.language_python />
          </div>
          <span className="sr-only">Python</span>
          <p className="text-muted-foreground mt-2">Python</p>
        </div>
        <div>
          <div className="h-12 w-12">
            <Icons.language_go />
          </div>
          <span className="sr-only">Golang</span>
          <p className="text-muted-foreground mt-2">Golang</p>
        </div>
        <div>
          <div className="h-12 w-12">
            <Icons.language_html />
          </div>
          <span className="sr-only">HTML</span>
          <p className="text-muted-foreground mt-2">HTML</p>
        </div>
        <div>
          <div className="h-12 w-12">
            <Icons.language_tailwind />
          </div>
          <span className="sr-only">Tailwind CSS</span>
          <p className="text-muted-foreground mt-2">Tailwind</p>
        </div>
        <div>
          <div className="h-12 w-12">
            <Icons.language_javascript />
          </div>
          <span className="sr-only">Javascript</span>
          <p className="text-muted-foreground mt-2">Javascript</p>
        </div>
        <div>
          <div className="h-12 w-12">
            <Icons.language_react />
          </div>
          <span className="sr-only">React</span>
          <p className="text-muted-foreground mt-2">React</p>
        </div>
        <div>
          <div className="h-12 w-12">
            <Icons.language_next />
          </div>
          <span className="sr-only">NextJS</span>
          <p className="text-muted-foreground mt-2">NextJS</p>
        </div>
        <div>
          <div className="h-12 w-12">
            <Icons.language_linux />
          </div>
          <span className="sr-only">Linux</span>
          <p className="text-muted-foreground mt-2">Linux</p>
        </div>
        <div>
          <div className="h-12 w-12">
            <Icons.language_git />
          </div>
          <span className="sr-only">Git</span>
          <p className="text-muted-foreground mt-2">Git</p>
        </div>
      </div>
      <hr className="my-8" />
      <h2 className="text-2xl font-bold">Autre</h2>
      <div className="flex flex-col">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Suis-je disponible pour vous aider ?
            </AccordionTrigger>
            <AccordionContent>
              Oui. Vous pouvez me contacter par mail via l'icone en bas du site
              !
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Comment ai-je appris à coder ?</AccordionTrigger>
            <AccordionContent>
              Grâce a de nombreuses essais et échecs, des vidéos d'explications
              et les cours d'NSI pour renforcer les bases.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Quand ce site a-t-il été créé ?</AccordionTrigger>
            <AccordionContent>
              J'ai commencé début avril et je l'ai déployé le 25 avril 2024.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Qu'est-ce que j'envisage pour la suite ?
            </AccordionTrigger>
            <AccordionContent>
              J'envisage des études en école d'ingénieur (spécialisé dans
              l'informatiques). A part cela, les licences et BUT d'informatiques
              sont mes autres choix. Si je ne suis pas prit en première année,
              j'envisage d'entrer dans une école d'ingénieur à BAC +3.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

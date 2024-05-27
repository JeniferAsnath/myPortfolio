import Gallery from "@/components/Gallery";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

function ProjetsPage() {
  return (
    <Section className="bg-gray-100 py-10">
      <div className="mb-8 flex ">
        <div className=" w-1/2 text-lg text-gray-600 dark:text-gray-400">
          <p>
            Découvrez les services que je propose en tant que développeur web et
            mobile. De la conception initiale au déploiement final, je suis là
            pour vous aider à réaliser vos projets numériques.
          </p>
        </div>
        <div className="flex">
          <Image
            src="/homepage-seen-computer-screen(1).jpg"
            height={800}
            width={800}
          />
        </div>
      </div>

      <Section title="Projets web">
        <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
          Découvrez quelques-unes de mes réalisations web. Voici quelques-uns
          des projets sur lesquels j’ai pu travailler, incluant des
          développements de sites web, des fonctionnalités et des webdesigns.
          Ces projets sont réalisés en entreprise et en freelance. Les projets
          sont essentiellement axés sur le développement web (de sites web ou de
          fonctionnalités) et le webdesign, mais vous verrez qu’il y a tout de
          même un brin de webmarketing par-ci par là. 😉
        </p>
        <Gallery />
      </Section>

      <Section title="Projets mobiles">
        <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
          Découvrez quelques-unes de mes réalisations mobiles. J'ai travaillé
          sur diverses applications mobiles, apportant des solutions innovantes
          et fonctionnelles pour répondre aux besoins de différents projets,
          tant en entreprise qu’en freelance.
        </p>
        <Gallery />
      </Section>
    </Section>
  );
}

export default ProjetsPage;

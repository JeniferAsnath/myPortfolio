import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <Section>
      <Section Name={"Qui suis-je?"}>
        <div className="flex">
          <p className="flex-3">
            Salut ! Appele moi jeje, une développeuse web et mobile passionnée.
            Avec une passion pour la technologie et une obsession pour
            l'innovation, je suis constamment à la recherche de nouvelles façons
            de repousser les limites du développement numérique.
          </p>
          <Image
                width={300}
                height={300}
                src="/7444704-removebg-preview.png"
                alt="Développement Web sur Mesure"
                className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
        </div>
      </Section>
      <Section Name={"Ma passion pour le développement"}>
        <div>
          <p>
            Depuis que j'ai découvert ma passion pour le développement web il y
            a quelques années, j'ai plongé tête baissée dans ce monde excitant
            et en constante évolution. Ce qui m'enthousiasme le plus, c'est la
            possibilité de créer quelque chose à partir de rien et de voir mes
            idées prendre vie à l'écran.
          </p>
        </div>
      </Section>
      <Section Name={"Mon parcours professionnel"}>
        <div>
          <p>
            Après avoir obtenu mon certificat en développement web et mobile à
            la Kadea Academy, j'ai commencé ma carrière en tant que développeur
            junior chez Kadea. Depuis lors, j'ai travaillé sur une multitude de
            projets passionnants, acquérant de nouvelles compétences et affinant
            mon expertise à chaque étape du chemin.
          </p>
        </div>
      </Section>
      <Section Name={"Ma philosophie de travail"}>
        <div>
          <p>
            Pour moi, le développement web est bien plus qu'un simple métier -
            c'est une passion et une forme d'art. Je crois en la qualité,
            l'attention aux détails et l'engagement envers l'excellence dans
            tout ce que je fais. Chaque ligne de code que j'écris est le reflet
            de cet engagement envers la perfection.
          </p>
        </div>
      </Section>
      <Section Name={"Au-delà du code"}>
        <div>
          <p>
            Quand je ne suis pas occupé à coder, vous me trouverez probablement
            en train de lire un bon livre, de jouer de la musique ou de partir à
            l'aventure en plein air. J'aime aussi passer du temps avec ma
            famille et mes amis, explorer de nouveaux endroits et découvrir de
            nouvelles cultures.
          </p>
        </div>
      </Section>
      <Section Name={"Contactez-moi"}>
        <div>
          <p>
            Vous avez un projet excitant en tête ou simplement envie de discuter
            de développement web ? Je serais ravi de vous entendre ! N'hésitez
            pas à me contacter pour discuter de vos besoins et voir comment je
            peux vous aider à concrétiser votre vision numérique.
          </p>
        </div>
      </Section>
    </Section>
  );
}

export default AboutPage;

"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {
  faGithub,
  faWhatsapp,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedChevronDown from "@/components/Chevrondown";
import Section from "@/components/Section";
import PostgreSQL from "@/components/icons/PostgreSQLicon";
import ExpressIcon from "@/components/icons/ExpressIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import NodeIcon from "@/components/icons/NodeIcon";
import FigmaIcon from "@/components/icons/FigmaIcon";
import WordPressIcon from "@/components/icons/WordPressIcon";
import NextIcon from "@/components/icons/NextIcon";
import AppleAndroidIcon from "@/components/icons/AppleAndroidIcon";
import AnimatedText from "@/components/AnimatedText";
import AnimatedImage from "@/components/AnimatedImage";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home({ Component, pageProps }) {
  const [dark, setDark] = useState(false);

  return (
    <>
      <Section>
        <div className="flex flex-col lg:flex-row justify-between items-center  mb-16">
          <div className="w-1/2 order-1 lg:order-1 space-y-4 p-6 lg:p-16 items-end self-end justify-end ">
            <AnimatedText className="space-y-3">
              <AnimatedText className="font-bold text-3xl py-6 text-center lg:text-left mb-4">
                Bienvenue
                <br /> sur mon Portfolio !
              </AnimatedText>
              <p>
                Je suis Jenifer Asnath, créatrice passionnée du web et du
                mobile. Mon objectif est de réaliser vos aspirations digitales
                avec des solutions innovantes.
              </p>
              <p>
                À travers chaque projet, je crée des expériences en ligne qui
                captivent votre audience.
              </p>
            </AnimatedText>
            <div className="mt-36 space-y-3">
              <p className="font-bold text-lg">Prêt à briller en ligne ?</p>
              <div className="bg-gray-400 py-2 px-6 float-right text-center md:w-48 w-full md:justify-center font-bold text-white dark:bg-white dark:text-dark">
                <Link href="#">Me contacter</Link>
              </div>
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-1 px-4 w-full h-[65vh] ">
            <AnimatedImage
              direction="right"
              source="/online-school-equipment-home(1).jpg"
              width={900}
              height={900}
              className="w-full h-full object-cover flex-1 order-1 lg:order-1 px-4"
            />
          </div>
        </div>
        <AnimatedChevronDown />
      </Section>

      <Section title={"Mon expertise"}>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
          Je me sens à l'aise avec les technologies suivantes :
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  justify-center items-center py-12">
          <div className="flex flex-col justify-center items-center space-y-2 border-r-1 border-gray-400 hover:bg-gris">
            <PostgreSQL color="currentColor" />
            <p className="text-center">PostgreSQL</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 border-r-1 border-gray-400 hover:bg-gris">
            <ExpressIcon color="currentColor" />
            <p className="text-center">Express</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 border-r-1 border-gray-400 hover:bg-gris">
            <ReactIcon color="currentColor" />
            <p className="text-center">React</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 hover:bg-gris  ">
            <NodeIcon color="currentColor" />
            <p className="text-center">Node JS</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center py-6 mb-12">
          <div className="flex flex-col justify-center items-center space-y-2 border-r-1 border-gray-400 hover:bg-gris ">
            <NextIcon color="currentColor" />
            <p className="text-center">Next</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 border-r-1 border-gray-400 hover:bg-gris ">
            <AppleAndroidIcon color="currentColor" />
            <p className="text-center">Apple-Android</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 border-r-1 border-gray-400 hover:bg-gris ">
            <FigmaIcon color="currentColor" />
            <p className="text-center">Figma</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2  hover:bg-gris ">
            <WordPressIcon color="currentColor" />
            <p className="text-center">WordPress</p>
          </div>
        </div>
      </Section>

      <Section title={"Ma promesse"}>
        <div className="flex flex-col w-full md:flex-row lg:w-[80%] justify-center items-center m-auto py-8 px-6">
          <AnimatedImage
            direction="left"
            src="/handshake_10729200.png"
            width={250}
            height={200}
            className="md:w-1/3 p-10 w-1/2 flex-2 h-auto float-right  md:h-auto"
          />
          <AnimatedText className="md:w-1/2 flex-1 justify-end items-end self-end m-auto p-10 w-full text-lg text-center md:text-left lg:p-10  lg:text-left  h-80">
            Mon engagement en tant que créatrice web et mobile est de
            transcender vos aspirations digitales en des réalisations
            mémorables. Chaque projet que je touche est imprégné de mon
            dévouement à créer des expériences en ligne qui non seulement
            captivent, mais qui aussi reflètent fidèlement votre identité.
            Préparez-vous à propulser votre présence digitale vers de nouveaux
            sommets, ensemble, dès aujourd'hui !
          </AnimatedText>
        </div>
      </Section>

      <Section title={"Mon travail"}>
        <ImageCarousel />
      </Section>

      <Section title={"Rejoignez moi!"}>
        <div className="py-10 max-w-screen-lg mx-auto items-center justify-center ">
          <p>
            Vous souhaitez rester connecté(e) et suivre mes dernières actualités
            ? Rejoignez-moi sur les réseaux sociaux ! Vous trouverez ci-dessous
            les liens vers mes profils où je partage mes projets, mes
            inspirations et mes conseils :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg">
              <Link
                href="https://github.com/JeniferAsnath"
                className="text-gray-300 hover:text-white mr-4"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
              <p className="text-gray-300 font-bold text-lg">Jenifer Asnath</p>
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg">
              <Link href="#" className="text-gray-300 hover:text-white mr-4">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  size="2x"
                  className="text-green-900"
                />
              </Link>
              <p className="text-gray-300 font-bold text-lg">Jenifer Asnath</p>
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg">
              <Link href="#" className="text-gray-300 hover:text-white mr-4">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="text-purple-900"
                />
              </Link>
              <p className="text-gray-300 font-bold text-lg">Jenal wang</p>
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg">
              <Link href="#" className="text-gray-300 hover:text-white mr-4">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="text-blue-700  "
                />
              </Link>
              <p className="text-gray-300 font-bold text-lg">
                Jenifer Asnath Lungwangu
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

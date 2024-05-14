"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { faGithub, faWhatsapp, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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

export default function Home({ Component, pageProps }) {
  const [dark, setDark] = useState(false);

  return (
    <>
      <Section>
        <div className="flex flex-col md:flex-row items-center mb-10">
          <h1 className="font-bold text-5xl py-6 md:w-1/2 md:pr-10">
            Freelance web
          </h1>
          <div className="flex-1 md:w-1/2 px-4">
            <Image
              src="/online-school-equipment-home(1).jpg"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center py-8 space-y-4 md:space-x-4 md:space-y-0">
          <div className="w-full md:w-2/3">
            <h2 className="font-bold text-xl pb-10">
              Bienvenue sur mon Portfolio !
            </h2>
            <p>
              Je suis Jenifer Asnath, une créatrice passionnée du web et du
              mobile. Mon objectif est de concrétiser vos aspirations digitales
              avec des solutions innovantes et captivantes.
            </p>
            <p>
              À travers chaque projet, je m'efforce de créer des expériences en
              ligne qui reflètent votre essence et captivent votre audience.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <p className="font-bold text-lg">
              Prêt à faire briller votre présence digitale ?
            </p>
            <p className="mb-5">
              Dès aujourd'hui et ensemble, créons une expérience numérique
              inoubliable !
            </p>
            <p className="bg-slate-700 w-full py-2 px-6 text-center font-bold text-white dark:bg-white dark:text-dark">
              <Link href="#">me contacter</Link>
            </p>
          </div>
        </div>
      </Section>
      
      <Section title={"Mon expertise"}>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Je me sens à l'aise avec les technologies suivantes :
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4  justify-center items-center py-12 ">
          <div className="flex flex-col justify-center items-center space-y-2 border-r-2">
            <PostgreSQL color="currentColor" />
            <p className="text-center">PostgreSQL</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 border-r-2">
            <ExpressIcon color="currentColor" />
            <p className="text-center">Express</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 border-r-2">
            <ReactIcon color="currentColor" />
            <p className="text-center">React</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 ">
            <NodeIcon color="currentColor" />
            <p className="text-center">Node JS</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center py-6 ">
          <div className="flex flex-col justify-center items-center space-y-2 border-r-2">
            <NextIcon color="currentColor" />
            <p className="text-center">Next</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 border-r-2">
            <AppleAndroidIcon color="currentColor" />
            <p className="text-center">Apple-Android</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 border-r-2">
            <FigmaIcon color="currentColor" />
            <p className="text-center">Figma</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 ">
            <WordPressIcon color="currentColor" />
            <p className="text-center">WordPress</p>
          </div>
        </div>
      </Section>

      <Section title={"Ma promesse"}>
        <div className="flex max-w-screen-lg justify-center mx-auto py-12 px-6">
          <div className="flex-3 p-6 ">
            <Image
              src="/handshake_10729200.png"
              width={250}
              height={200}
              className="flex float-left "
            />
            {!dark && (
              <Image
                src="/right-arrow-angle_7568194.svg"
                width={150}
                height={150}
                className="flex float-right"
              />
            )}
            {dark && (
              <Image
                src="/right-arrow-angle_7568194.png"
                width={150}
                height={150}
                className="flex float-right"
              />
            )}
          </div>

          <div className="flex-2 w-[55%] h-svh flex items-center">
            <p className="text-lg">
              Mon engagement en tant que créatrice web et mobile est de
              transcender vos aspirations digitales en des réalisations
              mémorables. Chaque projet que je touche est imprégné de mon
              dévouement à créer des expériences en ligne qui non seulement
              captivent, mais qui aussi reflètent fidèlement votre identité.
              Préparez-vous à propulser votre présence digitale vers de nouveaux
              sommets, ensemble, dès aujourd'hui !
            </p>
          </div>
        </div>
      </Section>
      
      <Section title={"Rejoignez moi!"}>
        <div className="py-10 max-w-screen-lg mx-auto items-center justify-center m-auto w-[85%] ">
          <p>
            Vous souhaitez rester connecté(e) et suivre mes dernières actualités
            ? Rejoignez-moi sur les réseaux sociaux ! Vous trouverez ci-dessous
            les liens vers mes profils où je partage mes projets, mes
            inspirations et mes conseils :
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-6">
            <div className="flex items-center bg-dark p-6">
              <Link
                href="https://github.com/JeniferAsnath"
                className="text-gray-300 hover:text-white mr-4"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
              <p className="text-gray-300 font-bold text-lg">Jenifer Asnath</p>
            </div>
            <div className="flex items-center bg-dark p-6">
              <Link href="#" className="text-gray-300 hover:text-white mr-4">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-green-500"/>
              </Link>
              <p className="text-gray-300 font-bold text-lg">Jenifer Asnath</p>
            </div>{" "}
            <div className="flex items-center bg-dark p-6">
              <Link href="#" className="text-gray-300 hover:text-white mr-4">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="text-purple-500" />
              </Link>
              <p className="text-gray-300 font-bold text-lg">Jenal wang</p>
            </div>{" "}
            <div className="flex items-center bg-dark p-6">
              <Link href="#" className="text-gray-300 hover:text-white mr-4">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-500"/>
              </Link>
              <p className="text-gray-300 font-bold text-lg">Jenifer Asnath Lungwangu</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

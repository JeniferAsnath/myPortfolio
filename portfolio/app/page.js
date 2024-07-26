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
import { faLaptopCode, faMobileAlt, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

export default function Home({ Component, pageProps }) {
  const [dark, setDark] = useState(false);

  const services = [
    {
      icon: faLaptopCode,
      title: "Développement web",
      question: "Vous avez besoin d'un site web professionnel pour votre entreprise ?",
      details: [
        "Création de sites web sur mesure",
        "Optimisation SEO",
        "Développement de sites e-commerce",
        "Maintenance et mise à jour"
      ]
    },
    {
      icon: faMobileAlt,
      title: "Développement mobile",
      question: "Vous cherchez à atteindre vos clients sur leurs smartphones ?",
      details: [
        "Applications iOS et Android",
        "Design réactif et intuitif",
        "Intégration d'API",
        "Support et maintenance"
      ]
    },
    {
      icon: faChalkboardTeacher,
      title: "Besoin d'un formateur ?",
      question: "Vous souhaitez apprendre à coder ou à utiliser des outils numériques ?",
      details: [
        "Cours de programmation",
        "Ateliers pratiques",
        "Coaching personnalisé",
        "Support continu"
      ]
    }
  ];
  return (
    <>
      <Section>
        <div className="flex flex-col lg:flex-row justify-between items-center  mt-16">
          <div className="w-[50%] -ml-32 -mb-6  order-1 lg:order-1 space-y-4 p-8 lg:p-16 items-end self-end justify-end ">
            <AnimatedText className="space-y-3 ">
              <AnimatedText className="font-bold text-3xl py-6 text-center lg:text-left mb-4">
                Bienvenue
                <br /> sur mon Portfolio !
              </AnimatedText>
              <p className="text-lg">
                Je suis Jenifer Asnath, créatrice passionnée du web et du
                mobile. Mon objectif est de réaliser vos aspirations digitales
                avec des solutions innovantes.
              </p>
              <p className="text-lg">
                À travers chaque projet, je crée des expériences en ligne qui
                captivent votre audience.
              </p>
            </AnimatedText>
            <div className="-mr-20  space-y-4 ">
              <p className="font-bold text-lg ">Prêt à briller en ligne ?</p>
              <div className="  py-1 px-6 float-right text-center text-lg md:w-48 w-full md:justify-center font-bold dark:text-white text-dark">
                <Link href="#">Me contacter</Link>
              </div>
            </div>
          </div>
          <div className=" -mb-20 h-96 w-52 dark:bg-gray-800 bg-slate-300 "></div>

          <div className="w-[70%] order-1 lg:order-1   h-[65vh] ">
            <div className="-mb-28 h-52 w-52 dark:bg-gris bg-currentColor "></div>
            <AnimatedImage
              direction="right"
              source="/Snapchat-828531616.jpg"
              width={900}
              height={900} text-gray-300
              className="  z-50  object-cover flex-1 order-1 lg:order-1 px-24"
            />
            <div className="float-right h-60 -mt-28  w-60 dark:bg-slate-300 bg-currentColor"></div>

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
      <Section title={"Mes services"} >
        <div className="container mx-auto mt-10">
          <div className="flex flex-wrap justify-center">
            {services.map((service, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="text-center p-6 border-gray-200 rounded-lg transition duration-300">
                  <FontAwesomeIcon icon={service.icon} className=" text-currentColor text-xl p-2 mb-4  rounded-full dark:bg-gray-400" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="mb-4">{service.question}</p>
                  <div className="text-left">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-center mb-2">
                        <span className="mr-2 text-green-500">✓</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
          <AnimatedText className="md:w-1/2 flex-1 justify-end items-end self-end m-auto2 p-10 w-full text-lg text-center md:text-left lg:p-10  lg:text-left  h-80">
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

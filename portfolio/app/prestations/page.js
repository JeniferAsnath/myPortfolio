import Section from "@/components/Section";
import Image from "next/image";
import React from "react";

function PrestationsPage() {
  return (
    <Section className="bg-gray-100 py-10 flex flex-col items-center">
      <div className="flex">
        <div >
          <h1 className="text-4xl font-bold ">Services Web et mobile</h1>
          <p>
            Développement web ? Développement mobile ? Besoin d 'un formateur ?
          </p>
          <p></p>
        </div>
        <div>
        <Image
                width={800}
                height={800}
                src="/7444704-removebg-preview.png"
                alt="Développement Web sur Mesure"
                className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
        </div>
      </div>
      <div className="mb-8 items-center justify-center text-center ">
        <p className="text-4xl font-bold text-center text-white">
          Ce que je peux faire pour vous
        </p>
      </div>
      <div className="grid lg:grid-cols-2">
        <Section Name="Développement Web sur Mesure" className="w-4/5">
          <div className=" flex-col md:flex-row justify-center items-center md:gap-6">
            <div className=" bg-slate-500 w-auto flex  justify-center items-center ">
              <Image
                width={200}
                height={200}
                src="/7444704-removebg-preview.png"
                alt="Développement Web sur Mesure"
                className=" rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className=" p-6">
              <p className="mb-4 text-white text-center">
                Besoin d'un site web sur mesure pour votre entreprise ou votre
                projet personnel ?
              </p>
              <div className=" list-disc list-inside text-white">
                <span className=" list-disc list-inside">
                  Création de sites web responsive
                </span>
                <span className=" list-disc list-inside">
                  Intégration de fonctionnalités avancées selon vos exigences
                </span>
                <span className=" list-disc list-inside">
                  Optimisation pour les moteurs de recherche (SEO)
                </span>
                <span className=" list-disc list-inside">
                  Assistance et maintenance continue
                </span>
              </div>
            </div>
          </div>
        </Section>

        <Section Name="Développement d'Applications Mobiles" className="w-4/5">
          <div className=" md:flex-row justify-center items-center md:gap-6">
            <div className=" justify-center items-center mb-6 md:mb-0 md:mr-6">
              <Image
                width={300}
                height={300}
                src="/76523-removebg-preview.png"
                alt="Développement d'Applications Mobiles"
                className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className=" p-6">
              <p className="mb-4 text-white text-center">
                Besoin d'une application mobile sur mesure pour votre entreprise
                ou votre projet personnel ?
              </p>
              <div className="list-disc list-inside text-white">
                <span className=" list-disc list-inside">
                  Conception et développement d'applications natives ou hybrides
                </span>
                <span className=" list-disc list-inside">
                  Intégration de fonctionnalités avancées telles que la
                  géolocalisation, les notifications push, etc.
                </span>
                <span className=" list-disc list-inside">
                  Tests rigoureux pour assurer la qualité et la performance de
                  l'application
                </span>
                <span className=" list-disc list-inside">
                  Support post-lancement et mises à jour régdivières
                </span>
              </div>
            </div>
          </div>
        </Section>

        <Section Name="Optimisation des Performances" className="w-4/5">
          <div className=" md:flex-row justify-center items-center md:gap-6">
            <div className="flex justify-center items-center mb-6 md:mb-0 md:mr-6">
            <Image
                width={300}
                height={300}
                src="/76523-removebg-preview.png"
                alt="Développement d'Applications Mobiles"
                className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className=" p-6">
              <p className="mb-4 text-white">
                Description : Votre site web ou votre application mobile est
                lent à charger ?
              </p>
              <div className="  list-disc list-inside text-white">
                <span className=" list-disc list-inside">
                  Audit complet des performances pour identifier les problèmes
                </span>
                <span className=" list-disc list-inside">
                  Optimisation du code et des ressources pour réduire les temps
                  de chargement
                </span>
                <span className=" list-disc list-inside">
                  Mise en cache et compression des données pour améliorer
                  l'efficacité
                </span>
                <span className=" list-disc list-inside">
                  Suivi et analyse des performances après l'optimisation
                </span>
              </div>
            </div>
          </div>
        </Section>

        <Section Name="Migration et Mise à Niveau" className="w-4/5">
          <div className="md:flex-row justify-center items-center md:gap-6">
            <div className=" justify-center items-center mb-6 md:mb-0 md:mr-6">
            <Image
                width={300}
                height={300}
                src="/7444704-removebg-preview.png"
                alt="Développement Web sur Mesure"
                className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className=" p-6">
              <p className="mb-4 text-white">
                Description : Besoin de migrer votre site web vers une nouvelle
                plateforme ou de mettre à niveau votre application vers une
                version plus récente ? Je vous accompagne tout au long du
                processus pour assurer une transition en douceur.
              </p>
              <div className=" list-disc list-inside text-white">
                <span className=" list-disc list-inside">
                  Évaluation des besoins de migration ou de mise à niveau
                </span>
                <span className=" list-disc list-inside">
                  Planification et exécution de la transition, en minimisant les
                  interruptions de service
                </span>
                <span className=" list-disc list-inside">
                  Tests complets pour garantir la stabilité et la compatibilité
                  après la migration
                </span>
                <span className=" list-disc list-inside">
                  Formation et support pour votre équipe sur la nouvelle
                  plateforme ou version
                </span>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Section>
  );
}

export default PrestationsPage;

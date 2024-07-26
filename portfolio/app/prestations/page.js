import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
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
    <section className="container mx-auto mt-10">
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="text-center p-6 border-gray-200 rounded-lg transition duration-300">
              <FontAwesomeIcon icon={service.icon} className="text-6xl text-currentColor mb-4" />
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
    </section>
  );
};

export default Services;

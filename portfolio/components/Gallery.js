import Image from "next/image";
import Section from "./Section";
import image from "../public/online-school-equipment-home(1).jpg";

const images = [
  { index: 1, path: image, alt: 'Gallery image 1' },
  { index: 2, path: image, alt: 'Gallery image 2' },
  { index: 3, path: image, alt: 'Gallery image 3' },
  { index: 4, path: image, alt: 'Gallery image 4' },
  { index: 5, path: image, alt: 'Gallery image 1' },
  { index: 6, path: image, alt: 'Gallery image 2' },
  { index: 7, path: image, alt: 'Gallery image 3' },
  { index: 8, path: image, alt: 'Gallery image 4' },
  { index: 9, path: image, alt: 'Gallery image 4' },

];

export default function Gallery() {
  return (
    <Section>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-auto pb-3/4">
                <Image
                 src={image.path}
                 alt={image.alt}
                 layout="responsive"
                 width={400}
                 height={600}
                 className="transform transition-transform duration-300 hover:scale-105  inset-0 w-full h-full"
               
                />
            
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">{image.alt}</h3>
                <p className="text-gray-600">Description of the project.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

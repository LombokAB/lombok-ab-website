import { Workshop } from '@/data/workshops-data';
import { Carousel } from '@/components/Carousel';
import Image from 'next/image';
import Link from 'next/link';

interface WorkshopsSectionProps {
  title: string;
  workshops: Workshop[];
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({
  title,
  workshops,
}) => {
  const autoSlide = true;
  const interval = 10000;
  return (
    <section
      className="md:px-12 bg-primary-grey min-h-dvh px-6 lg:px-16 content-center py-10 md:py-10 lg:py-0"
      id="workshops"
    >
      <div className="container flex flex-col items-center justify-center flex-wrap">
        <h2 className="font-bold text-center text-white">{title}</h2>
        <Carousel autoSlide={autoSlide} interval={interval}>
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center gap-6 py-6 md:py-20 px-12 md:px-24"
            >
              {/* Image Container */}
              <div className="relative w-full md:w-1/2 max-h-[600px] h-auto flex items-center justify-center">
                <Image
                  src={workshop.bannerImage}
                  alt={workshop.title || 'Workshop Image'}
                  width={600}
                  height={350}
                  className="rounded-lg object-cover w-full h-auto max-h-[600px]"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 p-4 md:p-8">
                <p className="text-lg mb-3 md:mb-4 text-white text-start">
                  {workshop.description}
                </p>
                <Link
                  href={workshop.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-design-green underline text-lg "
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

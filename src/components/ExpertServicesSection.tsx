import { Service } from '@/data/services-data';
import { ServiceCard } from './ServiceCard';

interface ExpertServicesProps {
  header: string;
  services: Service[];
}

export const ExpertServicesSection: React.FC<ExpertServicesProps> = ({
  header,
  services,
}) => {
  return (
    <section className="md:px-12 bg-primary-grey min-h-dvh px-6 lg:px-16 content-center py-10 md:py-10 lg:py-0">
      <div className="container mx-auto">
        <h2 className="font-bold text-center text-white mb-12 ">{header}</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              iconSrc={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

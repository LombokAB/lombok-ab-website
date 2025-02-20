import { Service } from '@/data/services-data';
import { ServiceCard } from './ServiceCard';

interface ExpertServicesProps {
  header: string;
  services: Service[];
}

export const ExpertServices: React.FC<ExpertServicesProps> = ({ header, services }) => {
  return (
    <section className="md:px-12 bg-[#37373C] min-h-dvh px-6 lg:px-16 content-center">
      <h2 className="text-2xl font-bold text-center text-white mb-12 ">{header}</h2>
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
    </section>
  );
};

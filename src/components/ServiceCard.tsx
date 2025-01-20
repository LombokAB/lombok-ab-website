import Image from 'next/image';

interface ServiceCardProps {
  icon: HTMLImageElement;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <Image src={icon} alt="Service Icon" className="h-8 w-8" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
};

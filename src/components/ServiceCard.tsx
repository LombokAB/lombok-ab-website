import Image from 'next/image';

interface ServiceCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <div className="bg-transparent p-8 rounded-sm shadow-custom-top-bottom text-white flex flex-col gap-6">
      <Image
        src={iconSrc}
        alt={`Icon for ${title} service`}
        className="h-8 w-8"
        width={32}
        height={32}
      />
      <h3 className="text-lg font-bold text-start">{title}</h3>
      <p className="text-sm mt-2 text-start">{description}</p>
    </div>
  );
};

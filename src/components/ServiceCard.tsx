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
      <h2 className="font-bold text-start">{title}</h2>
      <p className="mt-2 text-start">{description}</p>
    </div>
  );
};

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface HeroProps {
  children?: React.ReactNode;
  name: string;
  title: string;
  paragraph: string;
  imageUrl?: string;
  buttonText: string;
  buttonLink?: string;
}

export const Hero: React.FC<HeroProps> = ({
  name,
  title,
  paragraph,
  imageUrl,
  buttonText,
}) => {
  return (
    <div className="flex-grow flex items-center justify-center relative z-10">
      <div className="flex flex-col flex-wrap lg:flex-row items-center justify-center gap-8 lg:gap-16 text-white">
        <div className="flex flex-1 flex-col gap-10 align-middle justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-start">{name}</h1>
          <h2 className="text-xl lg:text-2xl text-start -mt-6">{title}</h2>
          <div className="flex gap-6">
            <GitHubLogoIcon className="h-8 w-8" />
            <LinkedInLogoIcon className="h-8 w-8" />
          </div>
          <p className="text-start">{paragraph}</p>
          <div>
            <Button variant="default">{buttonText}</Button>
          </div>
        </div>
        <div className="relative w-80 h-auto overflow-hidden flex-1 flex align-middle justify-center -mt-28 z-10">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Hero Image"
              objectFit="contain"
              width={320}
              height={494}
              className=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

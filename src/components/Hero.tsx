import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface HeroProps {
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
  buttonLink,
}) => {
  return (
    <div className="relative min-h-dvh w-full bg-banner bg-cover content-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tl from-black to-zinc-800 opacity-85"></div>
      {/* Text Content */}
      <div className="relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 ">
        <div className="flex-1 text-white  lg:text-left space-y-6 max-w-prose gap-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-start">{name}</h2>
          <h1 className="text-xl lg:text-2xl text-start">{title}</h1>
          <div className="flex justify-center lg:justify-start  gap-6 md:gap-10">
            <GitHubLogoIcon className="h-8 w-8" />
            <LinkedInLogoIcon className="h-8 w-8" />
          </div>
          <p className="text-lg text-start">{paragraph}</p>
          {buttonLink && (
            <a href={buttonLink}>
              <Button variant="default">{buttonText}</Button>
            </a>
          )}
        </div>
        {/* Hero Image */}
        {imageUrl && (
          <div className="relative w-64 md:w-80 flex justify-center md:-mt-28 ">
            <Image
              src={imageUrl}
              alt="Hero Image"
              objectFit="contain"
              width={320}
              height={494}
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
};

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  name: string;
  title: string;
  paragraph: string;
  imageUrl?: string;
  buttonTextCTA: string;
  buttonTextCV: string;
}

export const Hero: React.FC<HeroProps> = ({
  name,
  title,
  paragraph,
  imageUrl,
  buttonTextCTA,
  buttonTextCV,
}) => {
  return (
    <section
      className="relative min-h-dvh w-full bg-banner bg-cover px-6 lg:px-16 content-center pt-20 pb-10 md:py-10 lg:py-0"
      id="hero"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tl from-black to-zinc-800 opacity-85"></div>

      {/* Flex Container */}
      <div className="relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-center gap-6">
        {/* Text Content */}
        <div className="flex-1 text-white lg:text-left space-y-6 max-w-prose order-2 md:order-1">
          <h2 className="text-5xl lg:text-6xl font-bold text-start">{name}</h2>
          <h1 className="text-3xl lg:text-4xl text-start">{title}</h1>
          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6 md:gap-10">
            <GitHubLogoIcon className="h-8 w-8 hover:text-design-green/90" />
            <LinkedInLogoIcon className="h-8 w-8 hover:text-design-green/90" />
          </div>
          <p className="text-start text-lg">{paragraph}</p>
          <div className="flex flex-row md:justify-start justify-around gap-6 md:gap-10">
            <Link href="#contact">
              <Button variant="default" className="mt-6 text-md">
                {buttonTextCTA}
              </Button>
            </Link>
            <a href="/cv-attila-fazekas.pdf" download>
              <Button variant="outline" className="mt-6 text-md">
                {buttonTextCV}
              </Button>
            </a>
          </div>
        </div>
        {/* Hero Image */}
        {imageUrl && (
          <div className="relative w-64 md:w-80 flex justify-center -mt-10  order-1 md:order-2 md:mb-16 mb-10">
            <Image
              src={imageUrl}
              alt="Hero Image"
              objectFit="contain"
              style={{ width: 'auto', height: 'auto' }}
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
};

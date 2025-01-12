import { Navbar } from '@/components/Navbar';
import { BackgroundOverlay } from './BackgroundOverlay';
import Logo from '../../public/Logo.svg';

interface BannerProps {
  children?: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <>
      <BackgroundOverlay>
        <div className="h-screen w-full bg-cover bg-banner">
          <div className="container mx-auto flex flex-col h-full w-[90%] py-4 relative">
            <Navbar
              className="relative z-10"
              items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Skills', href: '/skills' },
                { label: 'Experience', href: '/experience' },
                { label: 'Workshops', href: '/workshops' },
                { label: 'Contact', href: '/contact' },
              ]}
              logoUrl={Logo}
            />
            {children}
          </div>
        </div>
      </BackgroundOverlay>
    </>
  );
};

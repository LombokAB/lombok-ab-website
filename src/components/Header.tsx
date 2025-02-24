import { Navbar } from '@/components/Navbar';
import Logo from '../../public/Logo.svg';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-filter backdrop-blur-lg">
      <div className='container mx-auto flex flex-col py-4"'>
        <Navbar
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '#hero' },
            { label: 'Skills', href: '#skills' },
            { label: 'Experience', href: '#experience' },
            { label: 'Workshops', href: '#workshops' },
            { label: 'Contact', href: '#contact' },
          ]}
          logoUrl={Logo}
        />
      </div>
    </header>
  );
};

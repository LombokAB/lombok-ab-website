import { Banner } from '@/components/Banner';
import { Hero } from '@/components/Hero';
import { GoCodeOfConduct } from 'react-icons/go';
import HeroPicture from '../../public/HeroPicture.svg';

export default function Home() {
  return (
    <main>
      <section>
        <Banner>
          <Hero
            name="Attila Fazekas"
            title="Test Automation Engineer "
            paragraph="I help teams succeed in improving their testing efforts through smart implementation of tools so they can release higher quality products faster."
            imageUrl={HeroPicture}
            buttonText="Downlaod CV"
            buttonLink="mailto:attilafazekas@example.com"
          />
        </Banner>
        <GoCodeOfConduct />
      </section>
    </main>
  );
}

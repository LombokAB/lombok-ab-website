import { Hero } from '@/components/Hero';
import HeroPicture from '../../public/HeroPicture.svg';
import { ExpertServices } from '@/components/ExpertServices';
import { servicesData } from '@/data/services-data';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero
        name="Attila Fazekas"
        title="Test Automation Engineer "
        paragraph="I help teams succeed in improving their testing efforts through smart implementation of tools so they can release higher quality products faster."
        imageUrl={HeroPicture}
        buttonText="Download CV"
        buttonLink="mailto:attilafazekas@example.com"
      />
      <ExpertServices header="What I do" services={servicesData} />
    </main>
  );
}

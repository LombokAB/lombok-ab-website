import { Hero } from '@/components/Hero';
import HeroPicture from '../../public/HeroPicture.svg';
import { ExpertServicesSection } from '@/components/ExpertServicesSection';
import { servicesData } from '@/data/services-data';
import { Header } from '@/components/Header';
import { ExperienceSection } from '@/components/ExperienceSection';
import { workExperienceData } from '@/data/work-experience-data';
import { workshopsAndCoursesData } from '@/data/workshops-and-courses';
import { certificationsData } from '@/data/certifications-data';

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
      <ExpertServicesSection header="What I do" services={servicesData} />
      <ExperienceSection
        workExperienceTitle="Work Experience"
        workExperienceData={workExperienceData}
        workshopsAndCoursesData={workshopsAndCoursesData}
        workshopsAndCoursesTitle="Attended workshops 
       & courses"
        certificationsData={certificationsData}
        certificationsTitle="ISTQB certifications"
      />
    </main>
  );
}

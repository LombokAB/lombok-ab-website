import { Certification, certificationsData } from '@/data/certifications-data';
import { WorkExperience } from '@/data/work-experience-data';
import { WorkshopsAndCourses } from '@/data/workshops-and-courses';

interface ExperienceSectionProps {
  workExperienceTitle: string;
  workExperienceData: WorkExperience[];
  workshopsAndCoursesData: WorkshopsAndCourses[];
  workshopsAndCoursesTitle: string;
  certificationsData: Certification[];
  certificationsTitle: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  workExperienceTitle,
  workExperienceData,
  workshopsAndCoursesData,
  workshopsAndCoursesTitle,
  certificationsTitle,
}) => {
  return (
    <section
      className="relative w-full bg-banner bg-cover min-h-dvh px-6 lg:px-16 content-center py-10"
      id="experience"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tl from-black to-zinc-800 opacity-85" />
      {/* Text Content */}
      <div className="relative z-10 mx-auto container grid lg:grid-cols-2 gap-6 lg:gap-24 justify-center items-start">
        {/* Work Experience Column */}
        <div className="text-white max-w-prose flex flex-col h-full gap-6">
          <h2>{workExperienceTitle}</h2>
          <ul className="bg-primary-grey p-10 rounded-sm shadow-custom-top-bottom  list-disc-design-green-large list-disc flex flex-col gap-6">
            {workExperienceData.map((workExperience) => (
              <li key={workExperience.id} className="space-y-6">
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-design-green ">
                    {workExperience.company}
                  </h3>
                  <span> - </span>
                  <h4 className="text-lg">{workExperience.title}</h4>
                </div>
                <p className="border-l-4 border-l-design-green pl-4 -ml-5 border-gray-300 text-gray-300 text-start">
                  {workExperience.description}
                </p>
                <p className="text-start text-design-green font-semibold ">
                  {workExperience.startDate} - {workExperience.endDate}
                </p>
                <p className="text-start">{workExperience.location}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white gap-6 max-w-prose flex flex-col h-full">
          {/* workshops And Courses  Column */}
          <h2>{workshopsAndCoursesTitle}</h2>
          <ul className="bg-primary-grey p-10 rounded-sm shadow-custom-top-bottom list-disc-design-green-medium list-disc flex flex-col gap-6 text-pretty relative text-lg">
            <div
              className="absolute left-[1.58rem] top-14 bottom-10 w-0.5 bg-[#5C5C60]"
              aria-hidden="true"
            />
            {workshopsAndCoursesData.map((workshop, index) => (
              <li
                key={workshop.id}
                className={`relative ${index === 0 ? 'text-4xl ml-2' : ''}`}
              >
                <h4 className={`text-lg ${index === 0 ? '-ms-2' : ''}  `}>
                  {workshop.title}
                  <span className="text-design-green"> - {workshop.date}</span>
                </h4>
              </li>
            ))}
          </ul>
          <div className="flex flex-col h-full justify-end gap-6">
            <h2>{certificationsTitle}</h2>
            <ul className="bg-primary-grey rounded-sm shadow-custom-top-bottom list-disc-design-green-medium list-disc p-10 space-y-6">
              {certificationsData.map((certification) => (
                <li key={certification.id}>
                  <div className="flex gap-4 text-lg text-pretty flex-wrap">
                    <h4>{certification.title}</h4>
                    <p className="text-design-green"> - {certification.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

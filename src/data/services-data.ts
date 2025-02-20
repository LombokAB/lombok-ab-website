export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    icon: '/icons/automate-icon.svg',
    title: 'Automate',
    description:
      'I design and build tools that help teams to take their first or their next step in the test automation journey.',
  },
  {
    id: 2,
    icon: '/icons/software-testing-icon.svg',
    title: 'Software testing',
    description:
      'I use my software testing skills to apply a critical eye to the delivered software and documentation.',
  },
  {
    id: 3,
    icon: '/icons/continuous-testing-icon.svg',
    title: 'Continuous testing integration',
    description:
      'I integrate continuous testing practices into the development pipeline, allowing for early detection of issues and faster feedback loops.',
  },
  {
    id: 4,
    icon: '/icons/agile-icon.svg',
    title: 'Agile',
    description:
      'I mainly work and thrive in fast-paced agile projects by optimizing and streamlining processes.',
  },
  {
    id: 5,
    icon: '/icons/training-icon.svg',
    title: 'Training',
    description:
      'I love teaching others to code, helping them grow professionally by effectively conveying best practices and concepts through hands-on examples.',
  },
  {
    id: 6,
    icon: '/icons/innovate-icon.svg',
    title: 'Innovate',
    description:
      'I enjoy experimenting with new ideas and approaches. One example is my Selenium pet project written in Kotlin: Kolibrium.',
  },
];

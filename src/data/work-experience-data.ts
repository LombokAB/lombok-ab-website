export interface WorkExperience {
  id: number;
  company: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
}

export const workExperienceData: WorkExperience[] = [
  {
    id: 1,
    company: 'Qbtech',
    title: 'Senior Test  & Verification Engineer (Backend)',
    description:
      'Develop a Kotlin test automation framework, maintain documentation, conduct testing, and support backlog grooming.',
    startDate: 'Sep 2023',
    endDate: 'Present',
    location: 'Stockholm, Sweden',
  },
  {
    id: 2,
    company: 'PayPal',
    title: 'Senior Test Engineer',
    description:
      'Developed a cross-platform UI test automation framework, led automation efforts, tested and released POS hardware and SDK updates, and provided training and mentorship.',
    startDate: 'Apr 2017',
    endDate: 'Sep 2023',
    location: 'Stockholm, Sweden',
  },
  {
    id: 3,
    company: 'Glomo',
    title: 'Test Manager & System Developer',
    description:
      'Transitioned testing from waterfall to agile, led quality improvement, developed Android test automation, and conducted usability and exploratory testing on mobile apps and websites.',
    startDate: 'Apr 2015',
    endDate: 'Apr 2017',
    location: 'Stockholm, Sweden',
  },
  {
    id: 4,
    company: 'NNG',
    title: 'Software Test Engineer',
    description:
      'Updated head units with truck navigation software, conducted regression and stress tests, verified customer bugs, and performed field testing.',
    startDate: 'Jan 2015',
    endDate: 'Apr 2015',
    location: 'Budapest, Hungary',
  },
  {
    id: 5,
    company: 'EPAM',
    title: 'Software Test Automation Engineer',
    description:
      'Developed and tested Java backend services, implemented deployment testing tools to reduce release time, and conducted training.',
    startDate: 'Sep 2010',
    endDate: 'Dec 2014',
    location: 'Szeged, Hungary',
  },
];

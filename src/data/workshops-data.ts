export interface Workshop {
  id: number;
  title?: string;
  date?: string;
  description: string;
  registrationLink: string;
  bannerImage: string;
}

export const workshopsData: Workshop[] = [
  {
    id: 1,
    title: 'TTT 24th Virtual Meeting',
    date: 'December 24',
    description:
      "Join my session on December 23rd, where I will take you on a journey exploring how to create maintainable Selenium tests using Kotlin's powerful features.",
    registrationLink: 'https://forms.gle/',
    bannerImage: '/workshops/ttt_24th_virtual_meeting.png',
  },
  {
    id: 2,
    title: 'TTT 24th Virtual Meeting',
    date: 'December 24',
    description:
      'Page Objects in Kotlin 101: From Challenges to SolutionsPage Objects in Kotlin 101: From Challenges to Solutions.',
    registrationLink: ' https://www.selenium.dev/sosc/',
    bannerImage: '/workshops/objects_in_kotlin_101.png',
  },
];

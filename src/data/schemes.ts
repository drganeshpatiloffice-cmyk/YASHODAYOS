import { Scheme } from '@/types';

export const schemes: Scheme[] = [
  {
    id: 'pm-scholarship',
    name: 'Prime Minister Fellowship Scheme',
    category: 'scholarship',
    provider: 'Government of India',
    eligibility: ['Postgraduates', 'Research interest', 'Indian citizens'],
    benefits: '₹1,00,000/year for 2 years',
    applicationProcess: 'Online application through official portal',
    deadline: '2024-06-30',
    websiteLink: 'https://www.prf.gov.in',
  },
  {
    id: 'apprentice-training',
    name: 'Apprentice Training Scheme',
    category: 'skill-development',
    provider: 'Ministry of Skill Development',
    eligibility: ['Class 10-12 passed', 'Age 15-28 years'],
    benefits: 'Paid apprenticeship training in various trades',
    applicationProcess: 'Apply through National Apprenticeship Portal',
    deadline: 'Ongoing',
    websiteLink: 'https://nap.gov.in',
  },
  {
    id: 'internship-scheme',
    name: 'Prime Minister Internship Scheme',
    category: 'internship',
    provider: 'Government of India',
    eligibility: ['College students', 'Not employed', 'Age 21-24'],
    benefits: 'Monthly stipend + training certificate',
    applicationProcess: 'Register on official portal',
    deadline: '2024-12-31',
    websiteLink: 'https://www.pminternship.gov.in',
  },
];

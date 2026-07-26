export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  amount: string;
  eligibility: string[];
  deadline: string;
  applicationLink: string;
  description: string;
}

export interface EntranceExam {
  id: string;
  name: string;
  fullName: string;
  stream: 'science' | 'commerce' | 'arts';
  level: 'school' | 'undergraduate' | 'postgraduate';
  eligibility: string;
  examDate: string;
  applicationDeadline: string;
  syllabusLink: string;
  resultDate: string;
  cutoffMarks: string;
  officialWebsite: string;
}

export interface CompetitiveExam {
  id: string;
  name: string;
  organization: string;
  category: 'civil-services' | 'police' | 'army' | 'railway' | 'banking' | 'ssc';
  ageLimit: string;
  eligibility: string;
  salary: string;
  vacancies: number;
  examPattern: string;
  syllabusUrl: string;
}

export interface Career {
  id: string;
  name: string;
  description: string;
  introduction: string;
  stream: 'science' | 'commerce' | 'arts';
  salary: {
    entry: string;
    mid: string;
    senior: string;
  };
  educationalRoadmap: string[];
  entranceExams: string[];
  skillsRequired: string[];
  futureScope: string;
  governmentJobs: string[];
  privateJobs: string[];
  demandScore: number; // 1-10
  growthRate: string;
}

export interface Scheme {
  id: string;
  name: string;
  category: 'scholarship' | 'financial-aid' | 'skill-development' | 'internship';
  provider: string; // Government, NGO, Private
  eligibility: string[];
  benefits: string;
  applicationProcess: string;
  deadline: string;
  websiteLink: string;
}

export interface FutureSkill {
  id: string;
  name: string;
  category: 'technical' | 'soft-skills' | 'industry-specific' | 'emerging';
  description: string;
  duration: string; // e.g., "3 months", "6 weeks"
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites: string[];
  resources: {
    videos: string[];
    courses: string[];
    books: string[];
  };
  careerApplications: string[];
  demandInMarket: number; // 1-10
}

export interface News {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  imageUrl?: string;
  link?: string;
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
  expiryDate: string;
}

// Career Types
export interface Career {
  id: string;
  name: string;
  description: string;
  introduction: string;
  educationalRoadmap: string[];
  entranceExams: string[];
  salary: {
    entry: string;
    mid: string;
    senior: string;
  };
  futureScope: string;
  governmentJobs: string[];
  privateJobs: string[];
  skillsRequired: string[];
  colleges: string[];
  videos: string[];
  category: string;
}

// Exam Types
export interface Exam {
  id: string;
  name: string;
  shortName: string;
  description: string;
  eligibility: string;
  examDate: string;
  applicationDeadline: string;
  syllabus: string[];
  preparationStrategy: string;
  books: string[];
  videos: string[];
  pdf?: string;
  category: 'entrance' | 'competitive' | 'scholarship';
  class?: number;
}

// Scholarship Types
export interface Scholarship {
  id: string;
  name: string;
  description: string;
  eligibility: string;
  benefits: string[];
  applicationProcess: string;
  applicationDeadline: string;
  amount: string;
  documents: string[];
  website?: string;
}

// Opportunity Types
export interface Opportunity {
  id: string;
  name: string;
  description: string;
  introduction: string;
  benefits: string[];
  eligibility: string;
  preparationStrategy: string;
  resources: {
    videos: string[];
    pdfs: string[];
    books: string[];
  };
  category: string;
  classLevel: number;
}

// Course Types
export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  eligibility: string;
  careers: string[];
  colleges: string[];
  salary: string;
  category: string;
}

// Stream Types
export interface Stream {
  id: string;
  name: string;
  description: string;
  subjects: string[];
  careers: string[];
  exams: string[];
  courses: string[];
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  classLevel: number;
  stream?: string;
  preferences: string[];
  bookmarkedCareers: string[];
  bookmarkedExams: string[];
}

// News & Announcement Types
export interface News {
  id: string;
  title: string;
  content: string;
  image?: string;
  date: Date;
  category: string;
  link?: string;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: Date;
  priority: 'high' | 'medium' | 'low';
}

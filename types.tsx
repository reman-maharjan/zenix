export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    linkedin?: boolean;
    twitter?: boolean;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  content: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
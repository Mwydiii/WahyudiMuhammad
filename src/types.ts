export interface Experience {
  id: string;
  role: string;
  company: string;
  url?: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category?: string;
  company?: string;
  companyUrl?: string;
  companyLogo?: string;
  companySecondaryLogo?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  score?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

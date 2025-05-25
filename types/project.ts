// types/project.ts
export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  short: string;
  features: string[];
  status: string;
  image: string;
  sections: any[];
}

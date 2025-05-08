export type ProjectSection = {
  heading: string;
  content?: string;
  list?: string[];
};

export type Project = {
  id: string;
  slug: string;
  image: string;
  title: string;
  description: string;
  status: string;
  sections: ProjectSection[];
};

export type ProjectCollection = {
  [key: string]: Project;
};

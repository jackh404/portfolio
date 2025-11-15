export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
  github?: string;
  demo?: string;
};
export type ExperiencedItem = {
  label: string;
  src: string;
  alt: string;
  addClass?: string;
};
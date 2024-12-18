export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details: string;
  mockups: {
    url: string;
    caption: string;
  }[];
  tools: string[];
}
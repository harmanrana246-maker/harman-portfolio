
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  mockupImage?: string; // Optional field for showing mockups alongside designs
  description: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

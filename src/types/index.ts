export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  content: string;
}

export interface Stat {
  value: string;
  unit: string;
  label: string;
  code: string;
}

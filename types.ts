
export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

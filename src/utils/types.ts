// Course type
export interface Course {
  title: string;
  duration: string;
  description: string;
  price: string;
  image: string;
}

// Instructor type
export interface Instructor {
  name: string;
  role: string;
  certification: string;
  experience: string;
  bio: string;
  image: string;
  socialMedia: {
    instagram: string | null;
    facebook: string | null;
    linkedin: string | null;
  };
}

// Gallery item type
export interface GalleryItem {
  image: string;
  title: string;
  description: string;
  category: string;
}

// Testimonial type
export interface Testimonial {
  name: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
  course: string;
  date: string;
}
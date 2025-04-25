// Types
import { Course, Instructor, GalleryItem, Testimonial } from './types';

// Course data
export const coursesData: Record<string, Course[]> = {
  beginner: [
    {
      title: 'Intro to Kitesurfing',
      duration: '3 Hours',
      description: 'Perfect for first-timers. Learn the basics of kite control, safety, and equipment handling on land before getting in the water.',
      price: '$99',
      image: 'https://images.pexels.com/photos/1192454/pexels-photo-1192454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Beginner Package',
      duration: '2 Days',
      description: 'Comprehensive introduction covering theory, safety, kite control, and your first water experience. Includes all equipment.',
      price: '$249',
      image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Kids Starter (8-14 years)',
      duration: '2 Hours',
      description: 'Specially designed for younger enthusiasts with appropriate sized equipment and extra safety measures.',
      price: '$79',
      image: 'https://images.pexels.com/photos/1170807/pexels-photo-1170807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ],
  intermediate: [
    {
      title: 'Water Start Mastery',
      duration: '1 Day',
      description: 'Focus on perfecting your water starts and building confidence with consistent rides and basic turns.',
      price: '$149',
      image: 'https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Riding & Transitions',
      duration: '1 Day',
      description: 'Learn to ride upwind confidently and perform smooth transitions between directions.',
      price: '$149',
      image: 'https://images.pexels.com/photos/1192053/pexels-photo-1192053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Intermediate Package',
      duration: '3 Days',
      description: 'Comprehensive program to take your riding to the next level with personalized coaching and video analysis.',
      price: '$349',
      image: 'https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ],
  advanced: [
    {
      title: 'Jump & Freestyle',
      duration: '1 Day',
      description: 'Master the techniques for controlled jumps and learn the basics of freestyle tricks with safety tips for soft landings.',
      price: '$179',
      image: 'https://images.pexels.com/photos/1718523/pexels-photo-1718523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Wave Riding',
      duration: '1 Day',
      description: 'Specialized coaching for riding waves, timing, positioning, and using the kite in surf conditions.',
      price: '$179',
      image: 'https://images.pexels.com/photos/1653414/pexels-photo-1653414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Pro Performance',
      duration: '2 Days',
      description: 'Advanced techniques for experienced riders looking to push their limits with complex tricks and maneuvers.',
      price: '$299',
      image: 'https://images.pexels.com/photos/1417946/pexels-photo-1417946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ],
  specialty: [
    {
      title: 'Private One-on-One',
      duration: 'Flexible',
      description: 'Personalized instruction tailored to your specific goals and learning pace with our top instructors.',
      price: '$129/hr',
      image: 'https://images.pexels.com/photos/757133/pexels-photo-757133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Women\'s Only Camp',
      duration: '2 Days',
      description: 'A supportive environment for women to learn and progress, taught by our female instructors.',
      price: '$249',
      image: 'https://images.pexels.com/photos/1142941/pexels-photo-1142941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Corporate Team Building',
      duration: 'Flexible',
      description: 'Unique team-building experience combining kitesurfing basics with collaborative challenges.',
      price: 'Contact Us',
      image: 'https://images.pexels.com/photos/3106807/pexels-photo-3106807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]
};

// Instructor data
export const instructorsData: Instructor[] = [
  {
    name: 'Alex Rodriguez',
    role: 'Head Instructor',
    certification: 'IKO Level 4',
    experience: '15+ Years',
    bio: 'Former professional kitesurfer with multiple competition wins. Specializes in freestyle techniques and jump training.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    socialMedia: {
      instagram: 'https://instagram.com/',
      facebook: 'https://facebook.com/',
      linkedin: 'https://linkedin.com/'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'Senior Instructor',
    certification: 'VDWS & IKO',
    experience: '10+ Years',
    bio: 'Passionate about teaching beginners and helping women gain confidence in the sport. Specializes in wave riding.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    socialMedia: {
      instagram: 'https://instagram.com/',
      facebook: 'https://facebook.com/',
      linkedin: null
    }
  },
  {
    name: 'Marco Rossi',
    role: 'Freestyle Specialist',
    certification: 'IKO Level 3',
    experience: '8+ Years',
    bio: 'Energetic instructor with a background in competitive freestyle. Known for helping students progress quickly with advanced tricks.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    socialMedia: {
      instagram: 'https://instagram.com/',
      facebook: null,
      linkedin: 'https://linkedin.com/'
    }
  },
  {
    name: 'Emily Chen',
    role: 'Youth Program Director',
    certification: 'IKO & First Aid',
    experience: '7+ Years',
    bio: 'Specializes in teaching children and teenagers. Patient approach with an emphasis on safety and fun learning experiences.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    socialMedia: {
      instagram: 'https://instagram.com/',
      facebook: 'https://facebook.com/',
      linkedin: null
    }
  }
];

// Gallery data
export const galleryData: GalleryItem[] = [
  {
    image: 'https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Perfect Jump',
    description: 'Advanced student practicing jumps',
    category: 'action'
  },
  {
    image: 'https://images.pexels.com/photos/1170807/pexels-photo-1170807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Beach Lessons',
    description: 'Instructor teaching kite control on the beach',
    category: 'lessons'
  },
  {
    image: 'https://images.pexels.com/photos/1192454/pexels-photo-1192454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Sunset Session',
    description: 'Beautiful evening ride at our main location',
    category: 'scenery'
  },
  {
    image: 'https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Group Lesson',
    description: 'Students practicing together during our group course',
    category: 'lessons'
  },
  {
    image: 'https://images.pexels.com/photos/1718523/pexels-photo-1718523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Big Air',
    description: 'Instructor demonstrating an advanced jump',
    category: 'action'
  },
  {
    image: 'https://images.pexels.com/photos/1192053/pexels-photo-1192053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Water Start',
    description: 'Beginner mastering their first water start',
    category: 'lessons'
  },
  {
    image: 'https://images.pexels.com/photos/1653414/pexels-photo-1653414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Wave Riding',
    description: 'Advanced technique session in wave conditions',
    category: 'action'
  },
  {
    image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Equipment Setup',
    description: 'Learning about proper gear setup and safety',
    category: 'lessons'
  }
];

// Testimonials data
export const testimonialsData: Testimonial[] = [
  {
    name: 'Michael T.',
    location: 'San Diego, CA',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'I tried learning kitesurfing twice before with other schools but never quite got it. The instructors at WaveRiders were patient, clear, and helped me finally get up and riding. By the end of my 2-day course, I was hooked!',
    rating: 5,
    course: 'Beginner Package',
    date: 'June 2023'
  },
  {
    name: 'Jennifer K.',
    location: 'Seattle, WA',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'As a woman in her 40s, I was nervous about trying such an extreme sport. Sarah was an amazing instructor who understood my concerns and tailored the lessons to build my confidence. I\'m now planning a kitesurfing vacation!',
    rating: 5,
    course: 'Women\'s Only Camp',
    date: 'July 2023'
  },
  {
    name: 'David L.',
    location: 'Boston, MA',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'I came to improve my jumping technique and Marco helped me progress more in two days than I had in the past year on my own. The video analysis was particularly helpful in correcting my technique.',
    rating: 5,
    course: 'Jump & Freestyle',
    date: 'August 2023'
  },
  {
    name: 'Amy S.',
    location: 'Denver, CO',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'Our family of four took lessons together and it was the highlight of our vacation! The kids (10 and 12) had so much fun and the instructors were amazing with them. We\'re already planning our next visit.',
    rating: 5,
    course: 'Family Package',
    date: 'May 2023'
  },
  {
    name: 'Robert J.',
    location: 'Chicago, IL',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'I organized a corporate retreat for our team of 12 and WaveRiders delivered an unforgettable experience. The combination of learning, teamwork, and fun was perfect. Even those who were initially hesitant ended up loving it.',
    rating: 4,
    course: 'Corporate Team Building',
    date: 'September 2023'
  }
];
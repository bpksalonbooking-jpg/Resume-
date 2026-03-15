import { ResumeData } from './types';

export const initialResumeData: ResumeData = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Software Engineer',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    address: 'New York, USA',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe',
    photoUrl: 'https://picsum.photos/seed/johndoe/200/200',
  },
  summary: 'Passionate and results-driven Software Engineer with 5+ years of experience in developing scalable web applications. Adept at collaborating with cross-functional teams to deliver high-quality software solutions.',
  experience: [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      role: 'Senior Frontend Developer',
      startDate: 'Jan 2020',
      endDate: 'Present',
      description: 'Led the development of a modern web application using React and TypeScript. Improved application performance by 30% and mentored junior developers.',
    },
    {
      id: '2',
      company: 'Web Innovators LLC',
      role: 'Web Developer',
      startDate: 'Jun 2017',
      endDate: 'Dec 2019',
      description: 'Developed and maintained multiple client websites. Collaborated with designers to implement responsive and accessible user interfaces.',
    },
  ],
  education: [
    {
      id: '1',
      degree: 'Bachelor of Science in Computer Science',
      university: 'State University',
      year: '2013 - 2017',
      score: '3.8 GPA',
    },
  ],
  skills: [
    { id: '1', name: 'JavaScript' },
    { id: '2', name: 'TypeScript' },
    { id: '3', name: 'React' },
    { id: '4', name: 'Node.js' },
    { id: '5', name: 'CSS/Tailwind' },
    { id: '6', name: 'Git' },
  ],
  projects: [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform with user authentication, product management, and payment integration.',
      techStack: 'React, Node.js, MongoDB, Stripe',
      link: 'github.com/johndoe/ecommerce',
    },
  ],
  certifications: [
    {
      id: '1',
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2021',
    },
  ],
  languages: [
    { id: '1', name: 'English', proficiency: 'Native' },
    { id: '2', name: 'Spanish', proficiency: 'Intermediate' },
  ],
  hobbies: [
    { id: '1', name: 'Photography' },
    { id: '2', name: 'Traveling' },
  ],
  themeColor: '#3b82f6', // Default blue
};

export const TEMPLATES = [
  { id: 'modern-blue', name: 'Modern Blue', color: '#3b82f6', category: 'Modern', popularity: 95, description: 'Clean and contemporary, ideal for tech and corporate roles.' },
  { id: 'creative-green', name: 'Creative Green', color: '#10b981', category: 'Creative', popularity: 82, description: 'Fresh and vibrant, perfect for designers and creatives.' },
  { id: 'pro-dark', name: 'Professional Dark', color: '#1f2937', category: 'Professional', popularity: 88, description: 'Sleek and authoritative, suited for executive positions.' },
  { id: 'elegant-purple', name: 'Elegant Purple', color: '#8b5cf6', category: 'Modern', popularity: 75, description: 'Sophisticated and unique, great for marketing and PR.' },
  { id: 'minimal-red', name: 'Minimal Red', color: '#ef4444', category: 'Minimal', popularity: 90, description: 'Bold yet simple, excellent for sales and management.' },
  { id: 'corp-orange', name: 'Corporate Orange', color: '#f97316', category: 'Professional', popularity: 70, description: 'Energetic and professional, tailored for business and finance.' },
  { id: 'classic-bw', name: 'Classic B&W', color: '#000000', category: 'Classic', popularity: 85, description: 'Timeless and traditional, best for law and academia.' },
  { id: 'vibrant-gradient', name: 'Vibrant Gradient', color: 'linear-gradient(to right, #ec4899, #8b5cf6)', category: 'Creative', popularity: 78, description: 'Eye-catching and modern, ideal for startups and agencies.' },
];

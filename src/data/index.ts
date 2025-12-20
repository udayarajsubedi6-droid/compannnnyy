import { Service, Project, TeamMember, Testimonial } from '../types';
import { CheckCircle, Users, Star, Briefcase } from 'lucide-react';

export const services: Service[] = [
  {
    id: 1,
    title: 'Residential Construction',
    description: 'Custom homes and residential projects built to your specifications with quality craftsmanship.',
    icon: 'Home'
  },
  {
    id: 2,
    title: 'Commercial Building',
    description: 'Professional commercial construction services for offices, retail spaces, and facilities.',
    icon: 'Building2'
  },
  {
    id: 3,
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces with expert renovation and remodeling services.',
    icon: 'Wrench'
  },
  {
    id: 4,
    title: 'Project Management',
    description: 'Comprehensive project management ensuring timely delivery and budget compliance.',
    icon: 'ClipboardCheck'
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Family Home',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Contemporary 3,500 sq ft family residence with sustainable features'
  },
  {
    id: 2,
    title: 'Downtown Office Complex',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'State-of-the-art 50,000 sq ft office building in the city center'
  },
  {
    id: 3,
    title: 'Luxury Villa Renovation',
    category: 'Renovation',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete interior and exterior renovation of historic property'
  },
  {
    id: 4,
    title: 'Retail Shopping Center',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '75,000 sq ft mixed-use retail and dining complex'
  },
  {
    id: 5,
    title: 'Suburban Housing Development',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '24-unit residential community with modern amenities'
  },
  {
    id: 6,
    title: 'Industrial Warehouse',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '100,000 sq ft distribution and storage facility'
  }
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'John Anderson',
    position: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    position: 'Project Manager',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'Lead Architect',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Robert Thompson',
    position: 'Homeowner',
    content: 'Exceptional quality and professionalism. Our dream home was completed on time and exceeded expectations.',
    rating: 5
  },
  {
    id: 2,
    name: 'Lisa Martinez',
    position: 'Business Owner',
    content: 'The team delivered our commercial project flawlessly. Highly recommend their services.',
    rating: 5
  },
  {
    id: 3,
    name: 'David Park',
    position: 'Property Developer',
    content: 'Professional, reliable, and skilled. A pleasure to work with on multiple projects.',
    rating: 5
  }
];

export const stats = [
  {
    label: 'Projects Completed',
    value: '200+',
    icon: 'Briefcase', // Lucide icon name
  },
  {
    label: 'Years of Experience',
    value: '8+',
    icon: 'CheckCircle',
  },
  {
    label: 'Team Members',
    value: '50+',
    icon: 'Users',
  },
  {
    label: 'Client Satisfaction',
    value: '99%',
    icon: 'Star',
  },
];
                            
 
export const heroImages = [
  'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920'
];

import type { Service, Project, Testimonial, Stat } from '../types';
import ashayaBusPark from '../../PHOTO-2026-06-17-20-28-26.jpg.jpeg';
import hydropower from '../../PHOTO-2026-06-17-20-28-27.jpg.jpeg';
import third from '../../PHOTO-2026-06-17-20-28-28.jpg.jpeg';
import forth from '../../PHOTO-2026-06-17-20-28-29.jpg.jpeg';
import first from '../../WhatsApp Image 2026-07-01 at 9.14.33 PM.jpeg';
import second from '../../WhatsApp Image 2026-07-01 at 9.15.01 PM.jpeg';

import a from '../../WhatsApp Image 2026-07-01 at 9.15.33 PM.jpeg';
import b from '../../WhatsApp Image 2026-07-01 at 9.17.18 PM (5).jpeg';
import c from '../../WhatsApp Image 2026-07-01 at 9.17.18 PM.jpeg';
import d from '../../WhatsApp Image 2026-07-01 at 9.17.18 PM (9).jpeg';
import e from '../../WhatsApp Image 2026-07-01 at 9.17.18 PM (4).jpeg';
import f from '../../WhatsApp Image 2026-07-01 at 9.17.18 PM (2).jpeg';






/* ============================================================
   EDIT YOUR CONTENT HERE
   Swap the image URLs for your own photos. To use a local
   photo, drop it in src/assets and import it, e.g.:
     import ashaya from '../assets/ashaya.jpg'
   then set image: ashaya
   ============================================================ */

export const heroImages = [
  first,
  second,
  a, b, c, d, e, f,
  third,
  forth,
];

export const stats: Stat[] = [
  { value: '200', unit: '+', label: 'Projects completed', code: 'REF-01' },
  { value: '8', unit: '+', label: 'Years of experience', code: 'REF-02' },
  { value: '50', unit: '+', label: 'Team members', code: 'REF-03' },
  { value: '99', unit: '%', label: 'Client satisfaction', code: 'REF-04' },
];

// icon = a lucide-react icon name
export const services: Service[] = [
  { icon: 'Home', title: 'Residential Construction', description: 'Custom homes and residential buildings constructed to your specifications with quality craftsmanship and lasting materials.' },
  { icon: 'Building2', title: 'Commercial Building', description: 'Professional commercial construction for offices, retail spaces and facilities — engineered for performance and durability.' },
  { icon: 'Wrench', title: 'Renovation & Remodeling', description: 'Transform and modernise existing spaces with expert renovation, restoration and remodeling services.' },
  { icon: 'ClipboardCheck', title: 'Project Management', description: 'End-to-end project management ensuring on-time delivery, budget control and full quality compliance.' },
];

export const serviceImages = [
  'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=900',
];

export const serviceChecklist = [
  'Experienced & certified professionals',
  'High-quality materials & workmanship',
  'Clear timelines & transparent communication',
  'Strict safety & quality standards',
];

export const whyChoose = [
  { icon: 'Users', title: 'Experienced team', description: 'Certified engineers and skilled professionals with deep, hands-on industry expertise.' },
  { icon: 'ShieldCheck', title: 'Quality assurance', description: 'Strict quality control at every stage — from foundation to final finish.' },
  { icon: 'Clock', title: 'On-time delivery', description: 'A proven record of meeting and beating project deadlines without compromise.' },
  { icon: 'Wallet', title: 'Transparent pricing', description: 'Clear, itemised estimates with no hidden costs or surprises down the line.' },
  { icon: 'HardHat', title: 'Safety first', description: 'Industry-leading safety standards enforced on every site, every day.' },
  { icon: 'CheckCircle2', title: 'Client focus', description: '99% client satisfaction, backed by dedicated support from start to handover.' },
];

export const processSteps = [
  { number: '01', title: 'Consultation', description: 'Understanding your vision, requirements, budget and site conditions.' },
  { number: '02', title: 'Planning & Design', description: 'Detailed drawings, approvals, material planning and clear timelines.' },
  { number: '03', title: 'Construction', description: 'Professional execution with strict quality control and regular updates.' },
  { number: '04', title: 'Handover', description: 'Final inspection, documentation and a clean project handover.' },
];

export const projects: Project[] = [
  { title: 'Ashaya Bus Park', category: 'Infrastructure', location: 'Makwanpur, Nepal', image: '', description: 'Public transport terminal — civil works, structure and finishing.' },
  { title: 'Remit Hydropower Civil Works', category: 'Infrastructure', location: 'Nepal', image: 'first', description: 'Civil construction package for a hydropower development.' },
  { title: 'Modern Family Home', category: 'Residential', location: 'Makwanpur, Nepal', image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Contemporary family residence with durable, modern finishes.' },
  { title: 'Commercial Complex', category: 'Commercial', location: 'Nepal', image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Multi-storey commercial building with retail and office space.' },
  { title: 'Villa Renovation', category: 'Renovation', location: 'Nepal', image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Full interior and exterior renovation of an existing property.' },
  { title: 'Retail & Dining Center', category: 'Commercial', location: 'Nepal', image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Mixed-use retail and dining complex, delivered end to end.' },
];

export const testimonials: Testimonial[] = [
  { name: 'Robert Thapa', role: 'Homeowner', rating: 5, content: 'Exceptional quality and professionalism. Our home was completed on time and exceeded every expectation.' },
  { name: 'Lisa Shrestha', role: 'Business Owner', rating: 5, content: 'The team delivered our commercial project flawlessly. Communication was clear the whole way through.' },
  { name: 'David Gurung', role: 'Property Developer', rating: 5, content: 'Professional, reliable and highly skilled. A genuine pleasure to work with across multiple projects.' },
];

export const company = {
  name: 'Red Earth Construction Pvt. Ltd',
  phone: '01-5312287',
  email: 'redearthnepal@gmail.com',
  address: 'Thaha Municipality-9, Makwanpur, Nepal',
  operationa: "Bafal, Kathmandu, Nepal",
  hours: 'Sunday–Friday · 9:00 AM – 5:00 PM',
  since: 2018,
};

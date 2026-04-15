import { PartyPopper, Heart, Sparkles, Calendar, Users } from 'lucide-react';
import React from 'react';

export const mockServices = [
  {
    title: 'Birthday Celebrations',
    description: 'From intimate gatherings to grand birthday parties, we create magical moments with personalized themes, stunning decorations, and flawless execution.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
    icon: <PartyPopper className="w-6 h-6 text-gray-700" />
  },
  {
    title: 'Engagement & Proposal Events',
    description: 'Make your special moment unforgettable with romantic setups, elegant decor, and intimate arrangements that capture the essence of your love story.',
    image: 'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg',
    icon: <Heart className="w-6 h-6 text-gray-700" />
  },
  {
    title: 'Anniversary Celebrations',
    description: 'Celebrate your milestones with elegant setups that honor your journey together, featuring sophisticated themes and memorable experiences.',
    image: 'https://images.unsplash.com/photo-1772305436749-52e549c8fca3',
    icon: <Sparkles className="w-6 h-6 text-gray-700" />
  },
  {
    title: 'Private Parties',
    description: 'Host exclusive private celebrations with customized themes, premium setups, and attention to every detail for an unforgettable experience.',
    image: 'https://images.unsplash.com/photo-1531686264889-56fdcabd163f',
    icon: <Users className="w-6 h-6 text-gray-700" />
  },
  {
    title: 'Custom Celebration Planning',
    description: 'Have a unique vision? We bring your dream celebration to life with personalized planning, creative designs, and seamless coordination.',
    image: 'https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg',
    icon: <Calendar className="w-6 h-6 text-gray-700" />
  }
];

export const mockStats = [
  { number: '500+', label: 'Events Planned' },
  { number: '100%', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' }
];

export const mockHowItWorks = [
  {
    number: '01',
    title: 'Share Your Event Idea',
    description: 'Tell us about your celebration vision, preferences, and special requirements.'
  },
  {
    number: '02',
    title: 'Choose Your Package',
    description: 'Select from our curated celebration packages or customize your own.'
  },
  {
    number: '03',
    title: 'We Design & Plan',
    description: 'Our team handles everything - from decor to coordination, ensuring perfection.'
  },
  {
    number: '04',
    title: 'Enjoy Your Celebration',
    description: 'Relax and create memories while we take care of every detail.'
  }
];

export const mockGalleryImages = [
  'https://images.unsplash.com/photo-1763129636673-df7c37cf251d',
  'https://images.unsplash.com/photo-1556125574-d7f27ec36a06',
  'https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg',
  'https://images.unsplash.com/photo-1729875748985-a9bcbcb2ef68',
  'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg',
  'https://images.unsplash.com/photo-1736751402467-3cbcda1c6517',
  'https://images.unsplash.com/photo-1674570980068-730448e6ca0b',
  'https://images.unsplash.com/photo-1469371670807-013ccf25f16a',
  'https://images.unsplash.com/photo-1738225734899-30852be7e396'
];

export const mockTestimonials = [
  {
    name: 'Sarah Johnson',
    event: 'Engagement Party',
    review: 'Sanora Events made our engagement party absolutely magical! Every detail was perfect, from the elegant decorations to the seamless coordination. Highly recommend!'
  },
  {
    name: 'Michael Chen',
    event: 'Birthday Celebration',
    review: 'The team went above and beyond for my wife\'s 40th birthday. The surprise was flawlessly executed, and our guests are still talking about it months later!'
  },
  {
    name: 'Emily Rodriguez',
    event: 'Anniversary Dinner',
    review: 'Professional, creative, and incredibly attentive. They transformed our vision into reality and made our 10th anniversary truly unforgettable.'
  },
  {
    name: 'David Thompson',
    event: 'Corporate Event',
    review: 'Outstanding service for our company\'s annual celebration. Everything was organized perfectly, and the elegant setup impressed all our guests.'
  },
  {
    name: 'Jessica Martinez',
    event: 'Wedding Proposal',
    review: 'They created the most romantic proposal setup! The attention to detail and beautiful arrangements made the moment even more special. She said yes!'
  },
  {
    name: 'Robert Anderson',
    event: 'Retirement Party',
    review: 'Sanora Events handled my retirement party with such care and professionalism. The celebration was elegant, fun, and exactly what I envisioned.'
  }
];

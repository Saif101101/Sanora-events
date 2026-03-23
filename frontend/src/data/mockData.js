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
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce',
    icon: <Sparkles className="w-6 h-6 text-gray-700" />
  },
  {
    title: 'Corporate Events',
    description: 'Professional event planning for corporate gatherings, team building activities, and business celebrations with impeccable attention to detail.',
    image: 'https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg',
    icon: <Calendar className="w-6 h-6 text-gray-700" />
  },
  {
    title: 'Private Parties',
    description: 'Exclusive private celebrations tailored to your unique style, from intimate dinners to grand festivities with personalized touches.',
    image: 'https://images.unsplash.com/photo-1531686264889-56fdcabd163f',
    icon: <Users className="w-6 h-6 text-gray-700" />
  }
];

export const mockGalleryImages = [
  'https://images.unsplash.com/photo-1763553113332-800519753e40',
  'https://images.unsplash.com/photo-1644709438449-3d9b34793988',
  'https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg',
  'https://images.unsplash.com/photo-1761574040621-d0b6737840fc',
  'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg',
  'https://images.unsplash.com/photo-1527529482837-4698179dc6ce',
  'https://images.unsplash.com/photo-1531686264889-56fdcabd163f',
  'https://images.unsplash.com/photo-1513151233558-d860c5398176',
  'https://images.unsplash.com/photo-1530103862676-de8c9debad1d'
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
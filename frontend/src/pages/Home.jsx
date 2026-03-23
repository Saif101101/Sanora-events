import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { PartyPopper, Heart, Sparkles, Calendar, Users, ChevronRight } from 'lucide-react';
import { mockServices, mockGalleryImages, mockTestimonials, mockStats, mockHowItWorks } from '../data/mockData';
import { toast } from '../hooks/use-toast';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you soon to plan your perfect celebration.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: ''
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-gray-700" />
            <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'sans-serif' }}>Sanora Events</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-gray-900 transition-colors">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-600 hover:text-gray-900 transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</button>
            <Button onClick={() => scrollToSection('book')} className="bg-[#5a4d4d] hover:bg-[#4a3d3d] text-white px-6 py-2 rounded-md transition-all">Book Now</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-6 relative overflow-hidden" 
        style={{ background: 'linear-gradient(to bottom, #f5f3f0 0%, #ffffff 100%)' }}
      >
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8 animate-fadeIn">
            <Sparkles className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">Premium Event Planning</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-slideUp" style={{ fontFamily: 'sans-serif' }}>
            Celebrate Every Moment <br />
            <span className="text-[#9b7b7b]">Beautifully</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Sanora Events helps you plan unforgettable birthdays, engagements, and private celebrations with elegant setups and seamless planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Button onClick={() => scrollToSection('book')} className="bg-[#5a4d4d] hover:bg-[#4a3d3d] text-white px-8 py-6 text-lg rounded-md transition-all shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-2 justify-center">
              Plan Your Event <ChevronRight className="w-5 h-5" />
            </Button>
            <Button onClick={() => scrollToSection('services')} variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg rounded-md transition-all hover:scale-105">
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* About with Stats Section */}
      <section id="about" className="py-20 px-6 bg-white" data-animate>
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'sans-serif' }}>
                Turning Special Moments Into Memorable Celebrations
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Sanora Events, we believe every celebration deserves to be extraordinary. With years of experience in event planning and a passion for creating beautiful moments, we specialize in transforming your vision into reality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From intimate gatherings to grand celebrations, our dedicated team handles every aspect of planning, decoration, coordination, and setup, ensuring your special day is stress-free and unforgettable.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1763553113332-800519753e40" 
                alt="Elegant Event Setup" 
                className="w-full h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            {mockStats.map((stat, index) => (
              <div key={index} className="text-center animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6" style={{ background: '#fafaf8' }} data-animate>
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${visibleSections['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'sans-serif' }}>Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive event planning services tailored to create your perfect celebration</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockServices.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 group animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'sans-serif' }}>{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-white" data-animate>
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${visibleSections['gallery'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'sans-serif' }}>Past Events Gallery</h2>
            <p className="text-lg text-gray-600">A glimpse into the beautiful celebrations we've created</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockGalleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 group animate-fadeIn" 
                style={{ 
                  height: index % 3 === 0 ? '400px' : '320px',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <img src={image} alt={`Event ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6" style={{ background: '#fafaf8' }} data-animate>
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${visibleSections['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'sans-serif' }}>How It Works</h2>
            <p className="text-lg text-gray-600">Simple steps to create your perfect celebration</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {mockHowItWorks.map((step, index) => (
              <div key={index} className="text-center animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-8xl font-bold text-gray-200 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'sans-serif' }}>{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white" data-animate>
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${visibleSections['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'sans-serif' }}>Client Testimonials</h2>
            <p className="text-lg text-gray-600">Hear from those who celebrated with us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.review}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.event}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section id="book" className="py-20 px-6" style={{ background: '#fafaf8' }} data-animate>
        <div className={`max-w-2xl mx-auto transition-all duration-1000 ${visibleSections['book'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'sans-serif' }}>Book Your Celebration</h2>
            <p className="text-lg text-gray-600">Let's start planning your unforgettable event</p>
          </div>
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name" 
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com" 
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <Input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000" 
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Type *</label>
                    <Input 
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      placeholder="e.g., Birthday, Engagement" 
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Date *</label>
                  <Input 
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your event vision..." 
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#5a4d4d] hover:bg-[#4a3d3d] text-white py-6 text-lg rounded-md transition-all shadow-md hover:shadow-lg hover:scale-105">
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5a4d4d] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6" />
            <span className="text-2xl font-bold">Sanora Events</span>
          </div>
          <p className="text-gray-300 mb-6">Creating unforgettable celebrations, one event at a time</p>
          <div className="flex justify-center gap-8 text-sm text-gray-300">
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">Testimonials</button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-600 text-sm text-gray-400">
            <p>© 2025 Sanora Events. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
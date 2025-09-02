import { useEffect } from 'react';
import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Education from '@/components/portfolio/Education';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = 'Ruvimbo Chibaya - BSc MIS Student | ICT Professional Portfolio';
    
    // Update meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Ruvimbo Chibaya - BSc Management Information Systems student at Great Zimbabwe University seeking work-related learning attachment. View my portfolio, skills, and projects.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

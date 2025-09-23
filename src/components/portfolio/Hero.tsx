import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleDownloadCV = () => {
    // Download the CV from the public folder
    const link = document.createElement('a');
    link.href = '/ruvimbo_chabaya_cv.pdf';
    link.download = 'Ruvimbo_Chibaya_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Show notification of successful download
    toast({
      title: 'Download Successful!',
      description: 'Ruvimbo Chibaya CV has been downloaded.',
      duration: 3000, // show for 3 seconds
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 fade-in">
          {/* Main Content */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground font-medium">
              Hello, I'm
            </p>
            <h1 className="gradient-text font-bold">
              Ruvimbo Chibaya
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary">
              BSc Commerce [Information Systems] Student
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Aspiring ICT Professional | Future Systems Analyst | Ready for Work-Related Learning Attachment
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16">
            <button
              onClick={scrollToAbout}
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <span className="text-sm mb-2">Learn more about me</span>
              <ArrowDown className="h-6 w-6 animate-bounce group-hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
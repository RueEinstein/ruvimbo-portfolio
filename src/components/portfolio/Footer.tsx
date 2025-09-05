import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Ruvimbo Chibaya
              </h3>
              <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                BSc Management Information Systems student seeking work-related learning attachment opportunities. 
                Ready to contribute and learn in a professional ICT environment.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-secondary-foreground">Quick Navigation</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { href: '#about', label: 'About Me' },
                  { href: '#skills', label: 'Skills' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#education', label: 'Education' },
                  { href: '#contact', label: 'Contact' }
                ].map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.href.substring(1));
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Summary */}
            <div>
              <h4 className="font-semibold mb-4 text-secondary-foreground">Get In Touch</h4>
              <div className="space-y-2 text-sm text-secondary-foreground/80">
                <p>ruvimbochibaya65@gmail.com</p>
                <p>+263 77 968 7784, +263 718 046 563</p>
                <p>Masvingo, Zimbabwe</p>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => alert('LinkedIn profile would open here')}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => alert('GitHub profile would open here')}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10"
                  >
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center text-sm text-secondary-foreground/80">
              <span>© {currentYear} Ruvimbo Chibaya. Built with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-secondary-foreground/80 hover:text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
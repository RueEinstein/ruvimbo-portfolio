import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ruvimbochibaya65@gmail.com",
      href: "mailto:ruvimbochibaya65@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: ["+263 77 968 7784", "+263 718 046 563"],
      href: ["tel:+263779687784", "tel:+263718046563"],
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Masvingo, Zimbabwe",
      href: "#",
      color: "accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ruvimbo-chibaya",
      href: "https://linkedin.com/in/ruvimbo-chibaya",
      color: "success"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({ title: "Validation Error", description: "All fields are required.", duration: 3000 });
      return false;
    }
    // Simple email format validation
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      toast({ title: "Validation Error", description: "Please enter a valid email address.", duration: 3000 });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      // http://localhost:8080/
      // https://ruvimbob-portfolio.vercel.app/send-email
      const res = await fetch('https://ruvimbob-portfolio.vercel.app/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Message Sent Successfully!", description: "Thank you for your message. I'll get back to you soon.", duration: 3000 });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({ title: "Error", description: data.error || "Failed to send message.", duration: 3000 });
      }
    } catch {
      toast({ title: "Error", description: "Failed to send message.", duration: 3000 });
    }
    setIsSubmitting(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/ruvimbo_chabaya_cv.pdf';
    link.download = 'Ruvimbo_Chibaya_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      title: 'Download Successful!',
      description: 'Ruvimbo Chibaya CV has been downloaded.',
      duration: 3000 // show for 3 seconds
    });
  };

  const getIconColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary';
      case 'secondary':
        return 'bg-secondary/10 text-secondary';
      case 'accent':
        return 'bg-accent/10 text-accent';
      case 'success':
        return 'bg-success/10 text-success';
      default:
        return 'bg-muted/10 text-muted-foreground';
    }
  };

  return (
    <section id="contact" className="section-padding bg-card-soft">
      <div className="container-custom">
        <div className="text-center mb-16 slide-up">
          <h2 className="gradient-text mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking work-related learning attachment opportunities. Let's connect and discuss how I can contribute to your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="slide-up">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these channels. I'm always ready to discuss potential opportunities 
                and answer any questions about my background and skills.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border bg-card shadow-md hover-lift">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getIconColorClasses(info.color)}`}>
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                        {Array.isArray(info.value) ? (
                          info.value.map((phone, i) => (
                            <a
                              key={phone}
                              href={Array.isArray(info.href) ? info.href[i] : info.href}
                              className="text-foreground hover:text-primary transition-colors"
                            >
                              {phone}{i === 0 ? ' | ' : ''}
                            </a>
                          ))
                        ) : (
                          <a
                            href={typeof info.href === 'string' ? info.href : info.href[0]}
                            className="text-foreground hover:text-primary transition-colors"
                            onClick={info.href === '#' ? (e) => e.preventDefault() : undefined}
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://github.com/RueEinstein', '_blank')}
                  className="hover-lift"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownloadCV}
                  className="hover-lift"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-up">
            <Card className="border-border bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Send Me a Message
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  I'll respond within 24 hours. Looking forward to hearing from potential employers and mentors.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="e.g., Work-Related Learning Attachment Opportunity"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please share details about the opportunity, requirements, and any questions you might have..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-border focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-light text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center slide-up">
          <div className="inline-flex flex-col items-center px-8 py-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Ready to Start My Professional Journey
            </h4>
            <p className="text-muted-foreground text-center max-w-md">
              I'm eager to apply my academic knowledge in a real-world environment and contribute to your organization's success 
              while gaining valuable industry experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
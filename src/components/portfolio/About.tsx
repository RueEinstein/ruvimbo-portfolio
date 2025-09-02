import { GraduationCap, MapPin, Target, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Currently pursuing BSc Management Information Systems with strong academic performance"
    },
    {
      icon: Target,
      title: "Career Focus",
      description: "Preparing for Level 3.1 Work-Related Learning Attachment to bridge theory with practice"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Experience in collaborative projects and strong interpersonal communication skills"
    },
    {
      icon: MapPin,
      title: "Great Zimbabwe University",
      description: "Studying at one of Zimbabwe's leading institutions for technology education"
    }
  ];

  return (
    <section id="about" className="section-padding bg-card-soft">
      <div className="container-custom">
        <div className="text-center mb-16 slide-up">
          <h2 className="gradient-text mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and systems analysis, I'm ready to apply my knowledge in a real-world environment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main About Content */}
          <div className="space-y-6 slide-up">
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-foreground leading-relaxed">
                Hello! I'm <strong>Ruvimbo Chibaya</strong>, a passionate Information Systems student at Great Zimbabwe University. 
                Currently in my academic journey pursuing a <strong>BSc in Management Information Systems</strong>, I'm preparing 
                to take the next exciting step into the professional world through my Level 3.1 Work-Related Learning Attachment.
              </p>
              
              <p className="text-foreground leading-relaxed">
                My academic foundation spans both the technical and business dimensions of information technology. Through rigorous 
                coursework and hands-on projects, I've developed expertise in systems analysis, database management, programming 
                methodologies, and strategic project management. What truly drives me is the opportunity to bridge the gap between 
                complex technical solutions and real-world business challenges.
              </p>

              <p className="text-foreground leading-relaxed">
                I'm actively seeking a work-related learning attachment where I can contribute fresh perspectives while learning 
                from industry professionals. My goal is to apply my theoretical knowledge in a dynamic professional environment, 
                gaining invaluable practical experience that will shape my career in ICT. I believe in the power of continuous 
                learning and am committed to growing both personally and professionally.
              </p>

              <p className="text-foreground leading-relaxed">
                I'm excited about the possibility of joining an innovative team where I can make meaningful contributions while 
                developing the skills needed for a successful career in information and communication technology.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 slide-up">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover-lift border-border bg-card shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
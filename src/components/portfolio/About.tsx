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
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                I am <strong>Ruvimbo Chibaya</strong>, a dedicated Information Systems student at Great Zimbabwe University, 
                currently preparing to embark on my Level 3.1 Work-Related Learning Attachment. My academic journey in 
                <strong> Management Information Systems</strong> has equipped me with a solid foundation in both technical 
                and business aspects of information technology.
              </p>
              
              <p className="text-foreground leading-relaxed">
                I am passionate about leveraging technology to solve business problems and streamline processes. 
                My studies have given me insights into systems analysis, database management, programming, and 
                project management. I am eager to apply these skills in a professional environment and contribute 
                meaningfully to an organization while gaining valuable industry experience.
              </p>

              <p className="text-foreground leading-relaxed">
                I am actively seeking a work-related learning attachment where I can contribute my theoretical knowledge, 
                learn from experienced professionals, and develop practical skills that will prepare me for a successful 
                career in ICT. I am committed to continuous learning and professional growth.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 slide-up">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover-lift border-border bg-card shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
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
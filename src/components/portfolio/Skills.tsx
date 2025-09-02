import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Wrench, Network, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Development",
      skills: [
        "Python", "Java", "JavaScript", "HTML/CSS", "SQL", 
        "PHP", "C++", "Visual Basic", "React", "Node.js"
      ],
      color: "primary"
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        "Microsoft Office Suite", "Visual Studio", "Eclipse", 
        "MySQL Workbench", "Git", "Figma", "Adobe Creative Suite",
        "Power BI", "Tableau", "SPSS"
      ],
      color: "secondary"
    },
    {
      icon: Network,
      title: "IT & Networking",
      skills: [
        "Network Administration", "System Analysis", "Database Design",
        "IT Support", "Windows Server", "Linux", "Cloud Computing",
        "Cybersecurity Basics", "Hardware Troubleshooting"
      ],
      color: "accent"
    },
    {
      icon: MessageSquare,
      title: "Soft Skills",
      skills: [
        "Problem Solving", "Team Collaboration", "Communication",
        "Project Management", "Time Management", "Leadership",
        "Critical Thinking", "Adaptability", "Presentation Skills"
      ],
      color: "success"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'secondary':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'accent':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'success':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
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
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 slide-up">
          <h2 className="gradient-text mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills developed through academic studies and practical projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift border-border bg-card shadow-md slide-up">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getIconColorClasses(category.color)}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`${getColorClasses(category.color)} hover:shadow-md transition-all duration-200`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center slide-up">
          <div className="inline-flex items-center px-6 py-3 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Continuously Learning:</strong> Always expanding my skillset through online courses, 
              tutorials, and hands-on projects to stay current with technology trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
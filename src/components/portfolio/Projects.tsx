import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Student Management System",
      description: "A comprehensive web-based system for managing student records, course enrollment, and academic progress tracking. Built with modern web technologies and featuring role-based access control.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
      category: "Web Development",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      features: ["Student Registration", "Course Management", "Grade Tracking", "Reports Generation"]
    },
    {
      title: "Inventory Management Desktop App",
      description: "A desktop application for small businesses to track inventory, manage stock levels, and generate sales reports. Features an intuitive user interface and robust database backend.",
      technologies: ["Java", "SQLite", "JavaFX", "Scene Builder"],
      category: "Desktop Application",
      status: "In Progress",
      githubUrl: "#",
      demoUrl: "#",
      features: ["Stock Management", "Sales Tracking", "Low Stock Alerts", "Reporting Dashboard"]
    },
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for visualizing business data and generating insights. Created as part of statistical analysis coursework with real dataset implementation.",
      technologies: ["Python", "Pandas", "Matplotlib", "Streamlit", "SQL"],
      category: "Data Analysis",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      features: ["Data Visualization", "Statistical Analysis", "Interactive Charts", "Export Functionality"]
    },
    {
      title: "Network Security Assessment Tool",
      description: "A command-line tool for basic network vulnerability assessment and port scanning. Developed to understand network security principles and ethical hacking concepts.",
      technologies: ["Python", "Nmap", "Socket Programming", "Threading"],
      category: "Cybersecurity",
      status: "Academic Project",
      githubUrl: "#",
      demoUrl: null,
      features: ["Port Scanning", "Service Detection", "Vulnerability Reporting", "Network Mapping"]
    },
    {
      title: "Mobile App UI/UX Design",
      description: "Complete design mockup for a mobile banking application including user journey mapping, wireframes, and high-fidelity prototypes following Material Design principles.",
      technologies: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping"],
      category: "Design",
      status: "Completed",
      githubUrl: null,
      demoUrl: "#",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      title: "Database Design Project",
      description: "Comprehensive database design for a hospital management system including normalization, relationship modeling, and stored procedures implementation.",
      technologies: ["MySQL", "ERD Modeling", "SQL", "Database Design"],
      category: "Database",
      status: "Completed",
      githubUrl: "#",
      demoUrl: null,
      features: ["ERD Design", "Normalization", "Stored Procedures", "Data Integrity"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-success/10 text-success border-success/20';
      case 'In Progress':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Academic Project':
        return 'bg-primary/10 text-primary border-primary/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="section-padding bg-card-soft">
      <div className="container-custom">
        <div className="text-center mb-16 slide-up">
          <h2 className="gradient-text mb-4">Projects & Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of academic and personal projects demonstrating practical application of technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift border-border bg-card shadow-md slide-up h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.category}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-muted/50 text-muted-foreground border-muted-foreground/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs"
                      onClick={() => alert('GitHub repository would open here')}
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs"
                      onClick={() => alert('Project demo would open here')}
                    >
                      {project.category === 'Design' ? (
                        <>
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </>
                      ) : (
                        <>
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note about projects */}
        <div className="mt-12 text-center slide-up">
          <div className="inline-flex items-center px-6 py-3 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> These projects represent academic coursework and personal learning initiatives. 
              Repository links and live demos are available upon request during interviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
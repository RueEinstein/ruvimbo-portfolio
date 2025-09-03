import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Target } from 'lucide-react';

const Education = () => {
  const educationDetails = {
    degree: "Bachelor of Science in Management Information Systems",
    university: "Great Zimbabwe University",
    location: "Masvingo, Zimbabwe",
    duration: "2022 - Present",
    currentLevel: "Level 3.1 (Preparing for Level 3.1 Work-Related Learning Attachment)",
    expectedGraduation: "2026",
    status: "In Progress"
  };

  const relevantCourses = [
    {
      category: "Core IT Courses",
      courses: [
        "Systems Analysis and Design",
        "Database Management Systems",
        "Information Systems Development",
        "Business Intelligence and Analytics",
        "IT Project Management",
        "Enterprise Resource Planning"
      ]
    },
    {
      category: "Programming & Development",
      courses: [
        "Object-Oriented Programming (Java)",
        "Web Development (HTML, CSS, JavaScript, PHP)",
        "Database Programming (SQL)",
        "Python Programming",
        "Software Engineering Principles",
        "Mobile Application Development"
      ]
    },
    {
      category: "Business & Management",
      courses: [
        "Business Process Management",
        "Strategic Information Systems",
        "E-commerce and Digital Business",
        "Information Systems Security",
        "Operations Research",
        "Management Principles"
      ]
    },
    {
      category: "Mathematics & Statistics",
      courses: [
        "Business Mathematics",
        "Statistics for Business",
        "Quantitative Methods",
        "Research Methods",
        "Data Analysis and Visualization",
        "Business Modeling"
      ]
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Academic Performance",
      description: "Consistent performance with strong grades in core ICT subjects"
    },
    {
      icon: BookOpen,
      title: "Research Skills",
      description: "Developed research and analytical skills through coursework and projects"
    },
    {
      icon: Target,
      title: "Practical Application",
      description: "Successfully completed practical assignments and group projects"
    }
  ];

  const upcomingMilestones = [
    "Level 3.1 Work-Related Learning Attachment (Seeking placement)",
    "Final Year Project (2024-2025)",
    "Graduation (Expected 2025)",
    "Professional IT Certification preparation"
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 slide-up">
          <h2 className="gradient-text mb-4">Education & Academic Background</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in Information Systems with focus on practical application and professional development
          </p>
        </div>

        {/* Main Education Card */}
        <div className="mb-12 slide-up">
          <Card className="border-border bg-card shadow-lg">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {educationDetails.degree}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="font-medium text-foreground">{educationDetails.university}</span>
                      <span className="mx-2">•</span>
                      <span>{educationDetails.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{educationDetails.duration}</span>
                      <span className="mx-2">•</span>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {educationDetails.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Current Status</h4>
                  <p className="text-sm text-muted-foreground">
                    {educationDetails.currentLevel}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Expected Graduation</h4>
                  <p className="text-sm text-muted-foreground">
                    {educationDetails.expectedGraduation}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Relevant Coursework */}
        <div className="mb-12 slide-up">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Relevant Coursework</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {relevantCourses.map((category, index) => (
              <Card key={index} className="border-border bg-card shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">{course}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements & Upcoming Milestones */}
        <div className="grid lg:grid-cols-2 gap-8 slide-up">
          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Academic Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-border bg-card shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <achievement.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Milestones */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Upcoming Milestones</h3>
            <Card className="border-border bg-card shadow-md">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {upcomingMilestones.map((milestone, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-secondary/10 text-secondary rounded-full text-xs font-semibold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-sm text-muted-foreground">{milestone}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
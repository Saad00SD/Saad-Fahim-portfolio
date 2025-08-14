import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, FileCheck, Star } from "lucide-react";

const Achievements = () => {
  const awards = [
    {
      title: "Best AI Project Award",
      organization: "University Tech Symposium 2024",
      description: "Recognized for developing an innovative deep learning solution for medical image analysis",
      date: "2024",
      type: "award"
    },
    {
      title: "Data Science Hackathon Winner",
      organization: "TechCorp Innovation Challenge",
      description: "First place in 48-hour hackathon for creating a real-time fraud detection system",
      date: "2024",
      type: "award"
    },
    {
      title: "Dean's List",
      organization: "Computer Science Department",
      description: "Academic excellence recognition for maintaining GPA above 3.8 for consecutive semesters",
      date: "2023-2024",
      type: "award"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-MLS-2024-001",
      skills: ["ML Engineering", "Model Deployment", "Data Engineering"]
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2024",
      credentialId: "TF-DEV-2024-001",
      skills: ["Deep Learning", "Neural Networks", "Computer Vision"]
    },
    {
      title: "Professional Data Scientist",
      issuer: "DataCamp",
      date: "2023",
      credentialId: "DC-PDS-2023-001",
      skills: ["Statistical Analysis", "Python", "Machine Learning"]
    },
    {
      title: "Microsoft Azure Data Scientist Associate",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "MS-AZ-2023-001",
      skills: ["Azure ML", "MLOps", "Data Science Lifecycle"]
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Awards & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition of excellence in AI/ML development and continuous learning through 
            industry-standard certifications and academic achievements.
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-primary" size={28} />
            <h3 className="text-3xl font-semibold">Awards & Recognition</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="text-primary mt-1" size={24} />
                    <Badge variant="secondary" className="text-xs">
                      {award.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {award.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FileCheck className="text-primary" size={28} />
            <h3 className="text-3xl font-semibold">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="text-primary" size={20} />
                      <Badge variant="secondary" className="text-xs">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </p>
                  <div>
                    <p className="text-sm font-medium mb-2">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold mb-4">Continuous Learning</h4>
              <p className="text-muted-foreground">
                I believe in staying updated with the latest trends in AI/ML. Currently pursuing 
                advanced certifications in MLOps and exploring cutting-edge research in 
                transformer architectures and federated learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
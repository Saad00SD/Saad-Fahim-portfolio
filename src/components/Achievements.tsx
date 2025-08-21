import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, FileCheck, Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Achievements = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const awards = [
    {
      title: "URAAN Project Exibition - Runner Up",
      organization: "PAF-IAST",
      description: "Developed the Hostel Management System for student registration, room allotments, mess management, and automated fee calculation",
      date: "2023",
      type: "award"
    },
    {
      title: "Dean's List",
      organization: "PAF-IAST",
      description: "Academic excellence recognition for the GPA  3.85 in Fall semester",
      date: "2021",
      type: "award"
    },
    
  ];

  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2025",
      credentialId: "TH2FNPLD3Q2T",
      skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks","CNN","TensorFlow","Keras","NLP","PyTorch","Data Augmentation","Deploying ML Models"]
    },
    {
      title: "Generative AI Explorer - Vertex AI",
      issuer: "Google",
      date: "2025",
      credentialId: "13679043",
      skills: ["Vertex AI", "Gemini AI 1.5 Pro", " Generative AI","Google Cloud Platform(GCP)"]
    },
    {
      title: "Python Programming",
      issuer: "University of Moratuwa",
      date: "2024",
      credentialId: "meytDnM1HT",
      skills: ["OOP", "Data Structures", "TCP","Computer Networks","Version Control","Pandas","Numpy","Scikit-Learn","Databases"]
    },
    {
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      date: "2024",
      credentialId: "Xw4Gu7MlGk",
      skills: ["JavaScript", "HTML", "CSS","HTML 5"]
    }
  ];

  return (
    <section 
      ref={elementRef}
      id="achievements" 
      className={`py-20 bg-gradient-to-b from-accent/5 to-secondary/10 relative overflow-hidden section-transition ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground stagger-1">Awards & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto stagger-2">
            Recognition of excellence in AI/ML development and continuous learning through 
            industry-standard certifications and academic achievements.
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 stagger-3">
            <Trophy className="text-primary animate-float" size={28} />
            <h3 className="text-3xl font-semibold text-foreground">Awards</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-auto">
            {awards.map((award, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/90 backdrop-blur-sm transform hover:scale-105 hover:rotate-1 shadow-lg shadow-black/20 stagger-${index + 4} mx-auto`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="text-primary mt-1 group-hover:scale-110 transition-transform duration-300" size={24} />
                    <Badge variant="secondary" className="text-xs group-hover:scale-105 transition-transform duration-300">
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
          <div className="flex items-center gap-3 mb-8 stagger-5">
            <FileCheck className="text-primary" size={28} />
            <h3 className="text-3xl font-semibold text-foreground">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow border-border/50 bg-card/70 backdrop-blur-sm shadow-md shadow-black/10 stagger-${index + 6}`}>
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

        {/* <div className="mt-16 text-center stagger-7">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 shadow-xl shadow-black/30">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold mb-4 text-foreground">Continuous Learning</h4>
              <p className="text-muted-foreground">
                I believe in staying updated with the latest trends in AI/ML. Currently pursuing 
                advanced certifications in MLOps and exploring cutting-edge research in 
                transformer architectures and federated learning.
              </p>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default Achievements;
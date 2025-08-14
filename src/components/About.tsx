import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, LineChart, Code, Cpu, BarChart3 } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Machine Learning", icon: Brain, items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"] },
    { category: "Data Science", icon: BarChart3, items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"] },
    { category: "Programming", icon: Code, items: ["Python", "R", "SQL", "JavaScript", "Java"] },
    { category: "Big Data", icon: Database, items: ["Apache Spark", "Hadoop", "MongoDB", "PostgreSQL", "Redis"] },
    { category: "Cloud & MLOps", icon: Cpu, items: ["AWS", "Docker", "Kubernetes", "MLflow", "Git"] },
    { category: "Analytics", icon: LineChart, items: ["Tableau", "Power BI", "Excel", "SPSS", "Statistical Analysis"] }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate Computer Science graduate with expertise in AI/ML and Data Science. 
            I specialize in developing end-to-end machine learning solutions, from data preprocessing 
            to model deployment, with a focus on creating impactful and scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => {
            const IconComponent = skillGroup.icon;
            return (
              <Card key={skillGroup.category} className="hover:shadow-lg transition-shadow border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <IconComponent size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-center">Experience & Education</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-primary">Education</h4>
                  <p className="text-muted-foreground">
                    <strong>Bachelor of Science in Computer Science</strong><br />
                    Specialization: AI/ML and Data Science<br />
                    Focus on machine learning algorithms, statistical analysis, and data engineering
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-primary">Interests</h4>
                  <p className="text-muted-foreground">
                    Deep Learning, Natural Language Processing, Computer Vision, 
                    Predictive Analytics, Data Visualization, and MLOps. 
                    Always exploring the latest trends in AI and emerging technologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
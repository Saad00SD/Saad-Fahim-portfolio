import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, ImageIcon, TrendingUp, MessageSquare } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Predictive Analytics Dashboard",
      description: "Built an end-to-end machine learning pipeline for sales forecasting with real-time dashboard visualization. Achieved 94% accuracy using ensemble methods.",
      icon: TrendingUp,
      technologies: ["Python", "TensorFlow", "React", "Flask", "PostgreSQL"],
      features: ["Time Series Forecasting", "Interactive Dashboards", "Real-time Predictions", "Data Pipeline"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Computer Vision Image Classifier",
      description: "Developed a deep learning model for multi-class image classification using transfer learning. Deployed with FastAPI for real-time inference.",
      icon: ImageIcon,
      technologies: ["PyTorch", "OpenCV", "FastAPI", "Docker", "AWS"],
      features: ["Transfer Learning", "99.2% Accuracy", "REST API", "Cloud Deployment"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "NLP Sentiment Analysis Engine",
      description: "Created a sophisticated sentiment analysis system using transformer models. Processes social media data in real-time with sentiment scoring.",
      icon: MessageSquare,
      technologies: ["Transformers", "BERT", "Streamlit", "MongoDB", "Redis"],
      features: ["Multi-language Support", "Real-time Processing", "Emotion Detection", "Batch Analysis"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "AI Recommendation System",
      description: "Built a hybrid recommendation engine combining collaborative and content-based filtering. Implemented for e-commerce with A/B testing framework.",
      icon: Brain,
      technologies: ["Scikit-learn", "Apache Spark", "Kafka", "Elasticsearch", "Jenkins"],
      features: ["Hybrid Filtering", "Real-time Updates", "A/B Testing", "Scalable Architecture"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my machine learning and data science projects, demonstrating 
            practical applications of AI in solving real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                        <Github size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                        <ExternalLink size={18} />
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-muted-foreground">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-muted-foreground">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
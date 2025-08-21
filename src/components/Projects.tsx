import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, ImageIcon, TrendingUp, MessageSquare } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Projects = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const projects = [
    {
      title: "iNova - Intelligent Traffic Control System with Anomaly Detection and Responses",
      description: "AI traffic control system using computer vision to detect anomalies and optimize signals, improving congestion and emergency response. Django dashboard for live monitoring and remote management.",
      icon: TrendingUp,
      technologies: ["Python", "TensorFlow", "Django", "OpenCV","Tailwind", "PostgreSQL"],
      features: ["Real-Time Anomaly Detection", "Traffic Signal Optimization", "Incident Alerts", "Data Pipeline"],
      githubUrl: "https://github.com/Saad00SD/iNovatcs-Intelligent_Traffic_Control_System_Final-Year-Project",
      liveUrl: "https://github.com/Saad00SD/iNovatcs-Intelligent_Traffic_Control_System_Final-Year-Project"
    },
    {
      title: "NLP-based Warehouse and Retail Sales Data Chatbot",
      description: "Developed an interactive chatbot using NLP to answer warehouse and retail sales queries from CSV data, integrating LangChain LLM (LLaMA 3 - 8B) and Groq API, with a Streamlit interface.",
      icon: ImageIcon,
      technologies: ["NLP", "LangChain", "Groq API", "Streamlit", "CSV","Python"],
      features: ["Transfer Learning", "99.2% Accuracy", "REST API", "Cloud Deployment"],
      githubUrl: "https://github.com/Saad00SD/Warehouse-ChatBot",
      liveUrl: "https://github.com/Saad00SD/Warehouse-ChatBot"
    },
    {
      title: "Tokyo Olympic 2020- Big Data Analytics",
      description: "Used Azure and Apache Spark with DataBricks and GitHub to process, transform, and analyze the Olympic 2020 dataset, ensuring data quality and insights.",
      icon: MessageSquare,
      technologies: ["Transformers", "BERT", "Streamlit", "MongoDB", "Redis"],
      features: ["Multi-language Support", "Real-time Processing", "Emotion Detection", "Batch Analysis"],
      githubUrl: "https://github.com/Saad00SD/Tokyo_Olympic_2020_Data_Analytics",
      liveUrl: "https://github.com/Saad00SD/Tokyo_Olympic_2020_Data_Analytics"
    },
    {
      title: "PAF-IAST Hostel Management System ",
      description: "Optimizes inventory by tracking items and quantities, providing real-time data, simplifying orders, and generating movement reports for better decision-making.",
      icon: Brain,
      technologies: ["Scikit-learn", "Apache Spark", "Kafka", "Elasticsearch", "Jenkins"],
      features: ["Hybrid Filtering", "Real-time Updates", "A/B Testing", "Scalable Architecture"],
      githubUrl: "https://github.com/Saad00SD/PAF-IAST_Hostel_Management_System",
      liveUrl: "https://github.com/Saad00SD/PAF-IAST_Hostel_Management_System"
    }
  ];

  return (
    <section 
      ref={elementRef}
      id="projects" 
      className={`py-20 relative overflow-hidden section-transition ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground stagger-1">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto stagger-2">
            A showcase of my machine learning and data science projects, demonstrating 
            practical applications of AI in solving real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/90 backdrop-blur-sm hover:scale-[1.03] hover:-rotate-1 shadow-lg shadow-black/20 stagger-${index + 3}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                        <IconComponent size={24} className="text-primary group-hover:text-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                      >
                        <Button variant="ghost" size="icon" className="hover:bg-primary/20 transform hover:scale-110 hover:rotate-12 transition-all duration-300">
                          <Github size={18} />
                        </Button>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Live Project"
                      >
                        <Button variant="ghost" size="icon" className="hover:bg-primary/20 transform hover:scale-110 hover:-rotate-12 transition-all duration-300">
                          <ExternalLink size={18} />
                        </Button>
                      </a>
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
        <a href="https://github.com/Saad00SD?tab=repositories" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
            View All Projects on GitHub
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
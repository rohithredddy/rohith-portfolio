import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Lexibot – Dictionary Chatbot",
      description: "Built an intelligent chatbot for word definitions using cosine similarity algorithms. Features include natural language processing, real-time word definitions, and an intuitive web interface.",
      technologies: ["Python", "Flask", "TF-IDF", "HTML/CSS", "JavaScript"],
      githubUrl: "https://github.com/rohithredddy/Dictionary-ChatBot/",
      features: [
        "Natural language processing for word queries",
        "Cosine similarity for accurate word matching",
        "Real-time definition retrieval",
        "Responsive web interface"
      ]
    },
    {
      title: "Automatic Image Captioning",
      description: "Advanced computer vision system that automatically generates captions for images using CNNs and Vision Transformers. Includes user authentication, object detection, and natural language processing capabilities.",
      technologies: ["CNNs", "Vision Transformers", "Flask", "MongoDB", "NLP"],
      githubUrl: "#",
      features: [
        "OTP-based user authentication system",
        "Object detection and recognition",
        "Neural network-based caption generation",
        "MongoDB database integration"
      ]
    },
    {
      title: "Plagiarism Detector using Machine Learning",
      description: "A Flask-based application that detects plagiarism in text documents using TF-IDF vectorization and logistic regression. Built for educational use to identify copied content.",
      technologies: ["Python", "Flask", "TF-IDF", "Logistic Regression", "NLP"],
      githubUrl: "https://github.com/rohithredddy/plagiarism-detection",
      features: [
        "Dataset with original and plagiarized text pairs",
        "Text preprocessing: tokenization, lowercasing, stopword removal",
        "TF-IDF vectorization for text similarity",
        "Flask UI to compare and detect plagiarism"
      ]
    },
    {
      title: "Wild Animal Detection and Alert System",
      description: "A deep learning-based real-time animal detection system using a fine-tuned Vision Transformer model. Captures webcam input and triggers alerts for dangerous animals.",
      technologies: ["PyTorch", "TensorFlow", "OpenCV", "ViT", "Transformers", "Pillow"],
      githubUrl: "https://github.com/rohithredddy/Wild-Animal-Detection-and-Alert-System",
      features: [
        "Live animal detection using webcam",
        "Fine-tuned Vision Transformer for classification",
        "Audible alerts on detecting dangerous animals",
        "89.41% validation accuracy after 10 epochs",
        "Data augmentation with flips, zoom, and rotations"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-heading mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-portfolio-heading group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="p-2 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-portfolio-subtext leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-medium text-portfolio-heading">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-portfolio-subtext">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

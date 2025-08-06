
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "Java", "R"],
      color: "bg-accent"
    },
    {
      title: "Libraries & Frameworks",
      skills: ["Pandas", "NumPy", "TensorFlow", "Flask"],
      color: "bg-portfolio-success"
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "bg-primary"
    },
    {
      title: "Tools & Technologies",
      skills: ["GitHub", "VS Code", "Power BI", "Hadoop", "AWS"],
      color: "bg-accent"
    },
    {
      title: "Coursework",
      skills: ["DSA", "OOPs", "DBMS", "ML", "Big Data"],
      color: "bg-portfolio-success"
    }
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "Artificial Intelligence Primer (Infosys)",
    "Agile Scrum in Practice",
    
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-heading mb-4">
            Skills & Certifications
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-portfolio-heading mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    className={`${category.color} text-white hover:scale-110 transition-transform duration-200`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 animate-fade-in">
          <h3 className="text-2xl font-semibold text-portfolio-heading mb-6 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 p-3 rounded-lg bg-portfolio-bg hover:bg-accent/10 transition-colors duration-300"
              >
                <div className="w-2 h-2 bg-portfolio-success rounded-full"></div>
                <span className="text-portfolio-heading">{cert}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in CSE (Data Science)",
      institution: "RGM College Of Engineering And Technology",
      period: "2022 – Present",
      grade: "CGPA: 8.4/10",
      status: "current"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "K.V. Subba Reddy Junior College",
      period: "2020 – 2022",
      grade: "90%",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-portfolio-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-heading mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${edu.status === 'current' ? 'bg-portfolio-success' : 'bg-accent'} text-white`}>
                  <GraduationCap className="h-6 w-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-portfolio-heading">
                      {edu.degree}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'current' 
                        ? 'bg-portfolio-success/10 text-portfolio-success' 
                        : 'bg-accent/10 text-accent'
                    }`}>
                      {edu.status === 'current' ? 'Current' : 'Completed'}
                    </span>
                  </div>
                  
                  <p className="text-lg text-portfolio-subtext mb-2">
                    {edu.institution}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-portfolio-subtext">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    
                    <div className="text-lg font-semibold text-portfolio-success">
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

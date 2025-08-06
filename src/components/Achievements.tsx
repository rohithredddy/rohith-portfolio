
import React from 'react';
import { Card } from '@/components/ui/card';
import { Trophy, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "1st Prize – 24-hr Hackathon",
      description: "College Event Management System",
      details: "Built a comprehensive event management system using MERN stack with MongoDB integration. Led a team of 4 developers to create a full-featured platform within 24 hours.",
      icon: Trophy,
      color: "bg-yellow-500",
      rank: "1st"
    },
    {
      title: "2nd Place – Technical Quiz",
      description: "Problem-solving and Analytics",
      details: "Demonstrated exceptional problem-solving skills and analytical thinking in a competitive technical quiz covering algorithms, data structures, and system design.",
      icon: Award,
      color: "bg-gray-400",
      rank: "2nd"
    }
  ];

  return (
    <section className="py-20 px-6 bg-portfolio-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-heading mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${achievement.color} text-white relative`}>
                  <achievement.icon className="h-6 w-6" />
                  <div className="absolute -top-1 -right-1 bg-white text-xs font-bold px-1.5 py-0.5 rounded-full text-gray-800">
                    {achievement.rank}
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-portfolio-heading group-hover:text-accent transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-lg text-accent font-medium">
                      {achievement.description}
                    </p>
                  </div>
                  
                  <p className="text-portfolio-subtext leading-relaxed">
                    {achievement.details}
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-portfolio-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-portfolio-success">
                      Achievement Unlocked
                    </span>
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

export default Achievements;

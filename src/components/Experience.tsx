import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-portfolio-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-heading mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-accent text-white">
                <Briefcase className="h-6 w-6" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-portfolio-heading">
                      Data Science Intern
                    </h3>
                    <p className="text-lg text-accent font-medium">
                      LPDG India
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-portfolio-subtext">
                    <Calendar className="h-4 w-4" />
                    <span>Aug 2025 – Present</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-medium text-portfolio-heading">
                    AI Solutions & Outreach Projects
                  </h4>

                  <ul className="space-y-2 text-portfolio-subtext">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Working on AI-driven applications and data analysis pipelines</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Contributing to real-world outreach projects </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Collaborating with cross-functional teams</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Python", "Streamlit", "LLMs", "Prompt Engineering", "GitHub"].map((tech, index) => (
                      <Badge key={index} className="bg-portfolio-success text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>





          {/* Infosys Experience */}
          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-accent text-white">
                <Briefcase className="h-6 w-6" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-portfolio-heading">
                      Project Intern
                    </h3>
                    <p className="text-lg text-accent font-medium">
                      Infosys Springboard
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-portfolio-subtext">
                    <Calendar className="h-4 w-4" />
                    <span>Oct 2024 – Dec 2024</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-medium text-portfolio-heading">
                    AI-Driven Sales Forecasting Model
                  </h4>

                  <ul className="space-y-2 text-portfolio-subtext">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Built comprehensive AI-driven sales forecasting model from scratch</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Performed extensive data collection and cleaning processes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Developed and implemented machine learning model architecture</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Optimized model performance and accuracy metrics</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Python", "Pandas", "NumPy", "Scikit-learn"].map((tech, index) => (
                      <Badge key={index} className="bg-portfolio-success text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* LPDG India Experience */}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-heading mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in text-center md:text-left">
          <p className="text-lg text-portfolio-subtext leading-relaxed">
            Highly motivated final year Computer Science Student specializing in Data Science with strong programming and machine learning skills, eager to contribute to innovative projects and learn from industry leaders.
          </p>

          <p className="text-lg text-portfolio-subtext leading-relaxed">
            I'm passionate about leveraging technology to solve real-world problems and am constantly exploring new ways to apply machine learning and data science in meaningful applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

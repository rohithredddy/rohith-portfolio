
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Mudiam Veera Rohith Reddy</h3>
            <p className="text-gray-300">
              Aspiring Data Scientist passionate about turning code into innovative solutions.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-300 hover:text-accent transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Connect With Me</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/rohithredddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/rohithredddy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              <a 
                href="mailto:rohithreddymudiam@gmail.com"
                className="p-3 rounded-full bg-white/10 hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <div className="text-sm text-gray-300">
              <p>rohithreddymudiam@gmail.com</p>
              <p>+91 9063315015</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          {/* <p className="flex items-center justify-center space-x-2 text-gray-300">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by Rohith</span>
          </p> */}
          <p className="text-sm text-gray-400 mt-2">
            © 2025 Mudiam Veera Rohith Reddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

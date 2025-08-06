import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_5dhxe03',      // Replace with your EmailJS service ID
        'template_pby7r4t',     // Replace with your EmailJS template ID
        formData,
        '52IAcvokEg3CYSXsd'          // Replace with your EmailJS public key (user ID)
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      toast({
        title: "Message Failed!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
      console.error('EmailJS Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rohithreddymudiam@gmail.com",
      link: "mailto:rohithreddymudiam@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9063315015",
      link: "tel:+919063315015"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Andhra Pradesh, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-heading mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
          <p className="text-portfolio-subtext mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold text-portfolio-heading mb-6">
                Let's Connect
              </h3>
              <p className="text-portfolio-subtext leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <a 
                    href={info.link} 
                    className="flex items-center space-x-4 group"
                    {...(info.link.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    <div className="p-3 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-portfolio-heading">{info.title}</p>
                      <p className="text-portfolio-subtext group-hover:text-accent transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-portfolio-heading font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 border-2 focus:border-accent transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-portfolio-heading font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 border-2 focus:border-accent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-portfolio-heading font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2 border-2 focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-white py-3 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, BarChart3 } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Jennifer Wilson",
      role: "Founder & CEO",
      bio: "Former education director with over 15 years of experience in e-learning and curriculum development.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "AI specialist with a background in developing personalized learning algorithms and recommendation systems.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Content",
      bio: "Former university professor with expertise in creating engaging and effective learning materials.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "David Rodriguez",
      role: "Head of Partnerships",
      bio: "Experienced in building relationships with educational institutions and content creators worldwide.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CourseHub</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to help learners find the perfect courses to achieve their goals and advance their careers.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                CourseHub was founded in 2020 with a simple yet powerful idea: to create a platform that helps learners navigate the overwhelming world of online education by providing personalized course recommendations.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Jennifer Wilson, experienced firsthand the challenge of finding the right courses among thousands of options across dozens of platforms. She envisioned a solution that would use advanced recommendation algorithms to match learners with the perfect educational content for their specific needs, goals, and learning style.
              </p>
              <p className="text-gray-600">
                Today, CourseHub has helped over 500,000 learners find their ideal learning paths across web development, data science, design, business, and many other fields. We're proud to be a trusted guide in the educational journey of so many people around the world.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400" 
                alt="People learning together" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission and Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We believe education is a fundamental right, and finding the right educational resources shouldn't be a challenge. Our platform is built on these core principles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Learner-Centric</h3>
              <p className="text-gray-600">
                We put learners first in everything we do, focusing on their unique needs, goals, and learning preferences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quality</h3>
              <p className="text-gray-600">
                We carefully evaluate courses based on content quality, instructor expertise, and learner outcomes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Accessibility</h3>
              <p className="text-gray-600">
                We believe everyone should have access to quality education regardless of their background or circumstances.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our recommendation algorithms to provide the most accurate and helpful suggestions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Meet the passionate individuals behind CourseHub who are dedicated to transforming how people discover educational content.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">500,000+</h3>
              <p className="text-xl">Learners Helped</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-xl">Courses Analyzed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">97%</h3>
              <p className="text-xl">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to find your perfect course?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of learners who have found their ideal educational path with CourseHub's personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/recommend" className="btn-primary px-6 py-3 font-medium">
              Get Recommendations
            </Link>
            <Link to="/register" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors">
              Create an Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

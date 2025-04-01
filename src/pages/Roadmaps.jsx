
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Users, ArrowUpRight } from 'lucide-react';

const Roadmaps = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [filteredRoadmaps, setFilteredRoadmaps] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API fetch
    setTimeout(() => {
      const mockRoadmaps = [
        {
          id: 1,
          title: "Full-Stack Web Development Path",
          description: "Comprehensive path to become a full-stack web developer, covering front-end, back-end, and everything in between.",
          difficulty: "Beginner to Advanced",
          duration: "6-8 months",
          students: 26500,
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350",
          category: "web-development"
        },
        {
          id: 2,
          title: "Data Science & Machine Learning",
          description: "Master data science fundamentals, statistics, ML algorithms, and practical applications in various domains.",
          difficulty: "Intermediate",
          duration: "8-10 months",
          students: 18900,
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&h=350",
          category: "data-science"
        },
        {
          id: 3,
          title: "Mobile App Development",
          description: "Learn to build native and cross-platform mobile applications for iOS and Android devices.",
          difficulty: "Intermediate",
          duration: "5-7 months",
          students: 14300,
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&h=350",
          category: "mobile-development"
        },
        {
          id: 4,
          title: "Frontend Development Specialist",
          description: "Specialize in modern frontend technologies, responsive design, UI frameworks, and web accessibility.",
          difficulty: "Beginner to Intermediate",
          duration: "4-6 months",
          students: 21200,
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350",
          category: "web-development"
        },
        {
          id: 5,
          title: "DevOps & Cloud Engineering",
          description: "Master cloud services, CI/CD pipelines, containerization, and modern infrastructure management.",
          difficulty: "Intermediate to Advanced",
          duration: "6-8 months",
          students: 12700,
          image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=500&h=350",
          category: "devops"
        },
        {
          id: 6,
          title: "Artificial Intelligence Specialist",
          description: "Dive deep into neural networks, computer vision, NLP, and advanced AI concepts and applications.",
          difficulty: "Advanced",
          duration: "10-12 months",
          students: 9800,
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&h=350",
          category: "data-science"
        }
      ];

      setRoadmaps(mockRoadmaps);
      setFilteredRoadmaps(mockRoadmaps);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredRoadmaps(roadmaps);
    } else {
      setFilteredRoadmaps(roadmaps.filter(roadmap => roadmap.category === selectedCategory));
    }
  }, [selectedCategory, roadmaps]);

  const categories = [
    { id: 'all', name: 'All Roadmaps' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'data-science', name: 'Data Science & ML' },
    { id: 'mobile-development', name: 'Mobile Development' },
    { id: 'devops', name: 'DevOps & Cloud' }
  ];

  // Roadmap Card component
  const RoadmapCard = ({ roadmap }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
        <div className="relative">
          <img 
            src={roadmap.image} 
            alt={roadmap.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-bold text-lg">{roadmap.title}</h3>
          </div>
        </div>
        <div className="p-5">
          <p className="text-gray-600 mb-4">{roadmap.description}</p>
          
          <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{roadmap.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen size={16} className="mr-1" />
              <span>{roadmap.difficulty}</span>
            </div>
            <div className="flex items-center">
              <Users size={16} className="mr-1" />
              <span>{roadmap.students.toLocaleString()} students</span>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Link 
              to={`/roadmaps/${roadmap.id}`} 
              className="text-primary font-medium hover:underline flex items-center"
            >
              View Roadmap <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">Learning Roadmaps</h1>
            <p className="text-xl mb-6">
              Follow structured learning paths created by experts to master new skills and advance your career.
            </p>
            <Link to="/recommend" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              Get a Personalized Roadmap <ArrowUpRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          {/* Categories */}
          <div className="mb-8 border-b">
            <div className="flex overflow-x-auto pb-2 hide-scrollbar">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 mr-2 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'border-b-2 border-primary text-primary font-medium'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Roadmaps Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden p-4 animate-pulse">
                  <div className="w-full h-48 bg-gray-300 rounded mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
                  <div className="h-10 bg-gray-300 rounded w-1/3 ml-auto"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredRoadmaps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredRoadmaps.map((roadmap) => (
                    <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">No roadmaps found</h3>
                  <p className="text-gray-600 mb-6">We couldn't find any roadmaps matching your selected category.</p>
                  <button 
                    onClick={() => setSelectedCategory('all')} 
                    className="btn-primary"
                  >
                    View All Roadmaps
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Benefits of Following a Roadmap</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Structured Learning</h3>
              <p className="text-gray-600">
                Follow a clear, step-by-step path designed by experts to build skills in a logical sequence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Goal-Oriented</h3>
              <p className="text-gray-600">
                Stay motivated with clear milestones and achievable goals aligned to career outcomes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Complete Skill Development</h3>
              <p className="text-gray-600">
                Avoid knowledge gaps with comprehensive paths that cover all necessary topics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-primary">
            <svg className="w-12 h-12 text-gray-300 mb-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"/>
            </svg>
            <p className="text-lg text-gray-600 mb-6">
              Following the Full-Stack Web Development roadmap was one of the best career decisions I've made. The structured approach helped me avoid wasting time on unnecessary topics and gave me the confidence that I was learning the right skills in the right order. I landed a developer job within 8 months of starting the roadmap!
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=60&h=60" 
                alt="Testimonial author" 
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-800">Jason Torres</h4>
                <p className="text-gray-500">Frontend Developer at TechCorp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your learning journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a personalized roadmap based on your goals, experience level, and learning preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/recommend" className="bg-white text-accent px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Get Personalized Recommendations
            </Link>
            <Link to="/register" className="bg-accent-foreground text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors border border-white">
              Create an Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmaps;

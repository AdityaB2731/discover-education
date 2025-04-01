
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Search } from 'lucide-react';

const Index = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left md:w-1/2 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Find the <span className="text-primary">perfect course</span> for your learning journey
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover curated courses and structured learning paths to help you achieve your goals and advance your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/recommend" className="btn-primary inline-flex items-center justify-center">
                  Get Recommendations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/roadmaps" className="btn-secondary inline-flex items-center justify-center">
                  Explore Roadmaps
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent blur-lg opacity-50 rounded-lg"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Search</h2>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      placeholder="Search for courses or roadmaps..."
                      className="form-input pl-10"
                    />
                    <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Link to="/search?q=web+development" className="feature-card text-center">
                      <div className="mx-auto bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="font-medium">Web Development</h3>
                    </Link>
                    <Link to="/search?q=data+science" className="feature-card text-center">
                      <div className="mx-auto bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="font-medium">Data Science</h3>
                    </Link>
                    <Link to="/search?q=mobile+development" className="feature-card text-center">
                      <div className="mx-auto bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-medium">Mobile Development</h3>
                    </Link>
                    <Link to="/search?q=devops" className="feature-card text-center">
                      <div className="mx-auto bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h3 className="font-medium">DevOps & Cloud</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide personalized learning experiences to help you achieve your goals faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card text-center p-8">
              <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Curated Courses</h3>
              <p className="text-gray-600">
                Hand-picked, high-quality courses from top instructors around the world.
              </p>
            </div>

            <div className="feature-card text-center p-8">
              <div className="mx-auto bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Structured Roadmaps</h3>
              <p className="text-gray-600">
                Follow clear learning paths designed by industry experts to master new skills.
              </p>
            </div>

            <div className="feature-card text-center p-8">
              <div className="mx-auto bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-gray-600">
                Join thousands of learners and get support on your learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-10 shadow-xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your learning journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get personalized course recommendations based on your interests and career goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="bg-white text-primary hover:bg-gray-100 transition-colors px-8 py-3 rounded-md font-medium shadow-md">
                Sign Up Now
              </Link>
              <Link to="/recommend" className="border-2 border-white hover:bg-white hover:text-primary transition-colors px-8 py-3 rounded-md font-medium">
                Get Recommendations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

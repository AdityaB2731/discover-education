
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Bookmark, BookOpen, Clock } from 'lucide-react';

const Home = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [trendingCourses, setTrendingCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be a fetch from backend API
    // Simulating API fetch with timeout
    setTimeout(() => {
      setFeaturedCourses([
        {
          id: 1,
          title: "Complete Web Development Bootcamp",
          instructor: "John Smith",
          level: "Beginner to Advanced",
          duration: "40 hours",
          rating: 4.8,
          students: 15420,
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350"
        },
        {
          id: 2,
          title: "Machine Learning A-Z",
          instructor: "Sarah Johnson",
          level: "Intermediate",
          duration: "36 hours",
          rating: 4.9,
          students: 12350,
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&h=350"
        },
        {
          id: 3,
          title: "iOS App Development with Swift",
          instructor: "Michael Chen",
          level: "Intermediate to Advanced",
          duration: "32 hours",
          rating: 4.7,
          students: 8920,
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&h=350"
        }
      ]);

      setTrendingCourses([
        {
          id: 4,
          title: "Data Science Fundamentals",
          instructor: "Emily Adams",
          level: "Beginner",
          duration: "28 hours",
          rating: 4.6,
          students: 9840,
          image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=500&h=350"
        },
        {
          id: 5,
          title: "React Native for Mobile Development",
          instructor: "Alex Thompson",
          level: "Intermediate",
          duration: "30 hours",
          rating: 4.8,
          students: 7650,
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&h=350"
        },
        {
          id: 6,
          title: "Advanced JavaScript Patterns",
          instructor: "David Wilson",
          level: "Advanced",
          duration: "24 hours",
          rating: 4.9,
          students: 6230,
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350"
        }
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Course Card component
  const CourseCard = ({ course }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <h3 className="text-lg font-bold mb-2 text-gray-800">{course.title}</h3>
          <p className="text-gray-600 mb-2">{course.instructor}</p>
          <div className="flex items-center mb-2">
            <Star size={16} className="text-yellow-500 fill-current" />
            <span className="text-sm ml-1 font-medium">{course.rating}</span>
            <span className="text-sm text-gray-500 ml-1">({course.students.toLocaleString()} students)</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Clock size={16} className="mr-1" />
            <span className="mr-3">{course.duration}</span>
            <BookOpen size={16} className="mr-1" />
            <span>{course.level}</span>
          </div>
          <div className="flex justify-between items-center">
            <Link to={`/courses/${course.id}`} className="text-primary font-medium hover:underline flex items-center">
              View Course <ArrowRight size={16} className="ml-1" />
            </Link>
            <button className="text-gray-500 hover:text-primary">
              <Bookmark size={18} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const categories = [
    { name: "Web Development", count: 120, icon: "🌐" },
    { name: "Data Science", count: 98, icon: "📊" },
    { name: "Mobile Development", count: 87, icon: "📱" },
    { name: "Machine Learning", count: 76, icon: "🤖" },
    { name: "Game Development", count: 65, icon: "🎮" },
    { name: "Cloud Computing", count: 59, icon: "☁️" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Your Perfect Learning Path
            </h1>
            <p className="text-xl mb-8">
              Personalized course recommendations to help you achieve your goals and advance your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/recommend" className="btn-accent px-6 py-3 font-medium text-center">
                Get Recommendations
              </Link>
              <Link to="/roadmaps" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-center">
                View Roadmaps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Featured Courses</h2>
            <Link to="/courses" className="text-primary hover:underline flex items-center font-medium">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden p-4 animate-pulse">
                  <div className="w-full h-48 bg-gray-300 rounded mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                  <div className="h-10 bg-gray-300 rounded w-full"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={`/courses/category/${category.name.toLowerCase().replace(' ', '-')}`}
                className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{category.icon}</span>
                  <div>
                    <h3 className="font-medium text-gray-800">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} courses</p>
                  </div>
                </div>
                <ArrowRight size={18} className="text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Trending Now</h2>
            <Link to="/courses/trending" className="text-primary hover:underline flex items-center font-medium">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden p-4 animate-pulse">
                  <div className="w-full h-48 bg-gray-300 rounded mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                  <div className="h-10 bg-gray-300 rounded w-full"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trendingCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your learning journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get personalized course recommendations based on your interests, goals, and skill level.
          </p>
          <Link to="/recommend" className="bg-white text-accent px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

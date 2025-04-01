
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, X, ArrowRight, Star, BookOpen, Clock } from 'lucide-react';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: 'all',
    level: 'all',
    duration: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    // In a real app, this would be an API fetch
    setTimeout(() => {
      // Mock search results based on query
      const searchResults = [
        {
          id: 1,
          type: 'course',
          title: "Complete Web Development Bootcamp",
          description: "Learn HTML, CSS, JavaScript, React, Node, MongoDB and more to become a full-stack developer.",
          instructor: "John Smith",
          level: "Beginner to Advanced",
          duration: "40 hours",
          rating: 4.8,
          students: 15420,
          category: "web-development",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350"
        },
        {
          id: 2,
          type: 'course',
          title: "Machine Learning A-Z",
          description: "Master machine learning algorithms like regression, classification, clustering, and deep learning.",
          instructor: "Sarah Johnson",
          level: "Intermediate",
          duration: "36 hours",
          rating: 4.9,
          students: 12350,
          category: "data-science",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&h=350"
        },
        {
          id: 3,
          type: 'roadmap',
          title: "Full-Stack Web Development Path",
          description: "A comprehensive learning path to become a full-stack web developer.",
          difficulty: "Beginner to Advanced",
          duration: "6-8 months",
          students: 26500,
          category: "web-development",
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350"
        },
        {
          id: 4,
          type: 'course',
          title: "Data Science Fundamentals",
          description: "Learn the essentials of data science, including Python, statistics, and data visualization.",
          instructor: "Emily Adams",
          level: "Beginner",
          duration: "28 hours",
          rating: 4.6,
          students: 9840,
          category: "data-science",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&h=350"
        },
        {
          id: 5,
          type: 'roadmap',
          title: "Data Science & Machine Learning",
          description: "Master data science fundamentals, statistics, ML algorithms, and practical applications.",
          difficulty: "Intermediate",
          duration: "8-10 months",
          students: 18900,
          category: "data-science",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&h=350"
        }
      ];
      
      // Filter results based on query
      const filtered = query
        ? searchResults.filter(
            item => 
              item.title.toLowerCase().includes(query.toLowerCase()) ||
              item.description.toLowerCase().includes(query.toLowerCase()) ||
              (item.type === 'course' && item.instructor.toLowerCase().includes(query.toLowerCase()))
          )
        : searchResults;
      
      setResults(filtered);
      setIsLoading(false);
    }, 1000);
  }, [query]);

  const applyFilters = () => {
    // Apply filters to the search results
    // This is a simplified example - in a real app, you would likely
    // make an API call with the filter parameters
    let filtered = [...results];
    
    if (filters.category !== 'all') {
      filtered = filtered.filter(item => item.category === filters.category);
    }
    
    if (filters.level !== 'all') {
      filtered = filtered.filter(item => 
        item.type === 'course' 
          ? item.level.toLowerCase().includes(filters.level.toLowerCase())
          : item.difficulty.toLowerCase().includes(filters.level.toLowerCase())
      );
    }
    
    if (filters.duration !== 'all') {
      if (filters.duration === 'short') {
        filtered = filtered.filter(item => 
          item.type === 'course' 
            ? parseInt(item.duration) < 30
            : item.duration.includes('4-6')
        );
      } else if (filters.duration === 'medium') {
        filtered = filtered.filter(item => 
          item.type === 'course' 
            ? parseInt(item.duration) >= 30 && parseInt(item.duration) <= 50
            : item.duration.includes('6-8')
        );
      } else if (filters.duration === 'long') {
        filtered = filtered.filter(item => 
          item.type === 'course' 
            ? parseInt(item.duration) > 50
            : item.duration.includes('8-10') || item.duration.includes('10-12')
        );
      }
    }
    
    return filtered;
  };

  const filteredResults = applyFilters();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      level: 'all',
      duration: 'all'
    });
  };

  // Course Card component
  const ResultCard = ({ item }) => {
    if (item.type === 'course') {
      return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.title} 
                className="h-48 w-full object-cover md:w-48"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <span className="text-xs font-medium uppercase bg-blue-100 text-blue-800 rounded-full px-2 py-1 mr-2">Course</span>
                <span className="text-xs text-gray-500 capitalize">{item.category.replace('-', ' ')}</span>
              </div>
              <Link to={`/courses/${item.id}`} className="block mt-2">
                <h3 className="text-xl font-bold text-gray-900 hover:text-primary transition-colors">{item.title}</h3>
              </Link>
              <p className="mt-2 text-gray-600 line-clamp-2">{item.description}</p>
              <p className="mt-2 text-gray-500">Instructor: {item.instructor}</p>
              
              <div className="mt-3 flex items-center">
                <div className="flex items-center mr-4">
                  <Star size={16} className="text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm">{item.rating}</span>
                </div>
                <div className="flex items-center mr-4">
                  <Users size={16} className="text-gray-400" />
                  <span className="ml-1 text-sm">{item.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center mr-4">
                  <Clock size={16} className="text-gray-400" />
                  <span className="ml-1 text-sm">{item.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen size={16} className="text-gray-400" />
                  <span className="ml-1 text-sm">{item.level}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <Link 
                  to={`/courses/${item.id}`} 
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  View Course <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (item.type === 'roadmap') {
      return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.title} 
                className="h-48 w-full object-cover md:w-48"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <span className="text-xs font-medium uppercase bg-green-100 text-green-800 rounded-full px-2 py-1 mr-2">Roadmap</span>
                <span className="text-xs text-gray-500 capitalize">{item.category.replace('-', ' ')}</span>
              </div>
              <Link to={`/roadmaps/${item.id}`} className="block mt-2">
                <h3 className="text-xl font-bold text-gray-900 hover:text-primary transition-colors">{item.title}</h3>
              </Link>
              <p className="mt-2 text-gray-600 line-clamp-2">{item.description}</p>
              
              <div className="mt-3 flex items-center">
                <div className="flex items-center mr-4">
                  <Users size={16} className="text-gray-400" />
                  <span className="ml-1 text-sm">{item.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center mr-4">
                  <Clock size={16} className="text-gray-400" />
                  <span className="ml-1 text-sm">{item.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen size={16} className="text-gray-400" />
                  <span className="ml-1 text-sm">{item.difficulty}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <Link 
                  to={`/roadmaps/${item.id}`} 
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  View Roadmap <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom py-12">
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Search Results for "{query}"
          </h1>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative flex-grow">
              <input
                type="text"
                value={query}
                onChange={(e) => setSearchParams({ q: e.target.value })}
                placeholder="Search courses, roadmaps, and more..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors md:w-auto"
            >
              <Filter size={20} className="mr-2" />
              Filters
            </button>
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">Filters</h2>
                <button 
                  onClick={clearFilters}
                  className="text-primary hover:underline text-sm flex items-center"
                >
                  <X size={16} className="mr-1" />
                  Clear all filters
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={filters.category}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="all">All Categories</option>
                    <option value="web-development">Web Development</option>
                    <option value="data-science">Data Science & ML</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="devops">DevOps & Cloud</option>
                  </select>
                </div>
                
                {/* Level Filter */}
                <div>
                  <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                    Level
                  </label>
                  <select
                    id="level"
                    name="level"
                    value={filters.level}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                
                {/* Duration Filter */}
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                    Duration
                  </label>
                  <select
                    id="duration"
                    name="duration"
                    value={filters.duration}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="all">Any Duration</option>
                    <option value="short">Short (< 30 hours / 4-6 months)</option>
                    <option value="medium">Medium (30-50 hours / 6-8 months)</option>
                    <option value="long">Long (> 50 hours / 8+ months)</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Results */}
        <div className="space-y-6">
          {isLoading ? (
            // Loading state
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden p-4 animate-pulse">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <div className="h-48 w-full bg-gray-300 md:w-48"></div>
                    </div>
                    <div className="p-6 w-full">
                      <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
                      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
                      <div className="h-10 bg-gray-300 rounded w-1/3"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredResults.length > 0 ? (
                <>
                  <p className="text-gray-600 mb-4">Found {filteredResults.length} results</p>
                  <div className="space-y-6">
                    {filteredResults.map((item) => (
                      <ResultCard key={item.id} item={item} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-md">
                  <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No results found</h3>
                  <p className="mt-2 text-gray-600">
                    We couldn't find any matches for "{query}" with your current filters.
                  </p>
                  <div className="mt-6">
                    <button 
                      onClick={clearFilters} 
                      className="btn-primary"
                    >
                      Clear all filters
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

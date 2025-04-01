
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">CourseHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
            <Link to="/courses" className="text-gray-700 hover:text-primary transition-colors">Courses</Link>
            <Link to="/roadmaps" className="text-gray-700 hover:text-primary transition-colors">Roadmaps</Link>
            <Link to="/recommend" className="text-gray-700 hover:text-primary transition-colors">Recommend</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">About Us</Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 flex-grow max-w-md mx-4">
            <input
              type="text"
              placeholder="Search courses..."
              className="bg-transparent focus:outline-none w-full text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="text-gray-500 hover:text-primary">
              <Search size={20} />
            </button>
          </form>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-primary transition-colors">Login</Link>
            <Link to="/register" className="btn-primary">Sign Up</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search - Only visible when menu is open */}
        {isMenuOpen && (
          <form onSubmit={handleSearch} className="mt-4 md:hidden flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search courses..."
              className="bg-transparent focus:outline-none w-full text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="text-gray-500 hover:text-primary">
              <Search size={20} />
            </button>
          </form>
        )}

        {/* Mobile Menu - Only visible when toggled */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors py-2">
                Home
              </Link>
              <Link to="/courses" className="text-gray-700 hover:text-primary transition-colors py-2">
                Courses
              </Link>
              <Link to="/roadmaps" className="text-gray-700 hover:text-primary transition-colors py-2">
                Roadmaps
              </Link>
              <Link to="/recommend" className="text-gray-700 hover:text-primary transition-colors py-2">
                Recommend
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors py-2">
                About Us
              </Link>
              <div className="flex space-x-4 pt-2">
                <Link to="/login" className="text-gray-700 hover:text-primary transition-colors">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

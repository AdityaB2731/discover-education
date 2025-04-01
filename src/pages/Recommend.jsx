
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const Recommend = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    learningGoal: '',
    experience: '',
    timeCommitment: '',
    learningStyle: '',
    interests: []
  });
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => {
      const interests = [...prev.interests];
      if (interests.includes(interest)) {
        return {
          ...prev,
          interests: interests.filter(i => i !== interest)
        };
      } else {
        return {
          ...prev,
          interests: [...interests, interest]
        };
      }
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // In a real app, this would be a fetch to the backend API
    // Simulating API call with timeout
    setTimeout(() => {
      // Mock recommendations based on form data
      let recommendedCourses = [];
      
      if (formData.learningGoal === 'career') {
        if (formData.interests.includes('webDevelopment')) {
          recommendedCourses.push({
            id: 1,
            title: "Complete Web Development Bootcamp",
            instructor: "John Smith",
            level: formData.experience === 'beginner' ? "Beginner to Advanced" : "Intermediate to Advanced",
            duration: "40 hours",
            rating: 4.8,
            students: 15420,
            match: 98,
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350"
          });
        }
        
        if (formData.interests.includes('dataScienceMl')) {
          recommendedCourses.push({
            id: 2,
            title: "Machine Learning A-Z",
            instructor: "Sarah Johnson",
            level: "Intermediate",
            duration: "36 hours",
            rating: 4.9,
            students: 12350,
            match: 95,
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&h=350"
          });
        }
        
        if (formData.interests.includes('mobileDevelopment')) {
          recommendedCourses.push({
            id: 3,
            title: "iOS App Development with Swift",
            instructor: "Michael Chen",
            level: formData.experience === 'beginner' ? "Beginner to Intermediate" : "Intermediate to Advanced",
            duration: "32 hours",
            rating: 4.7,
            students: 8920,
            match: 92,
            image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&h=350"
          });
        }
      } else {
        // Hobby-related courses
        if (formData.interests.includes('webDevelopment')) {
          recommendedCourses.push({
            id: 4,
            title: "Web Development for Beginners",
            instructor: "Emma Wilson",
            level: "Beginner",
            duration: "20 hours",
            rating: 4.5,
            students: 8320,
            match: 97,
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=350"
          });
        }
        
        if (formData.interests.includes('dataScienceMl')) {
          recommendedCourses.push({
            id: 5,
            title: "Data Science Fundamentals",
            instructor: "Alex Thompson",
            level: "Beginner",
            duration: "22 hours",
            rating: 4.6,
            students: 7430,
            match: 94,
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&h=350"
          });
        }
      }
      
      // Generate a learning roadmap based on the recommendations
      const roadmap = {
        title: formData.learningGoal === 'career' 
          ? `Professional ${formData.interests[0] === 'webDevelopment' ? 'Web Development' : formData.interests[0] === 'dataScienceMl' ? 'Data Science' : 'Mobile Development'} Path` 
          : `${formData.interests[0] === 'webDevelopment' ? 'Web Development' : formData.interests[0] === 'dataScienceMl' ? 'Data Science' : 'Mobile Development'} for Hobbyists`,
        stages: [
          {
            name: "Foundation",
            duration: "4-6 weeks",
            courses: recommendedCourses.slice(0, 1)
          },
          {
            name: "Building Skills",
            duration: "6-8 weeks",
            courses: recommendedCourses.length > 1 ? [recommendedCourses[1]] : []
          },
          {
            name: "Specialization",
            duration: "8-12 weeks",
            courses: []
          }
        ]
      };
      
      setRecommendations({
        courses: recommendedCourses,
        roadmap: roadmap
      });
      
      setIsLoading(false);
      setStep(5);
    }, 2000);
  };

  // Course Card component
  const CourseCard = ({ course }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
        <div className="absolute top-4 right-4 bg-accent text-white px-2 py-1 rounded-full text-sm font-medium">
          {course.match}% Match
        </div>
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <h3 className="text-lg font-bold mb-2 text-gray-800">{course.title}</h3>
          <p className="text-gray-600 mb-2">{course.instructor}</p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-sm font-medium">{course.rating}</span>
            <span className="text-sm text-gray-500 ml-1">({course.students.toLocaleString()} students)</span>
          </div>
          <div className="flex flex-wrap text-sm text-gray-500 mb-4">
            <span className="mr-3">{course.duration}</span>
            <span>{course.level}</span>
          </div>
          <div className="flex justify-between items-center">
            <Link to={`/courses/${course.id}`} className="text-primary font-medium hover:underline flex items-center">
              View Course <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Get Personalized Course Recommendations</h1>
          <p className="text-gray-600">
            Answer a few questions about your learning goals and preferences, and we'll recommend the best courses for you.
          </p>
        </div>

        {/* Progress Steps */}
        {step < 5 && (
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex justify-between items-center mb-2">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div 
                  key={stepNumber}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    stepNumber < step 
                      ? 'bg-primary text-white' 
                      : stepNumber === step 
                        ? 'bg-primary/20 text-primary border-2 border-primary' 
                        : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {stepNumber < step ? <Check size={16} /> : stepNumber}
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full"></div>
              <div 
                className="absolute top-0 left-0 h-1 bg-primary transition-all duration-300" 
                style={{ width: `${(step - 1) * 33.33}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Step 1 - Learning Goals */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">What is your primary learning goal?</h2>
                <div className="space-y-4">
                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="learningGoal"
                      value="career"
                      checked={formData.learningGoal === 'career'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.learningGoal === 'career' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ${formData.learningGoal === 'career' ? 'border-primary' : 'border-gray-300'}`}>
                          {formData.learningGoal === 'career' && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">Career Development</h3>
                          <p className="text-gray-600 text-sm">I want to learn skills for my career, get a job, or advance professionally</p>
                        </div>
                      </div>
                    </div>
                  </label>

                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="learningGoal"
                      value="hobby"
                      checked={formData.learningGoal === 'hobby'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.learningGoal === 'hobby' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ${formData.learningGoal === 'hobby' ? 'border-primary' : 'border-gray-300'}`}>
                          {formData.learningGoal === 'hobby' && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">Personal Interest</h3>
                          <p className="text-gray-600 text-sm">I'm learning for fun, personal projects, or as a hobby</p>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleNextStep}
                    disabled={!formData.learningGoal}
                    className={`btn-primary py-2 px-6 ${!formData.learningGoal && 'opacity-50 cursor-not-allowed'}`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 - Experience */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">What's your experience level?</h2>
                <div className="space-y-4">
                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="experience"
                      value="beginner"
                      checked={formData.experience === 'beginner'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.experience === 'beginner' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ${formData.experience === 'beginner' ? 'border-primary' : 'border-gray-300'}`}>
                          {formData.experience === 'beginner' && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">Beginner</h3>
                          <p className="text-gray-600 text-sm">I'm new to this field or have very basic knowledge</p>
                        </div>
                      </div>
                    </div>
                  </label>

                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="experience"
                      value="intermediate"
                      checked={formData.experience === 'intermediate'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.experience === 'intermediate' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ${formData.experience === 'intermediate' ? 'border-primary' : 'border-gray-300'}`}>
                          {formData.experience === 'intermediate' && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">Intermediate</h3>
                          <p className="text-gray-600 text-sm">I have some experience and understanding of the basics</p>
                        </div>
                      </div>
                    </div>
                  </label>

                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="experience"
                      value="advanced"
                      checked={formData.experience === 'advanced'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.experience === 'advanced' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ${formData.experience === 'advanced' ? 'border-primary' : 'border-gray-300'}`}>
                          {formData.experience === 'advanced' && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">Advanced</h3>
                          <p className="text-gray-600 text-sm">I have significant experience and am looking to deepen my expertise</p>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="mt-8 flex justify-between">
                  <button onClick={handlePrevStep} className="text-gray-600 hover:text-gray-900">
                    Back
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!formData.experience}
                    className={`btn-primary py-2 px-6 ${!formData.experience && 'opacity-50 cursor-not-allowed'}`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 - Time Commitment */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">How much time can you dedicate to learning?</h2>
                <div className="space-y-4">
                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="timeCommitment"
                      value="minimal"
                      checked={formData.timeCommitment === 'minimal'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.timeCommitment === 'minimal' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ${formData.timeCommitment === 'minimal' ? 'border-primary' : 'border-gray-300'}`}>
                          {formData.timeCommitment === 'minimal' && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">Minimal (1-3 hours/week)</h3>
                          <p className="text-gray-600 text-sm">I can only study occasionally in my free time</p>
                        </div>
                      </div>
                    </div>
                  </label>

                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="timeCommitment"
                      value="moderate"
                      checked={formData.timeCommitment === 'moderate'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.timeCommitment === 'moderate' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ${formData.timeCommitment === 'moderate' ? 'border-primary' : 'border-gray-300'}`}>
                          {formData.timeCommitment === 'moderate' && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">Moderate (4-8 hours/week)</h3>
                          <p className="text-gray-600 text-sm">I can dedicate regular time each week to learning</p>
                        </div>
                      </div>
                    </div>
                  </label>

                  <label className="block cursor-pointer">
                    <input
                      type="radio"
                      name="timeCommitment"
                      value="intensive"
                      checked={formData.timeCommitment === 'intensive'}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.timeCommitment === 'intensive' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center ${formData.timeCommitment === 'intensive' ? 'border-primary' : 'border-gray-300'}`}>
                          {formData.timeCommitment === 'intensive' && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">Intensive (10+ hours/week)</h3>
                          <p className="text-gray-600 text-sm">I'm committed to studying intensively and can dedicate significant time</p>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="mt-8 flex justify-between">
                  <button onClick={handlePrevStep} className="text-gray-600 hover:text-gray-900">
                    Back
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!formData.timeCommitment}
                    className={`btn-primary py-2 px-6 ${!formData.timeCommitment && 'opacity-50 cursor-not-allowed'}`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 4 - Interests */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">What topics are you interested in learning?</h2>
                <p className="text-gray-600 mb-4">Select all that apply</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block cursor-pointer">
                    <input
                      type="checkbox"
                      name="interests"
                      value="webDevelopment"
                      checked={formData.interests.includes('webDevelopment')}
                      onChange={() => handleInterestToggle('webDevelopment')}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.interests.includes('webDevelopment') ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 border rounded flex-shrink-0 flex items-center justify-center ${formData.interests.includes('webDevelopment') ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                          {formData.interests.includes('webDevelopment') && <Check size={12} className="text-white" />}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">Web Development</h3>
                        </div>
                      </div>
                    </div>
                  </label>

                  <label className="block cursor-pointer">
                    <input
                      type="checkbox"
                      name="interests"
                      value="dataScienceMl"
                      checked={formData.interests.includes('dataScienceMl')}
                      onChange={() => handleInterestToggle('dataScienceMl')}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.interests.includes('dataScienceMl') ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 border rounded flex-shrink-0 flex items-center justify-center ${formData.interests.includes('dataScienceMl') ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                          {formData.interests.includes('dataScienceMl') && <Check size={12} className="text-white" />}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">Data Science & ML</h3>
                        </div>
                      </div>
                    </div>
                  </label>

                  <label className="block cursor-pointer">
                    <input
                      type="checkbox"
                      name="interests"
                      value="mobileDevelopment"
                      checked={formData.interests.includes('mobileDevelopment')}
                      onChange={() => handleInterestToggle('mobileDevelopment')}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.interests.includes('mobileDevelopment') ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 border rounded flex-shrink-0 flex items-center justify-center ${formData.interests.includes('mobileDevelopment') ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                          {formData.interests.includes('mobileDevelopment') && <Check size={12} className="text-white" />}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">Mobile Development</h3>
                        </div>
                      </div>
                    </div>
                  </label>

                  <label className="block cursor-pointer">
                    <input
                      type="checkbox"
                      name="interests"
                      value="design"
                      checked={formData.interests.includes('design')}
                      onChange={() => handleInterestToggle('design')}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.interests.includes('design') ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 border rounded flex-shrink-0 flex items-center justify-center ${formData.interests.includes('design') ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                          {formData.interests.includes('design') && <Check size={12} className="text-white" />}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">Design & UI/UX</h3>
                        </div>
                      </div>
                    </div>
                  </label>

                  <label className="block cursor-pointer">
                    <input
                      type="checkbox"
                      name="interests"
                      value="devops"
                      checked={formData.interests.includes('devops')}
                      onChange={() => handleInterestToggle('devops')}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.interests.includes('devops') ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 border rounded flex-shrink-0 flex items-center justify-center ${formData.interests.includes('devops') ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                          {formData.interests.includes('devops') && <Check size={12} className="text-white" />}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">DevOps & Cloud</h3>
                        </div>
                      </div>
                    </div>
                  </label>

                  <label className="block cursor-pointer">
                    <input
                      type="checkbox"
                      name="interests"
                      value="cybersecurity"
                      checked={formData.interests.includes('cybersecurity')}
                      onChange={() => handleInterestToggle('cybersecurity')}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg ${formData.interests.includes('cybersecurity') ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 border rounded flex-shrink-0 flex items-center justify-center ${formData.interests.includes('cybersecurity') ? 'border-primary bg-primary' : 'border-gray-300'}`}>
                          {formData.interests.includes('cybersecurity') && <Check size={12} className="text-white" />}
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-800">Cybersecurity</h3>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="mt-8 flex justify-between">
                  <button onClick={handlePrevStep} className="text-gray-600 hover:text-gray-900">
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={formData.interests.length === 0}
                    className={`btn-primary py-2 px-6 ${formData.interests.length === 0 && 'opacity-50 cursor-not-allowed'}`}
                  >
                    Get Recommendations
                  </button>
                </div>
              </div>
            )}

            {/* Step 5 - Results */}
            {step === 5 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Personalized Recommendations</h2>
                
                {isLoading ? (
                  <div className="py-8 text-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Analyzing your preferences to find the perfect courses...</p>
                  </div>
                ) : (
                  <div>
                    {/* Course Recommendations */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommended Courses for You</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                      {recommendations?.courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                      ))}
                    </div>

                    {/* Learning Roadmap */}
                    <div className="mt-10">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Suggested Learning Roadmap</h3>
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-lg text-gray-800 mb-4">{recommendations?.roadmap.title}</h4>
                        
                        <div className="relative">
                          {recommendations?.roadmap.stages.map((stage, index) => (
                            <div key={index} className="mb-8 relative">
                              <div className="flex">
                                <div className="relative flex flex-col items-center mr-4">
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 
                                    ${index === 0 
                                      ? 'bg-primary text-white' 
                                      : index === 1 && recommendations?.roadmap.stages[0].courses.length > 0 
                                        ? 'bg-accent text-white' 
                                        : 'bg-gray-300 text-gray-500'}`}>
                                    {index + 1}
                                  </div>
                                  {index < recommendations?.roadmap.stages.length - 1 && (
                                    <div className="h-full w-px bg-gray-300 absolute top-8 left-4 z-0"></div>
                                  )}
                                </div>
                                <div>
                                  <h5 className="font-bold text-gray-800">{stage.name}</h5>
                                  <p className="text-gray-600 text-sm mb-2">Estimated duration: {stage.duration}</p>
                                  {stage.courses?.length > 0 ? (
                                    <div>
                                      <p className="text-gray-700 font-medium">Recommended course:</p>
                                      <ul className="mt-2 space-y-2">
                                        {stage.courses.map((course) => (
                                          <li key={course.id} className="bg-white p-3 rounded border border-gray-200">
                                            <p className="font-medium">{course.title}</p>
                                            <div className="flex text-sm text-gray-500 mt-1">
                                              <span>{course.level}</span>
                                              <span className="mx-2">•</span>
                                              <span>{course.duration}</span>
                                            </div>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ) : (
                                    <p className="text-gray-500 italic">Complete previous stages first</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 text-center">
                          <Link to="/roadmaps" className="btn-primary py-2 px-6">
                            Explore More Roadmaps
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-10 bg-gray-100 p-6 rounded-lg border border-gray-200 text-center">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Save your recommendations</h3>
                      <p className="text-gray-600 mb-4">Create an account to save these recommendations and get more personalized content.</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/register" className="btn-primary py-2 px-6">
                          Create an Account
                        </Link>
                        <Link to="/" className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-300 transition-colors">
                          Back to Home
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;

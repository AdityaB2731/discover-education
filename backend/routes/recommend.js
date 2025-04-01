
const express = require('express');
const Course = require('../models/Course');
const Roadmap = require('../models/Roadmap');
const router = express.Router();

// @route   POST api/recommend
// @desc    Get course recommendations
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { learningGoal, experience, timeCommitment, interests } = req.body;
    
    // Filter courses based on user preferences
    let query = {};
    
    // Filter by level
    if (experience === 'beginner') {
      query.level = { $in: ['Beginner', 'Beginner to Intermediate', 'Beginner to Advanced'] };
    } else if (experience === 'intermediate') {
      query.level = { $in: ['Intermediate', 'Beginner to Intermediate', 'Intermediate to Advanced'] };
    } else if (experience === 'advanced') {
      query.level = { $in: ['Advanced', 'Intermediate to Advanced', 'Beginner to Advanced'] };
    }
    
    // Filter by interests (categories)
    if (interests && interests.length > 0) {
      query.category = { $in: interests };
    }
    
    // Find matching courses
    const courses = await Course.find(query)
      .sort({ rating: -1, students: -1 })
      .limit(6);
    
    // Find matching roadmap if available
    let roadmap = null;
    if (interests && interests.length > 0) {
      roadmap = await Roadmap.findOne({ 
        category: interests[0],
        difficulty: { $regex: experience, $options: 'i' }
      });
    }
    
    // Return recommendations
    res.json({
      courses,
      roadmap
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

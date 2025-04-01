
const express = require('express');
const User = require('../models/User');
const Course = require('../models/Course');
const router = express.Router();

// @route   GET api/users/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', async (req, res) => {
  try {
    // This would normally check authorization token
    // For simplicity, we're using user ID from request
    const userId = req.header('x-user-id');
    if (!userId) {
      return res.status(401).json({ message: 'No user ID, authorization denied' });
    }
    
    const user = await User.findById(userId)
      .select('-password')
      .populate('savedCourses', 'title image instructor level');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/users/interests
// @desc    Update user interests
// @access  Private
router.put('/interests', async (req, res) => {
  try {
    const userId = req.header('x-user-id');
    if (!userId) {
      return res.status(401).json({ message: 'No user ID, authorization denied' });
    }
    
    const { interests } = req.body;
    
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: { interests } },
      { new: true }
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/users/save-course/:courseId
// @desc    Save a course
// @access  Private
router.put('/save-course/:courseId', async (req, res) => {
  try {
    const userId = req.header('x-user-id');
    if (!userId) {
      return res.status(401).json({ message: 'No user ID, authorization denied' });
    }
    
    const courseId = req.params.courseId;
    
    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    
    // Add course to user's saved courses
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { savedCourses: courseId } },
      { new: true }
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/users/remove-saved-course/:courseId
// @desc    Remove a saved course
// @access  Private
router.put('/remove-saved-course/:courseId', async (req, res) => {
  try {
    const userId = req.header('x-user-id');
    if (!userId) {
      return res.status(401).json({ message: 'No user ID, authorization denied' });
    }
    
    const courseId = req.params.courseId;
    
    // Remove course from user's saved courses
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { savedCourses: courseId } },
      { new: true }
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

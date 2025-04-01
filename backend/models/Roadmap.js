
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoadmapSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Beginner to Intermediate', 'Intermediate to Advanced', 'Beginner to Advanced']
  },
  duration: {
    type: String,
    required: true
  },
  students: {
    type: Number,
    default: 0
  },
  image: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  stages: [
    {
      name: {
        type: String,
        required: true
      },
      duration: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      courses: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Course'
        }
      ]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Roadmap', RoadmapSchema);

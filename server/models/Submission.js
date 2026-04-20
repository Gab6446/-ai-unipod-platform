const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String, enum: ['proposal', 'booking'], required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, default: 'pending' },
  submittedAt: { type: Date, default: Date.now },

  // Proposal-specific fields
  title: String,
  department: String,
  affiliation: String,
  category: String,
  abstract: String,
  resources: String,
  funding: String,
  teamMembers: String,
  notes: String,

  // Booking-specific fields
  facilityId: Number,
  facilityName: String,
  date: String,
  time: String,
  purpose: String,
  teamSize: String,
});

module.exports = mongoose.model('Submission', submissionSchema);

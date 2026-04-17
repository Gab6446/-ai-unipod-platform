const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Data
const facilities = [
  { id: 1, name: "Robotics Lab", status: "Available" },
  { id: 2, name: "Creators Room", status: "Occupied" },
  { id: 3, name: "Design Room", status: "Available" }
];

// Routes
app.get('/api/facilities', (req, res) => {
  res.json(facilities);
});

app.post('/api/proposals', (req, res) => {
  const proposal = req.body;
  console.log('New Proposal Received:', proposal);
  res.status(201).json({ 
    message: 'Proposal submitted successfully',
    id: `UNIPOD-${Date.now()}`
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'Platform operational', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`AI UNIPOD Backend running on port ${PORT}`);
});

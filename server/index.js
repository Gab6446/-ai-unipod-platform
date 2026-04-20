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

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Submission = require('./models/Submission');

const MONGO_URI = process.env.MONGO_URI;
let useMongo = false;

// 1. Database Connection Logic
if (MONGO_URI) {
  mongoose.connect(MONGO_URI)
    .then(() => {
      console.log('✅ Connected to MongoDB');
      useMongo = true;
    })
    .catch(err => console.error('MongoDB connection error:', err));
}

// 2. Local File Fallback Logic
const dataFile = path.join(__dirname, 'data.json');
let localSubmissions = [];

if (!MONGO_URI) {
  console.log('⚠️ No MONGO_URI provided. Falling back to local data.json storage.');
  try {
    if (fs.existsSync(dataFile)) {
      localSubmissions = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    } else {
      localSubmissions = []; // Start empty
      fs.writeFileSync(dataFile, JSON.stringify(localSubmissions, null, 2));
    }
  } catch (error) {
    console.error("Error reading local db:", error);
  }
}

const saveLocalDb = () => {
  if (!useMongo) fs.writeFileSync(dataFile, JSON.stringify(localSubmissions, null, 2));
};

// Routes
app.get('/api/facilities', (req, res) => {
  res.json(facilities);
});

app.get('/api/proposals', async (req, res) => {
  try {
    if (useMongo) {
      const data = await Submission.find().sort({ submittedAt: -1 });
      res.json(data);
    } else {
      res.json(localSubmissions);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/proposals', async (req, res) => {
  try {
    const payload = req.body;
    const generatedId = payload.type === 'booking' 
      ? `UNIPOD-B-${Date.now().toString().slice(-6)}` 
      : `UNIPOD-${Date.now().toString().slice(-6)}`;

    const newDoc = {
      id: generatedId,
      ...payload,
      status: 'pending',
      submittedAt: new Date().toISOString()
    };

    if (useMongo) {
      await Submission.create(newDoc);
    } else {
      localSubmissions.unshift(newDoc);
      saveLocalDb();
    }
    
    console.log('New Submission Received:', newDoc.id);
    res.status(201).json({ message: 'Submitted successfully', id: generatedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.patch('/api/proposals/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (useMongo) {
      const updated = await Submission.findOneAndUpdate({ id }, { status }, { new: true });
      if (updated) res.json(updated);
      else res.status(404).json({ error: 'Not found' });
    } else {
      const item = localSubmissions.find(s => s.id === id);
      if (item) {
        item.status = status;
        saveLocalDb();
        res.json(item);
      } else {
        res.status(404).json({ error: 'Not found' });
      }
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'Platform operational', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`AI UNIPOD Backend running on port ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const reminderRoutes = require('./routes/reminders');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URI, () => console.log('MongoDB connected'));

app.use('/api', authRoutes);
app.use('/api/reminders', reminderRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running');
});
app.get('/', (req, res) => {
  res.send('🚀 Server is working!');
});

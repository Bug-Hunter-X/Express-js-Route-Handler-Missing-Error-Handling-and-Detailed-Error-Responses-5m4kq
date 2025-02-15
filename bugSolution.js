const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is a number
  if (isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid user ID. ID must be a number.' });
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // Return a 404 with details
    return res.status(404).json({ error: `User with ID ${userId} not found.` });
  } else {
    res.json(user);
  }
});
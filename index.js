const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory user list
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the User CRUD API');
});

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;

  if (!newUser.name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newId = users.length ? users[users.length - 1].id + 1 : 1;
  const user = { id: newId, name: newUser.name };
  users.push(user);

  res.status(201).json({
    message: 'User created successfully',
    user
  });
});

// PUT update a user
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedData = req.body;

  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  user.name = updatedData.name || user.name;

  res.json({
    message: 'User updated successfully',
    user
  });
});

// DELETE a user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const deletedUser = users.splice(index, 1);

  res.json({
    message: 'User deleted successfully',
    user: deletedUser[0]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

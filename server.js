const express = { ...require('express') };
const expressApp = require('express');
const cors = require('cors');
const data = require('./data');

const app = expressApp();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(expressApp.json());

// Users & Members
app.get('/api/users/current', (req, res) => res.json(data.currentUser));
app.get('/api/members', (req, res) => res.json(data.mockMembers));

// Projects
app.get('/api/projects', (req, res) => res.json(data.mockProjects));
app.get('/api/projects/:id', (req, res) => {
  const project = data.mockProjects.find(p => p.id === req.params.id);
  if (project) res.json(project);
  else res.status(404).json({ message: 'Project not found' });
});

// Tasks
app.get('/api/tasks', (req, res) => res.json(data.mockTasks));
app.get('/api/tasks/:id', (req, res) => {
  const task = data.mockTasks.find(t => t.id === req.params.id);
  if (task) res.json(task);
  else res.status(404).json({ message: 'Task not found' });
});

// Events
app.get('/api/events', (req, res) => res.json(data.mockEvents));

// Notifications
app.get('/api/notifications', (req, res) => res.json(data.mockNotifications));

// Recommendations
app.get('/api/recommendations', (req, res) => res.json(data.mockRecommendations));

// Lists
app.get('/api/lists/competences', (req, res) => res.json(data.competencesList));
app.get('/api/lists/facultes', (req, res) => res.json(data.facultesList));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

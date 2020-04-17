const express = require('express');

const projects = require('./projectsModel');

const router = express.Router();

router.get('/', (req, res) => {
    projects.getProjects()
    .then((projects) => {
        res.status(200).json(projects);
    })
    .catch((err) => {
        res.status(500).json({message: 'Unable to fetch projects'});
    });
});

router.post('/', (req, res) => {
    const projectData = req.body;
  
   projects.addProject(projectData) 
    .then(project => {
      res.status(201).json({ data: project });
    })
    .catch(err => {
      res.status(500).json({ message: 'Unable to create new project' });
    });
  });

router.get('/:id/tasks', (req, res) => {
    const id = req.params.id;

    projects.getTasksByProjectId(id)
    .then((tasks) => {
        res.status(200).json(tasks);
    })
    .catch((err) => {
        res.status(500).json({message: 'Unable to fetch tasks'});
    });
});

router.post('/tasks', (req, res) => {
    const taskData = req.body;
  
   projects.addTask(taskData) 
    .then(task => {
      res.status(201).json({ data: task });
    })
    .catch(err => {
      res.status(500).json({ message: 'Unable to create new task' });
    });
  });

router.post('/resources', (req, res) => {
    const resourceData = req.body;
  
   projects.addResource(resourceData) 
    .then(resource => {
      res.status(201).json({ data: resource });
    })
    .catch(err => {
      res.status(500).json({ message: 'Unable to create new resource' });
    });
  });

router.get('/:id/resources', (req, res) => {
    const id = req.params.id;

    projects.getResources(id)
    .then((resource) => {
        res.status(200).json(resource);
    })
    .catch((err) => {
        res.status(500).json({message: 'Unable to fetch resource'});
    });
});

module.exports = router;
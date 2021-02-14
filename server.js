const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./projects/projectsRouter');

const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json()); 
server.use('/api/projects', projectRouter);

server.get('/',(req, res)=> {
    res.status(200).json({message: 'API is a go!'});
});

module.exports = server;
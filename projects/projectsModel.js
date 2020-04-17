const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    addProject,
    getTasksByProjectId,
    addTask,
    getResources,
    addResource
};

function getProjects(){
    return db('project');
}

function addProject(proj){
    return db('project').insert(proj);
}

function getTasksByProjectId(project_id){
    return db('task')
    .join('project', 'project.id','task.project_id')
    .where('task.project_id', project_id)
    .select( 'project.name as proj_name ', 'project.description as proj_description','task.*');
}

function addTask(task){
    return db('task').insert(task);
}

function getResources(){
    return db('resource');
}

function addResource(resource){
    return db('resource').insert(resource);
}
/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */
// global.sampleModel = [];

// * Step 2
//  *
//  * TODO: create model schema 
//  * NOTE: skip this if you are not using mongoose
//  *
 const ProjectSchema = new mongoose.Schema({
     //name of business and description of business
 name: String,
 description: String,
 location: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const ProjectCollection = mongoose.model('Project', ProjectSchema)
/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllProjects() {
    return ProjectCollection.find()
  }

function addNewProject(newProject) {
    return ProjectCollection.create(newProject)
  }

function getProject(ProjectId) {
      return ProjectCollection.findById(ProjectId)
  }

function updateProject(ProjectId, updateProject) {
    return ProjectCollection.findByIdAndUpdate(ProjectId, updateProject)   
}

function deleteProject(ProjectId) {
    return ProjectCollection.findByIdAndDelete(ProjectId)
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllProjects,
  addNewProject,
  getProject,
  updateProject,
  deleteProject
}

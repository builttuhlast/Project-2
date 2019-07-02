/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const projectApi = require('../models/project.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const projectRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
  * TODO: delete this handler; it's just a sample
 */
//request handler to get new project
projectRouter.get('/new', (req, res) => {
    // res.render('projects/newProjectForm.hbs')
})

//request handler to render all projects
projectRouter.get('/', (req,res) =>{
    projectApi.getAllProjects()
    .then((projects) => {
        res.send(projects)
      //res.render('./', {})
    })
    .catch(res.send)
    })



module.exports = {
  projectRouter
}

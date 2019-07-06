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
const projectRouter = express.Router({mergeParams: true})

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
    res.render('projects/newProjectForm.hbs')
})

//request handler to post project
projectRouter.post('/', (req, res) => {
    req.body.organizationId = req.params.organizationId
    projectApi.addNewProject(req.body)
  .then(() => {
    res.redirect(`/organizations/${req.params.organizationId}`) 
  })
  .catch((err) => {
    res.send(err)
  })
})

//request handler to render all projects
projectRouter.get('/', (req,res) =>{
  console.log(req.params.organizationId)
    projectApi.getAllProjects()
    .then((projects) => {
      console.log(projects)
        // res.send(projects)
      res.render('projects/projects.hbs', {projects, organizationId: req.params.organizationId})
    })
    .catch(res.send)
    })

//request handler to render single project
projectRouter.get('/:projectId', (req,res) =>{
    projectApi.getProject(req.params.projectId)
    .then((project) => {
     res.render('projects/project.hbs', {project})
    })
    .catch(res.send)
    })

//request handler to delete project, redirects to /projects once project has been deleted
projectRouter.delete('/:projectId', (req, res) => {
    projectApi.deleteProject(req.params.projectId)
    .then(()=> {
        res.redirect('/projects')
    })
    .catch(res.send)
    })


 //request handler to edit project form
 projectRouter.get('/:projectId/edit', (req, res) => {
    projectApi.getProject(req.params.projectId)
    .then((project) => {
    //res.render('projects/editprojectForm.hbs', {project})
        })
          .catch(res.send)
        })


    


module.exports = {
  projectRouter
}

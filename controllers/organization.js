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
const organizationApi = require('../models/organization.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const organizationRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
//request handler to get new organization
organizationRouter.get('/new', (req, res) => {
    res.render('organizations/newOrgForm.hbs')
  
})

//request handler to post organization
organizationRouter.post('/', (req, res) => {
    organizationApi.addNewOrganization(req.body)
  .then(() => {
    res.redirect('/organizations')
  })
  .catch((err) => {
    res.send(err)
  })
})


//request handler to render all organizations
organizationRouter.get('/', (req,res) =>{
    organizationApi.getAllOrganizations()
    .then((organizations) => {
        res.send(organizations)
      //res.render('./', {})
    })
    .catch(res.send)
    })

    //request handler to render single organization
organizationRouter.get('/organizationId', (req,res) =>{
    organizationApi.getOrganization(req.params.organizationId)
    .then((organization) => {
    //  res.render('organizations/org.hbs', {organization})
    })
    .catch(res.send)
    })
    
    //request handler to delete organization, redirects to /organizations once organization has been deleted
organizationRouter.delete('/organizationId', (req, res) => {
    organizationApi.deleteOrganization(req.params.organizationId)
    .then(()=> {
      res.redirect('/organizations')
    })
    .catch(res.send)
    })

    //request handler to edit organization form
organizationRouter.get('/:organizationId/edit', (req, res) => {

    organizationApi.getOrganization(req.params.organizationId)
      .then((organization) => {
        //res.render('organizations/editOrgForm.hbs', {organization})
      })
      .catch(res.send)
    })

    
//request handler to update organization form
organizationRouter.put('/:organizationId', (req,res) => {
    organizationApi.updateOrganization(req.params.organizationId, req.body)
    //return promise
    .then(() => {
      res.redirect('/organizations')
    })
  })

    /* Step 6
*
* Export the router from the file.
*
*/
module.exports = {
    organizationRouter
    }
    
    


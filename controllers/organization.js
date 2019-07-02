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
    res.render('/')
  
})

//request handler to post organization
organizationRouter.post('/', (req, res) => {
    organizationApi.addNewOrganization(req.body)
  .then(() => {
    res.redirect('/')
  })
  .catch((err) => {
    res.send(err)
  })
})


//request handler to render all organizations
organizationRouter.get('/', (req,res) =>{
    organizationApi.getAllOrganizations()
    .then((orgs) => {
        res.send(orgs)
      //res.render('./', {})
    })
    .catch(res.send)
    })

    //request handler to render single organization
organizationRouter.get('/', (req,res) =>{
    organizationApi.getOrganization()
    .then(() => {
    res.render('/', {})
    })
    .catch(res.send)
    })
    
    //request handler to delete organization, redirects to /organizations once organization has been deleted
organizationRouter.delete('/', (req, res) => {
    organizationApi.deleteOrganization()
    .then(()=> {
      res.redirect('/')
    })
    .catch(res.send)
    })

    //request handler to edit organization form
organizationRouter.get('/', (req, res) => {

    organizationApi.getOrganization()
      .then(() => {
        res.render()
      })
      .catch(res.send)
    })

    
//request handler to update organization form
organizationRouter.put('/', (req,res) => {
    organizationApi.updateOrganization()
    //return promise
    .then(() => {
      res.redirect('/')
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
    
    


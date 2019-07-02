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
 const OrganizationSchema = new mongoose.Schema({
     //name of business and description of business
 name: String,
 description: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const OrganizationCollection = mongoose.model('Organization', OrganizationSchema)
/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllOrganizations() {
    return OrganizationCollection.find()
  }

function addNewOrganization(newOrganization) {
    return OrganizationCollection.create(newOrganization)
  }

function getOrganization(organizationId) {
      return OrganizationCollection.findById(organizationId)
  }

function updateOrganization(organizationId, updateOrganization) {
    return OrganizationCollection.findByIdAndUpdate(organizationId, updateOrganization)   
}

function deleteOrganization(organizationId) {
    return OrganizationCollection.findByIdAndDelete(organizationId)
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllOrganizations,
  addNewOrganization,
  getOrganization,
  updateOrganization,
  deleteOrganization
}

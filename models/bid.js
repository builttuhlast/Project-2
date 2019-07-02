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
 const BidSchema = new mongoose.Schema({
  projectId: mongoose.Types.ObjectId,
     //name of business and description of business
 company: String,
 rating: Number,
 number: String,
 type: String,
 complete: Number,
 amount: Number
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const BidCollection = mongoose.model('Bid', BidSchema)
/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllBids() {
    return BidCollection.find()
  }

function addNewBid(newBid) {
    return BidCollection.create(newBid)
  }

function getBid(bidId) {
      return BidCollection.findById(bidId)
  }

function updateBid(bidId, updateBid) {
    return BidCollection.findByIdAndUpdate(bidId, updateBid)   
}

function deleteBid(bidId) {
    return BidCollection.findByIdAndDelete(bidId)
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllBids,
  addNewBid,
  getBid,
  updateBid,
  deleteBid
}

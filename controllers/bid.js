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
const bidApi = require('../models/connection.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const bidRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 

 //request handler to get new bid
bidRouter.get('/new', (req, res) => {
    // res.render('bids/newBidForm.hbs')
})

//request handler to post bid
bidRouter.post('/', (req, res) => {
    bidApi.addNewBid(req.body)
  .then(() => {
    res.redirect('/bids')
  })
  .catch((err) => {
    res.send(err)
  })
})

//request handler to render all bids
bidRouter.get('/', (req,res) =>{
    bidApi.getAllBids()
    .then((bids) => {
        res.send(bids)
      //res.render('./', {})
    })
    .catch(res.send)
    })

//request handler to render single bid
bidRouter.get('/bidId', (req,res) =>{
    bidApi.getProject(req.params.bidId)
    .then((bid) => {
    //  res.render('bids/bid.hbs', {bid})
    })
    .catch(res.send)
    })

//request handler to delete bid, redirects to /bids once bid has been deleted
bidRouter.delete('/bidId', (req, res) => {
    bidApi.deleteBid(req.params.bidId)
    .then(()=> {
        res.redirect('/bids')
    })
    .catch(res.send)
    })

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  bidRouter
}

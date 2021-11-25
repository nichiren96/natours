const express = require('express')
const toursController = require('../controllers/tours')

const router = express.Router()

router
    .route('/')
    .get(toursController.getAllTours)
    .post(toursController.createTour)

router
    .route('/:tourId')
    .get(toursController.getTour)
    .patch(toursController.updateTour)
    .delete(toursController.deleteTour)

module.exports = router
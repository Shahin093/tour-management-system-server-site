const express = require('express');
const tourControllers = require('../controllers/tour.controller');


const router = express.Router();

router
    .route('/')
    .get(tourControllers.getTourData)
    .post(tourControllers.addedTourData)

router
    .route('/:id')
    .get(tourControllers.tourDataById)

module.exports = router;

const Tour = require('../models/tour')

exports.getAllTours = async (req, res) => {

    try {
        const tours = await Tour.find()
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
    
}

exports.createTour = async (req, res) => {

    try {

        const tour = await Tour.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                tour
            }
        })

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.getTour = async (req, res) => {

    try {
        const tour = await Tour.findById(req.params.tourId)
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.updateTour = async (req, res) => {

    try {
        const updatedTour = await Tour.findByIdAndUpdate(req.params.tourId, req.body, { new: true})
        res.status(200).json({
            status: 'success',
            data: {
                tour: updatedTour
            }
        })
    } catch (err) {
         res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.deleteTour = async (req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.tourId)
        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}
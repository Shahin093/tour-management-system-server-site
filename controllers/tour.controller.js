const { getTourService, addedDataTourService } = require("../services/tour.service")

// get all Data 
exports.getTourData = async (req, res, next) => {
    try {

        // paggination 
        const queries = {};
        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }

        const result = await getTourService(queries);
        res.status(200).json({
            status: 'success',
            message: 'Successfully founded the tour',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not founded the tour',
            error: error.message
        })
    }
};

// post data 
exports.addedTourData = async (req, res, next) => {
    try {
        const result = await addedDataTourService(req.body);
        res.status(200).json({
            status: 'success',
            message: 'Successfully added data the tours',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not data added the Tour',
            error: error.message
        });
        next(error)
    }
}

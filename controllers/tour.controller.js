const { getTourService } = require("../services/tour.service")

// get all Data 
exports.getTourData = async (req, res, next) => {
    try {
        const result = await getTourService();
        res.status(200).json({
            status: 'success',
            message: 'Successfully founded the tour'
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not founded the tour'
        })
    }
};

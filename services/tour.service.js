const Tour = require("../model/tours")

exports.getTourService = async () => {
    const result = await Tour.find({});
    return result;
}
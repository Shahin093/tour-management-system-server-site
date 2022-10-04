const Tour = require("../model/tours")

exports.getTourService = async () => {
    const result = await Tour.find({});
    return result;
};

// post service 
exports.addedDataTourService = async (data) => {
    const result = await Tour.create(data);
    return result;
}
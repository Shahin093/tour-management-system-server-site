const Tour = require("../model/tours")

exports.getTourService = async (queries) => {
    const result = await Tour.find({})
        .skip(queries.skip)
        .limit(queries.limit)
        ;
    return result;
};

// post service 
exports.addedDataTourService = async (data) => {
    const result = await Tour.create(data);
    return result;
}
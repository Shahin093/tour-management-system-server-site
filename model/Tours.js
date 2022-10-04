const { default: mongoose } = require("mongoose");



const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [4, "At least 6 characters"],
        mixLength: [100, "must not be 100 characters upon"]
    },
    image: {
        type: String,
        required: [true, 'image is required']
    },
    location: {
        lat: {
            type: Number,
            require: true,
            default: '0.000'
        },
        lng: {
            type: Number,
            required: true,
            default: '0.000'
        },
        name: {
            type: String,
            required: true
        }
    },
    price: {
        type: Number,
        min: [0, 'Price can not be less than0'],
        required: true
    },
    views: {
        type: Number,
        min: [0, 'Views can not be less then 0'],
        required: true,
        default: 0
    }
});

// create model 
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;



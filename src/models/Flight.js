const { Schema, model } = require('mongoose');

const FlightSchema = new Schema(
    {
        origin: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        airline: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    });

module.exports = FlightSchema;
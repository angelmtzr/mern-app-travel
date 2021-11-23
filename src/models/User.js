const { Schema, model } = require('mongoose');
const FlightSchema = require('./Flight');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        flights: [FlightSchema]
    });

module.exports = model('User', UserSchema);
const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ||
    "mongodb://localhost/databaseTest";

mongoose.connect(URI, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connnected to MongoDB');
})
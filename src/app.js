const express = require('express');
const morgan = require("morgan");
const app = express();

const routes = require("./routes/api");

// settings
app.set("port", process.env.PORT || 8000);
//*app.set("port", 8000);

// data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// http request logger
app.use(morgan("tiny"));

// routes
app.use('/api', routes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('/*', (req, res) => {
        let url = path.join(__dirname, '../client/build', 'index.html');
        if (!url.startsWith('/app/')) // we're on local windows
        {
            url = url.substring(1);
        }
        res.sendFile(url);
    });
}

module.exports = app;

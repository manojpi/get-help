const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const mainLoction = require("./controllers/locationEmailController");
const mainDetails = require("./controllers/detailsHandler");
require("dotenv").config(); // loading the environment contents into process.env

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/alert', async (req, res) => {
    let locationData = req.body;
    let returnMessage = await mainLoction(locationData).catch(console.error);
    
    res.json(
        {
            status: 200,
            body: JSON.stringify(returnMessage),
        }
    );
})

app.post('/details', async (req, res) => {
    let details = req.body
    let returnMessage = await mainDetails(details).catch(console.error);
    console.log(returnMessage);
})


app.listen(9001);


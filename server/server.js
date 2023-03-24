const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const main = require("./controllers/emailController");
require("dotenv").config(); // loading the environment contents into process.env

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/alert', async (req, res) => {
    console.log(req.body);
    let returnMessage = await main().catch(console.error);
    
    res.json(
        {
            status: 200,
            body: JSON.stringify(returnMessage),
        }
    );
})


app.listen(9001);


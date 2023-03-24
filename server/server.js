const express = require("express");
const cors = require("cors");
const app = express();
const main = require("./controllers/emailController");
require("dotenv").config(); // loading the environment contents into process.env


app.use(cors());


app.post('/alert', async (req, res) => {
    console.log(req.body);
    let returnMessage = await main().catch(console.error);
    
    res.send(returnMessage);
})


app.listen(8000);


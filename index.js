const express = require("express");
const dbconnect = require("./dbconnect");
const apiset = require("./routes/cloudinaryroute")
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
const https = require("https");
const cloudinary=require("cloudinary");

const app = express();
app.use(express.json({ limit: "10mb" }));


cloudinary.config({
    cloud_name: 'dxrze8ji2',
    api_key: '987534721543442',
    api_secret: '4o68EWb4h3M1ETJQTGuw8AfXcV0'
});
app.use(morgan("common"));

const corsOptions = {
    credentials: true,
    origin: [
        "http://localhost:3000",
        "https://rocknwoods.website",
        "https://job4jobless.com",
    ],
};

app.use(cors(corsOptions));

app.get("/test", (req, res) => {
    res.status(200).send("Welcome");
});
app.use("/api", apiset);
;
dbconnect();

app.listen(4000, () => {
    console.log("listening on port:4000");
});

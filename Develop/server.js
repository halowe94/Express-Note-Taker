const express = require ("express");
const path = require('path');
const app = express();
const fs = require('fs');
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

//we want to look for the environment variables and we want to look for one called port
let PORT = process.env.PORT || 8080


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set static folder
app.use(express.static(path.join(__dirname, "public")));
app.use("/", htmlRoutes);
app.use("/", apiRoutes);

app.listen(PORT, () => {console.log("server started on PORT " + PORT)});
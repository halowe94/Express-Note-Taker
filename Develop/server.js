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


// just going to a webpage is a get request
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//api route
//only one expression means no curly braces
//Get ALL members
// app.get('/notes', (req, res) => {
//     res.json()
// });

// //Get SINGLE member
// app.get("/api/notes/:notes", (req, res) => {
//     res.json()
// });

// app.post("/api/notes", (req, res) => {
//     let newNote = req.body;
//     notes.push(newNote);
//     res.json(newNote);
// });

// app.delete("/api/notes/:notes", (req, res) => {
//     res.json()
// });

app.listen(PORT, () => {console.log("server started on PORT " + PORT)});
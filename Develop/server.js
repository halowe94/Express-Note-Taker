const express = require ("express");
const path = require('path');
const app = express();
const fs = require('fs');

let PORT = process.env.PORT || 8080


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")))


// just going to a webpage is a get request
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//api route
//only one expression means no curly braces
//Get ALL members
app.get('/notes', (req, res) => {
    res.json()
});

//Get SINGLE member
app.get(, (req, res) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
});

app.delete( , (req, res) => {
    res.json()
});

//set a static folder
app.use(express.static(path.join(__dirname, 'public')))

//we want to look for the environment variables and we want to look for one called port
const PORT = process.env.PORT || 5000; // PORT OR 5000

app.listen(PORT, () => console.log(`server started on ${PORT} 5000`));
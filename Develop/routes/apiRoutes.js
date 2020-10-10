const path = require('path');
const fs = require('fs');
const router = require('express').Router();

let notes;
//checkObject = dbVar
const dbVar = path.join(__dirname, '../', 'db');

//Module.export api.routes

    //GET request reads db.json
    router.get('/api/notes', (req, res) => {
        let data = fs.readFileSync(path.join(dbVar, "db.json"), "utf8");
        notes = (data) ? JSON.parse(data) : [];
        res.json(notes);
    });

    //POST request recieves new note to save on the request body
    //add post to db
    router.post('/api/notes', (req, res) => {
        let data = req.body;
        // let noteData = fs.readFileSync(path.join(dbVar, "db.json"), "utf8");
        // let dbData = JSON.parse(noteData);
        // console.log(data);

        //for loop to increment id
        // for (i = 0; i < dbData.length, i++;) {
        //     let id = parseInt(dbData[i] + 1);
        // };

        // if (Array.isArray(data)) {
        //     console.log('Your array is working');
        // };
        notes.push(data);
        fs.writeFileSync(path.join(dbVar, "db.json"), JSON.stringify(notes));
    });


    //read all notes and delete via id
    router.delete('api/notes', (req, res) => {
        
    });

    module.exports = router;



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
    

    // router.get('/user/:id', function (req, res) {
    //     res.send('OK')
    //   })
      
    //   app.use(router)

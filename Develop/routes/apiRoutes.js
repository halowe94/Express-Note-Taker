const path = require('path');
const fs = require('fs');

//checkObject = dbVar
const dbVar = path.join(__dirname, '../', 'db');

//Module.export api.routes
module.exports = function(app) {
    //GET request reads db.json
    app.get('/api/notes', (req, res) => {
        let json;
        let data = fs.readFileSync(path.join(databaseDir, "db.json"), "utf8");
        json = JSON.parse(data);
    });

    //POST request recieves new note to save on the request body
    //add post to db
    app.post('/api/notes', (req, res) => {
        let data = req.body;
        let noteData = fs.readFilesync(path.join(databaseDir, "dbjson"), "utf8");
        let dbData = JSON.parse(noteData);

        //for loop to increment id
        for (i = 0; i < dbData.length, i++;) {
            let id = parseInt(dbData[i] + 1);
        };

        if (Array.isArray(data)) {
            console.log('Your array is working');
        };
    });

    //read all notes and delete via id
    app.delete('api/notes', (req, res) => {
        
    });

};



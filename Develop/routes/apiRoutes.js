const path = require('path');
const fs = require('fs');

const dbVar = path.join(__dirname, '../', 'db');

module.exports = function(app) {
    app.get('/api/notes', (req, res) => {
        
    });
};

app.post('/api/notes', (req, res) => {
    
});

app.delete('api/notes', (req, res) => {

});



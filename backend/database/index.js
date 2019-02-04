const mongoose = require('mongoose');

const URI = 'mongodb://localhost/rankwatch';

mongoose.connect(URI,{ useNewUrlParser: true })
    .then(
        db => {
            console.log(
                `\n🚀 Connected to MongoDB! :D\n` +
                `  - Start time: ${new Date(Date.now()).toLocaleString()}`)
            console.log(
                `  - Host: ${db.connection.host}`
            );
            console.log(
                `  - Port: ${db.connection.port}`
            );
            console.log(
                `  - Database: ${db.connection.name}`
            );
        } 
            
    )
    .catch(
        err => console.log(err)
    );

module.exports = mongoose; 
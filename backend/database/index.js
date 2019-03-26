const mongoose = require('mongoose');


if(process.env.NODE_ENV === 'production' && !process.env.DB_HOST){
    throw Error ('No DB_HOST configured!')
}
const URI = (process.env.NODE_ENV === 'production' ? 
'mongodb+srv://' + process.env.DB_USER +':'+process.env.DB_PASSWORD+'@'+process.env.DB_HOST+'/'+process.env.DB_NAME+'?retryWrites=true' :
'mongodb://localhost/rankwatch-dev'
 );

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

mongoose.set('useCreateIndex', true);

module.exports = mongoose; 
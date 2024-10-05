const mongoose = require('mongoose')
const connectDB = async() => {
    try {
        const conn = await mongoose.connect (process.env.MONGO_URI , {
          dbName : "custom-database-created-by-Me"
            
        })

        console.log('mongodb is connected now . . .');
    } catch (error) {
        console.log(error)
        console.error(' some error happened . . . ');
        process.exit();
    }
}
module.exports = connectDB
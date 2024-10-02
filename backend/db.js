const mongoose = require('mongoose')
const connectDB = async() => {
    try {
        const conn = await mongoose.connect (process.env.MONGO_URI , {
            useUnifiedTopology : true , 
            useNewUrlParser : true , 
            
        })

        console.log('mongodb is connected now . . .');
    } catch (error) {
        console.log(error)
        console.error(' some error happened . . . ');
        process.exit();
    }
}
module.exports = connectDB
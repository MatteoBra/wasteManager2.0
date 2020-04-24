const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useCreateIndex:true,
                useUnifiedTopology:true
        });

        console.log(`MongoDB Connected : ${conn.connection.host}`.green.bold)


    }catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);//app shut down
    }
}

module.exports = connectDB;
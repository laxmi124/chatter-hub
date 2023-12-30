const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
         });

        console.log(`mongo db connected ${connect.connection.host}`.cyan.underline )
    } catch (error) {
        console.log(`error is ${error.message}`.red.bold)
        process.exit()
    }
    console.log("anyhow it is running")
}
module.exports = connectDB;
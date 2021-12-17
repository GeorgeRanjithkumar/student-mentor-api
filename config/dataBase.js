const mongoose = require("mongoose");

const url =
  "mongodb+srv://user:9597350897@cluster0.genpe.mongodb.net/student-mentor?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const db = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log(`mongoose ${db.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

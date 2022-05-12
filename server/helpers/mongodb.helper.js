const mongoose = require("mongoose");

const connectDB = mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error(`error: ${err.stack}`);
    process.exit(1);
  });
mongoose.connection.on("open", () => {
  console.log("Connected to database\n");
});

module.exports = connectDB;

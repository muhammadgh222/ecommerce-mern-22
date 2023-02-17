const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
const app = require("./app");

const PORT = process.env.PORT || 5000;
const DB = process.env.MONGO_URI.replace("<password>", process.env.DB_PASSWORD);

mongoose.set("strictQuery", false); // Deprecation warning

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connected successfuly");
  });

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});

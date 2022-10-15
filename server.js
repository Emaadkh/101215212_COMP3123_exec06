const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const notesRoutes = require("./routes/NoteRoutes");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const SERVER_PORT = 8081
mongoose.Promise = global.Promise;


const DB_URL = "mongodb+srv://Emaadkh:Emad2572@cluster0.f2ujd7x.mongodb.net/notelab06?retryWrites=true&w=majority"
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

  
app.use("/api/v1/", notesRoutes);

app.route("/")
.get( (req, res) => {
  res.send("<h1>Welcome to Note taking application - Week06 Exercise-Emad</h1>");
});


app.listen(SERVER_PORT, () => {
  console.log("Server is listening on port 8081");

});




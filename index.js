const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const PORT = process.env.PORT || 8000;
const path = require("path");
const routes = require("./routes/index_route.js");
const Path = path.join(__dirname,"/views");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", Path);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(Path));
app.use("/", routes);

app.listen(PORT, (err)=> {
    if(!err) {
        console.log(`Server is running on http://localhost:${PORT}`);
    }
});

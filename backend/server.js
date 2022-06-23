const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// require route
app.use("/", require("./routes/moduleRoute"));

app.get('/', (req, res) => {
    res.send('Hello to NUSModuleMapping API');
})

// connect to mongoose
mongoose.connect(process.env.CONNECTION_URL);


const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(`Server Running on Port: http://localhost:${PORT}`);
})
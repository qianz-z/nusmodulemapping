const mongoose = require("mongoose")
const ModuleList = require("./ModuleList")

const moduleSchema = new mongoose.Schema({
    name: String,
    code: {
        type: String,
        minLength: 6,
    },
    // one hop prerequisites
    prerequisites: [mongoose.SchemaTypes.ObjectId],
    preclusions: [String],
    /*
    graph:{
        prerequisites_name: [String],
        prerequisites_code: [String]
    }
    */
})


module.exports = mongoose.model("Module", moduleSchema)
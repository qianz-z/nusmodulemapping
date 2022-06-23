const mongoose = require("mongoose")

const moduleSchema = new mongoose.Schema({
    name: String,
    code: {
        type: String,
        minLength: 6,
    },
    mc: Number,
    // one hop prerequisites
    prerequisites: [mongoose.SchemaTypes.ObjectId],
    preclusions: [String],
})

module.exports = mongoose.model("Module", moduleSchema)
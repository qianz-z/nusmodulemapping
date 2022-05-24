// npm run devStart
// getting mongoose library
const mongoose = require("mongoose");
const Module = require("./ModuleModel");
const ModuleList = require("./ModuleList");

mongoose.connect("mongodb://localhost/testdb")

run()
async function run(){
    try{
        const module = await Module.create(ModuleList)
        console.log(module)
    } catch(e){
        console.log(e.message)
    }
    
}

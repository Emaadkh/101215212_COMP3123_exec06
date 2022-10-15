const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated



const noteSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,   
       
    },
    discription: String,
    priority: {
        type: String,
        require: true,
    },
    dateAdded: Date,
    dateUpdated: {
        type: Date

    }

    


})



module.exports = mongoose.model("note", noteSchema)


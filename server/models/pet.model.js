const mongoose = require("mongoose");

/* 
{PATH} will be replaced with the field name, such as "location".
*/
const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String, unique: true,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },

        type: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },

        desc: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."],
        },

        skillone: {
            type: String,
        },

        skilltwo: {
            type: String,
        },
        skillthree: {
            type: String,
        },

    },

    { timestamps: true }
);

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;
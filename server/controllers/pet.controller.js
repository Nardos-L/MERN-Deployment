const Pet = require("../models/pet.model");

// Export an object that is full of methods.
module.exports = {
    // long-form - key: value format
    create: function (req, res) {
        console.log("create method executed");

        Pet.create(req.body)
            .then((pet) => {
                // newly created DB model instance
                res.json(pet);
            })
            .catch((err) => {
                // This makes the front-end axios .catch get triggered instead of the .then.
                res.status(400).json(err);
            });
    },

    // Shorthand key value pair, key name will be the name of the function and value will be the function.
    getAll(req, res) {
        console.log("getAll method executed");
        Pet.find().collation({ locale: 'en', strength: 2 }).sort({ type: 1 })
            .then((pets) => {
                res.json(pets);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getOne(req, res) {
        console.log("getOne method executed", "url params", req.params);

        Pet.findById(req.params.id)
            .then((pet) => {
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    delete(req, res) {
        console.log("delete method executed", "url params", req.params);

        Pet.findByIdAndDelete(req.params.id)
            .then((pet) => {
                res.json(pet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    //update method
    update(req, res) {
        console.log("update method executed", "url params:", req.params);

        Pet.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true, // return the newly updated model
        })
            .then((updatedPet) => {
                res.json(updatedPet);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
};
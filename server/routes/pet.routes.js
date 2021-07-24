const petController = require("../controllers/pet.controller");

/*
LEADING SLASH REQUIRED in routes!
Export a function to be called in server.js where the app will be passed in.
*/
module.exports = (app) => {
    // When one of these URLS is visited, execute the corresponding method.
    app.post("/api/pets", petController.create);
    app.get("/api/pets", petController.getAll);
    app.get("/api/pets/:id", petController.getOne);
    app.delete("/api/pets/:id", petController.delete);
    app.put("/api/pets/:id", petController.update);
};
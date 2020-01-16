const { Router } = require("express");

const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

routes = Router();

// DEV
routes.get("/dev", DevController.index);
routes.post("/dev", DevController.store);

// SEARCH
routes.get("/search", SearchController.index);

module.exports = routes;
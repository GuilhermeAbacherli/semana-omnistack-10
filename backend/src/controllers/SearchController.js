const Dev = require("../models/Dev");
// const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async index(request, response) {
        // Buscar todos os Devs num raio de 10km
        // Filtrar por tecnologias
        const { longitude, latitude, techs } = request.query;
        // const techsArray = parseStringAsArray(techs);
        // techs = parseStringAsArray(techs);
        const devs = await Dev.find({
            techs: {
                // $in: techsArray,
                $in: techs,
            },
            location: {
                $near: {
                    $maxDistance: 10000,
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude],
                    },
                },
            },
        });
        return response.json({ devs });
    },
};
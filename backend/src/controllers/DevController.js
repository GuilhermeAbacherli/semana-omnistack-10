const axios = require("axios");
const Dev = require("../models/Dev");
// const parseStringAsArray = require("../utils/parseStringAsArray");
// 5 Funções: index, show, store, update, destroy

module.exports = {
  async index(request, response) {
    const devs = await Dev.find();
    return response.json(devs);
  },

  async store(request, response) {
    const { github_username, techs, longitude, latitude } = request.body;
    let dev = await Dev.findOne({ github_username });
    if (!dev) {
      const githubResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
      const { name = login, avatar_url, bio } = githubResponse.data;
      // Para enviar um array pela query param:
      // http://localhost:3333/search?latitude=-23.1851174&longitude=-47.2826153&techs[]=ReactJS&techs[]=VueJS
      // techs[]=AlgumValor&techs[]=OutroValor&techs[]=MaisUmValor
      // const techsArray = parseStringAsArray(techs);
      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs,
        location
      });
    }
    return response.json(dev);
  }

  // Atualizar somente o nome, avatar, bio, location e techs
  // não permitir atualizar outras informações
  // async update(){},
  // async destroy(){},
};

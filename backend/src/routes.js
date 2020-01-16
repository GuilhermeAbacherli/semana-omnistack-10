const { Router } = require("express");
const axios = require("axios");
const Dev = require("./models/Dev");

routes = Router();

routes.post("/dev", async (request, response) => {
    const { github_username, techs } = request.body;
    const githubResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    const { name = login, avatar_url, bio } = githubResponse.data;

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs
    })
    return response.json(dev);
});

module.exports = routes;
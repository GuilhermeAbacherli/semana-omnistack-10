const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

mongoose.connect(
    "mongodb+srv://omnistack:omnistack@cluster0-oqlwz.mongodb.net/week10?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (filtros, ordenação, paginação, ...)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.listen(3333);

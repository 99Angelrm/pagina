// imports
const express = require("express");
const path = require("path");
// const helmet = require("helmet"); // Ayuda a proteger la aplicación
// var compression = require("compression"); // Para comprimir las respuestas
require("dotenv").config(); // Uso y configuración de las variables de entorno
// const cors = require("cors"); // Para habilitar CORS (en caso de ser necesario)
// rutas
const homeRoutes = require("./routes/home");
const PORT = process.env.PORT || 3000;
// app config
const app = express();
// middlewares
// app.use(helmet());
// app.use(compression());
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
// app.use(cors());

// endpoints
app.get("/", homeRoutes);
app.use(function (req, res, next) {
  res.status(404);

  // respond with html page
  if (req.accepts("html")) {
    res.send("Not found");
    return;
  }

  // respond with json
  if (req.accepts("json")) {
    res.send({ error: "Not found" });
    return;
  }

  // default to plain-text. send()
  res.type("txt").send("Not found");
});
// listen
app.listen(PORT, () => console.log(`listening in port: ${PORT}`));

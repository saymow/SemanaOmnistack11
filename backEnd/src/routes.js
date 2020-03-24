const express = require("express") // O express (framework) nos ajuda a trabalahar com as rotas.

const OngController = require("./controllers/OngController")
const incidentsController = require("./controllers/IncidentController")
const ProfileController = require("./controllers/ProfileController")
const SessionController = require("./controllers/SessionController")



const routes = express.Router()

routes.post("/sessions", SessionController.create)

routes.get("/ongs", OngController.index)
routes.post("/ongs", OngController.create)

routes.get("/profile", ProfileController.index)

routes.post("/incidents", incidentsController.create )
routes.get("/incidents", incidentsController.index)
routes.delete("/incidents/:id", incidentsController.delete)

module.exports = routes // export routes, porem usando NODE.
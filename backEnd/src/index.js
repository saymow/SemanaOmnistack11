const express = require("express")  // O express (framework) nos ajuda a trabalahar com as rotas.
const cors = require("cors") // Módulo de segurança
const routes = require("./routes") // semelhante ao import routes from "./routes", porem usando NODE.

const App = express() // Instanciando o express.

App.use(cors())
App.use(express.json()) // Torna a nossa aplicação capaz de reconhecer o JSON vindo do BODY da requisição.
App.use(routes)

/*
* Métodos HTTP:
*
* GET => buscar informação do backend
* POST => criar informação no backend
* PUT => alterar informação no backend
* DELETE => deletar informação no backend
*
* 
* Tipos de parâmetros:
* 
* Query params: Parâmetros enviados pela rota após a "?", (Filtros, paginação)
* Ex: localhost:3333/users?name=gustavo&idade=25
* (Fica em request.query) 
*  
* Route params: Parâmetros enviados através da rota.
* Ex: localhost:3333/users/[:id] 
* (Fica em request.params)
*
* Request body: Corpo da requisição, utilizado para criar ou alterar recursos.
*
* (Fica em request.body)
*
*
*
* *
* 2 Maneiras de manusear os dados em um banco SQL:
* Driver: SELECT * FROM users
* Query Builder (framework) : table("users").select("*").where()
*
*/ 



App.listen(3333)
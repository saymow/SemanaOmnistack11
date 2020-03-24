const crypto = require("crypto") // Pacote que vem com node usado para criptografia.
const connection = require("../database/connection")



module.exports = {
    async create(request, response){
      const { name, email, whatsapp, city, uf } = request.body

      const id = crypto.randomBytes(4).toString("HEX") // Usando o cripto para gerar uma ID para a ONG.

      await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
      })

    return response.json({ id })
    },
    
    async index(request, response){
        const data = await connection('ongs').select("*")
    
        return response.json({data})
    }
}
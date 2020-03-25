import React,{ useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

import Api from "../../services/api"

import "./style.css"

import logoImg from "../../assets/logo.svg"


export default function NewIncident(){
    const [title, setTitle] = useState("") 
    const [description, setDescription] = useState("") 
    const [value, setValue] = useState("") 

    const OngId = localStorage.getItem("ongId")
    const history = useHistory()

    async function handlerSubmit(e){
      e.preventDefault()
      
      const data = {
        title,
        description,
        value
      }

      console.log(data, OngId)

      try{
        await Api.post('incidents', data, {
          headers: {
            Authorization: OngId
          }
        })

        history.push('/profile')
      }catch(err){
        alert("Erro ao cadastrar caso, tente novamente.")
      }
    }

    return (
      <div className="new-incident-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="logoimg"/>
            
            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

            
            <Link className="backLink" to="/profile">
              <FiArrowLeft size={16} color="#E02041"/>
              Voltar para home
            </Link> 
          </section>
          
          <form onSubmit={handlerSubmit}>
            <input
             placeholder="Título do caso"
             value={title}
             onChange={e => setTitle(e.target.value)}
            />
            
            <textarea
             placeholder="Descrição"
             value={description}
             onChange={e => setDescription(e.target.value)}
            />
            
            <input
             placeholder="Valor em reais"
             value={value}
             onChange={e => setValue(e.target.value)}
            />

            <button className="button">Cadastrar</button>
          </form>
        </div>
      </div>
    )
}
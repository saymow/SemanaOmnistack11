import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { FiPower, FiTrash2 } from "react-icons/fi"

import Api from "../../services/api"

import logoImg from "../../assets/logo.svg"

import "./style.css"

export default function Profile(){
    const [incidents, setIncidents] = useState([])

    const ongId = localStorage.getItem("ongId")
    const ongName = localStorage.getItem('ongName')
    const history = useHistory()

    useEffect(() =>{
      Api.get("profile", {
        headers: {
          Authorization: ongId
        }
      }).then(response => {
        setIncidents(response.data)
      })
    },[ongId])

    async function handlerDelete(id){
      try{
        await Api.delete(`incidents/${id}`, {
          headers: {
            Authorization: ongId,
          }
        })

        setIncidents(incidents.filter(incident => incident.id !== id))
      }catch{
        alert("Erro ao deletar caso, tente novamente.")
      }
    }

    function HandlerLogout(){
      localStorage.clear()

      history.push("/")
    }

    return (
      <div className="profile-container">
        <header>
          <img src={logoImg} alt="logo imagem"/>
          <span>Bem vinda, {ongName}</span>

          <Link className="button" to="/incidents/new">
            Cadastrar novo caso
          </Link>

          <button onClick={HandlerLogout} type="button">
            <FiPower size={18} color="#E02041" />
          </button>
        </header>

        <h1>Casos cadastrados</h1>

        <ul>
          {incidents.map(incident => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>
   
              <strong>DESCRIÇÃO:</strong>
              <p>{incident.description}</p>
   
              <strong>VALOR:</strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
   
              <button onClick={() => handlerDelete(incident.id)} type="button">
                <FiTrash2 size={20} color="#a8a8b3"/>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
}
import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { FiLogIn }  from "react-icons/fi"

import Api from "../../services/api"

import "./style.css"

import logoImg from "../../assets/logo.svg"
import heroesImg from "../../assets/heroes.png"

export default function Logon(){
    const [id, setId] = useState("")

    const history = useHistory()

    async function registerHandler(e){
      e.preventDefault()
      
      try{
        const response = await Api.post("sessions", { id })

        localStorage.setItem('ongId', id)
        localStorage.setItem('ongName', response.data.name)

        history.push("/profile");

      }catch(err){
        alert("Falha no login, tente novamente.")
      }
    }

    return (
      <div className="logon-container">
        <section className="form">
          <img src={logoImg} alt="logo"></img>
          <form onSubmit={registerHandler}>
            <h1>Faça seu Logon</h1>

            <input
             placeholder="Sua ID"
             value={id}
             onChange={e => setId(e.target.value)}
            />
            
            <button className="button">Entrar</button>

            <Link className="backLink" to="/register">
              <FiLogIn size={16} color="#E02041"/>
              Não tenho cadastro
            </Link> 
          </form>
        </section>
        <img src={heroesImg} alt="heroes img"></img>
      </div>
    )
}
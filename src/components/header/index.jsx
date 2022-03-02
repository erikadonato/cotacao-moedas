import React, { useEffect, useState } from "react";
import './style.css'
import { getData } from "../../utils/getDataRealTime";

const Header = () => {
    const [hora, setHora ] = useState()
    const data = new Date();
    useEffect(()=> {
        setInterval(() => {
            setHora(getData())
        }, 1000)
    }, [hora])
    return (
        <div className="container-header">
            <div className="title-header">
                <h2>Cotação de moedas</h2>
            </div>
            <div className="home-option">
                <span>Home</span>
            </div>
            <div className="documentacao-option">
                <a target="_blank" href="https://docs.awesomeapi.com.br/api-de-moedas">Documentação</a>
            </div>
            <div className="data-espaco">
                {data.toLocaleDateString()} 
            </div>
            <div className="hora-espaco">
               {hora}
            </div>
        </div>
    )
}

export default Header;
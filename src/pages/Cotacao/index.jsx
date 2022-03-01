import React,{useState} from "react";
import Cotar from "../../components/cotar-moeda";
import ResultadoCotacao from "../../components/resultado-cotacao";
import './style.css'

const Cotacao = () => {
    const [showResultado, setShowResultado] = useState(false)
    const [coins, setCoins] = useState({
        usd : false, 
        eur : false, 
        btc : false, 
        brl : false
    })
    return (
        <div className="container-cotacao">
            <h1>Cotação de moedas</h1>
            {showResultado === true ? <ResultadoCotacao /> : <Cotar coins={coins} setCoins={setCoins} setShowResultado={setShowResultado}  />}
        </div>
    )
}

export default Cotacao;
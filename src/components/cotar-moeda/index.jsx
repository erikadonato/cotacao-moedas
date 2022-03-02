import React, { useEffect, useState } from "react";
import api from "../../service/api";
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cotar = ({ coins, setCoins, setShowResultado}) => {
    const [usd, setUsd] = useState(false)
    const [eur, setEur] = useState(false)
    const [gbp, setGbp] = useState(false)
    const [btc, setBtc] = useState(false)
    const [brl, setBrl] = useState(false)
    const [moedaOrigem, setMoedaOrigem] = useState('USD')
    const [valorOrigem, setValorOrigem] = useState(null)
    const [coinsOptions, setCoinsOptions] = useState({})

    function handleCheck(value, setValue, type) {
        if(valorOrigem === null || valorOrigem === "") {
            setValue(value)
            return toast.error("Complete os dados de origem!")
        } else if(type.toUpperCase() === moedaOrigem) {
            return toast.error("Moeda de origem igual a que pretende cotar")
        } else {
            setValue(!value)
            coins[`${type}`] = !value 
        }
    }

    function handleResult() {
        let count = 0;
        Object.values(coins).forEach((item) => {
            if(item === true) {
                count+=1
            }
        })
        if (count === 0) {
            return toast.error("Não é possível prosseguir sem selecionar pelo menos uma moeda")
        } else if(isNaN(valorOrigem)) {
            return toast.error("valor de origem não informado ou não é um número")
        } 
        setShowResultado(true)
    }

    useEffect(()=> { 
        api.get('all/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL,LTC-BRL')
        .then(response => setCoinsOptions(response.data))
    }, [])

    return (
        <div className="container-cotar">
        <h4>Selecione a moeda e o valor de origem:</h4>
        <div className="moeda-origem">
        <select onChange={(e) => setMoedaOrigem(e.target.value)} className="select-coin">
           {(Object.keys(coinsOptions)).map((item, index) => {
               return (
                   <option value={item} key={index}>{item}</option>
               )
           })}
        </select>
        <input onChange={(e) => setValorOrigem(e.target.value)} className="input-coin-origem" /> <br />
        </div>
        <h4>Selecione as moedas de destino</h4>
        <div className="moedas-destino">
        <label>
        <input type="checkbox" value={usd} checked={usd} onChange={() => handleCheck(usd, setUsd, 'usd')} />
        USD
        </label>
        <label>
        <input type="checkbox" value={eur} checked={eur} onChange={() => handleCheck(eur, setEur, 'eur') } />
        EUR
        </label>
        <label>
        <input type="checkbox" value={gbp} checked={gbp} onChange={() => handleCheck(gbp, setGbp, 'gbp')} />
        GBP
        </label>
        <label>
        <input type="checkbox" value={btc} checked={btc} onChange={() => handleCheck(btc, setBtc, 'btc')} />
        BTC
        </label>
        <label>
        <input type="checkbox" value={brl} checked={brl} onChange={() => handleCheck(brl, setBrl, 'brl')} />
        BRL
        </label>
        </div>
        <button onClick={() => handleResult()} className="button-obter-cotacao"> obter cotação</button>
        <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pause />
        </div>
    )
}

export default Cotar;
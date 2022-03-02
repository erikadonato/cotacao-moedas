import React, { useEffect, useState } from "react";
import api from "../../service/api";

const ResultadoCotacao = ({coins}) => {
    let coinsToSend = []
    const [ send, setSend] = useState()
    useEffect(() => {
        Object.keys(coins).forEach((moeda) => {
            if (coins[moeda] === true) {
                let newMoeda = moeda.toUpperCase()
                coinsToSend = [... coinsToSend, newMoeda]
            }
            setSend(coinsToSend)
          });
        api.get('')
    }, [])
    return (
        <div>
            Aqui ficará o resultado da cotação
        </div>
    )
}

export default ResultadoCotacao;
import React from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'
import { useEffect } from 'react'


const FrutasPage = props => {
    const[listFrutas,setFrutas] = React.useState([])


const loadFrutas = () =>{
    api.get("/frutas")
        .then(res => setFrutas(res.data))
}

useEffect (() =>{
    loadFrutas()
},[])

return (
    <div>
        <h1> Tabela Frutas</h1>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Tipo</th>
                    <th>Submeter</th>
                </tr>
                <tbody>
                    <td>nome</td>
                    <td>quant</td>
                    <td>preco</td>
                    <td>tipo</td>
                    <td>x</td>
                </tbody>
            </thead>
        </table>
      
    </div>
)
}
FrutasPage.propTypes = {
}


export default FrutasPage

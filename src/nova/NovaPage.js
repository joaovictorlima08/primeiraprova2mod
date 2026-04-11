import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Input from './Input'
import api from '../../utils/api'

const NewPage = props => {
    const[form,setForm] = React.useState({nome: "", quant: "", preco: "", tipo: ""})


const handleChange = e => {
    const{name, value} = e.target
    setForm({...form, [name]: value})
}

const handleSubmit = e => {
    e.preventDefault();
    api.post("/frutas",from)
        .then(data => setForm({nome: "", quant: "",preco: "", tipo: "" }))
}

    return(
    <div>
        <h1> Novo Fruta</h1>
        <form>
             <input label= "Nome" id="name" name="name" onChange={""}/>
             <input label="Quantidade" id="" name="quantity" onChange={""}/>
             <input label="Preço" id="price" name="price" onChange={""}/>
             <input label="Tipo(Kg,Unit)" id="tipo" name="tipo" onChange={""}/>
             <hr/>
             <Button onClick={""}>
                Submeter Produto
                </Button>
        </form>
    </div>
    )       
}



NewPage.propTypes = {

}

export default NewPage

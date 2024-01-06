import PropTypes from 'prop-types'
import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 6 - controlando imputs
    // 3 - Gerenciamento de dados:
    const [name, setName] = useState(user ? user.name : "") // se tiver valor setado do App.jsx 'user.name', se nao ""
    const [email, setEmail] = useState(user ? user.email : "")

    const [bio, setBio] = useState((""))

    const [role, setRole] = useState("")

    const handlName = (e) => {
        setName(e.target.value) // pegando o valor digitado
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando o formulario...')
        console.log(name, email, bio, role)

        // 7 - Limpar formulario
        setName("");
        setEmail("");
    }

  return (
    <div>
    {/*5 - Envio de formulario */}
      {/* 1 - Criação de form */}

      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome: </label>
            <input type="text" 
            name='name' 
            placeholder='Digite seu nome' 
            onChange={handlName}
            value={name}
            />
        </div>
        {/* 2 - Label envolvendo o input */}
        <label>
            <span>E-mail</span>
            {/*Simplificaão de manipular State */}
            <input type="email" 
            name='email' 
            placeholder='Digite seu e-mail' 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            />
        </label>
        {/* 8 - text area */}
        <label>
            <span>Bio:</span>
            <textarea name="bio" 
            placeholder='descrição do usuario' 
            onChange={(e) => setBio(e.target.value)} 
            value={bio}>
            </textarea>
        </label>
        {/* 9 - Select */}
        <label>
            <span>Função no sistema:</span>
            <select name="role" onChange={(e) => setRole(e.target.value)}>
                <option value="user">Usuario</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
            </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

// Controlando props herdadas pelo pai 
MyForm.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
}

export default MyForm

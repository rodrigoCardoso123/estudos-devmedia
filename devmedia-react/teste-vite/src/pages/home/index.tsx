import  './estilo.css';
import Trash from "../../assets/images.png";
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

const Api = axios.create({
    baseURL: 'http://localhost:3001'
});

function Home() {


let [users, setUsers] = useState([])

const InputName = useRef();
const InputIdade = useRef();
const InputEmail = useRef();

  async function GetUsers() {
  const userData = await Api.get('/usuarios')
  setUsers(userData.data)
  console.log(userData.data)
  }

  async function postUsuarios() {
   await Api.post( '/usuarios', {
    Nome: InputName.current.value,
    Idade: InputIdade.current.value,
    Email: InputEmail.current.value
   })

   GetUsers()
  }

  async function DeleteUsers(id) {
    await Api.delete(`/usuarios/${id}`)
    
    GetUsers()
    
  }

  useEffect(() => {
    GetUsers()
  }, [])


  return (
    <>
      <div className='container'>
          <form className='form'>
            <h1 className='h1'>Cadastro de Usuários</h1>
            <input type="text" name="" id="Nome" placeholder='Nome' className='input' ref={InputName}/>
            <input type="number" name="" id="Idade" placeholder='Idade' className='input' ref={InputIdade}/>
            <input type="email" name="" id="E-mail" placeholder='E-mail' className='input' ref={InputEmail}/>
            <button type="button" className='butao' onClick={postUsuarios}>cadastrar</button>
          </form>

        {users.map( user => (
           <div key={user.idusuarios} className='card'>
           <div>
             <p className='card_p'>Nome: <span>{user.Nome}</span></p>
             <p className='card_p'>Idade: <span>{user.Idade}</span></p>
             <p className='card_p'>Email: <span>{user.Email}</span></p>
           </div>
           <div>
             <button onClick={() => DeleteUsers(user.idusuarios)}>
               <img src={Trash} alt="" className='img'/>
             </button>
           </div>
       </div>
        ))}
      
      </div>
    </>
  )
}

export default Home

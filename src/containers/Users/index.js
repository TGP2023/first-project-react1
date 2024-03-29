import React, { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';

import axios from "axios";

import Avatar from "../../Assets/avatar.svg";
import Arrow from "../../Assets/Arrow.svg";
import Trash from "../../Assets/trash.svg";

import  H1  from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";


import {
  Container,
  Image,
  User,
} from "./styles";



function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();


  //Este é o React Hooks / Estado no React = > Ferramenta auxiliar.



  useEffect(() => {

    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);

    }

    fetchUsers()
  }, [])

  // REACT HOOK => useEffect (Efeito Colateral)
  // A minha aplicação inicia (A página carregou, useEffect é chamado)
  // Quando um estado que está no array de dependência do useEffect é alterado



  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);

  }

  function goBackPage() {
    navigate('/')


  }


  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários!</H1>



        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="lixeira" src={Trash}></img>
              </button>
            </User>
          ))}
        </ul>


        <Button isBack={true}onClick={goBackPage} ><img alt="seta" src={Arrow} /> Voltar
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Users; 

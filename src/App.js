import React, { useState, useRef } from "react";

import axios from "axios";

import People from "./Assets/people.svg"
import Arrow from "./Assets/Arrow.svg"
import Trash from "./Assets/trash.svg"


import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User } from "./styles";


function App() {
  const [users, setUsers] = useState([]);  //Este é o React Hooks / Estado no React = > Ferramenta auxiliar.
  const inputName = useRef()
  const inputAge = useRef()

   async function addNewUser() {

const data = await axios.post("http://localhost:3001")

    //setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }])

  }

  function deleteUser(userId) {
    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);
  }


  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow}></img></Button>

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

      </ContainerItens>
    </Container>
  );
}

export default App 

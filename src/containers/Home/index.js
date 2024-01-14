import React, { useState, useRef } from "react";

import axios from "axios";

import People from "../../Assets/people.svg";
import Arrow from "../../Assets/Arrow.svg";



import { Container, H1, Image, ContainerItens, InputLabel, Input, Button,  } from "./styles";


function App() {
  const [users, setUsers] = useState([]);  //Este é o React Hooks / Estado no React = > Ferramenta auxiliar.
  const inputName = useRef();
  const inputAge = useRef();

 
  async function addNewUser() {
   const { data: newUsers } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    })

    setUsers([...users, newUsers,]);
       
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
 

      </ContainerItens>
    </Container>
  );
}

export default App; 

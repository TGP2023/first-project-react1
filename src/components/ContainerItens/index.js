import React from "react";

import { ContainerItens as Container } from "./styles"

function ContainerItens({children, isBlur}){ // esse é o componente da funcao

    return <Container isBlur={isBlur}>{children}</Container>

} 

export default ContainerItens
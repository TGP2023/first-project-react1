import React from "react";

import { Button as ContainerButton } from './styles'; // O "as" significa que houve alteração no nome.  

function Button({ children, ...props  }) {

    return <ContainerButton {...props}>{children}</ContainerButton>

}

export default Button;
import styled from "styled-components";



import Background from "../../Assets/background.svg" //Precisamos importar a imagem que consta na pasta (Assets).

export const Container = styled.div` 
background: url("${Background}"); //Utilizar a função background url, as aspas, sinal do dollar ($) e chaves {Background}, pois ele espera o código do JS.
background-size: cover; // Para não repetir.

display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
    min-height: 100vh;
`;

export const Image = styled.img` 
margin-top: 30px;


`;



export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin-top: 20px;
width: 342px;
height: 58px;

border: none;
outline: none;

p{ // Como o parágrafo está dentr de User, podemos aproveitar a configuração.
    font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
color:#fff
}

button{
background: none;
border: none;
cursor: pointer;

}

`;
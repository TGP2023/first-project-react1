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
`;

export const Image = styled.img` 
margin-top: 30px;


`;

export const ContainerItens = styled.div` 
background: linear-gradient(
    157.44deg,

     rgba(255, 255, 255, 0.60) 0.84%,
      rgba(255, 255, 255, 0.60) 0.85%,
       rgba(255, 255, 255, 0.15) 100%
       );

       border-radius: 61px 61px 0px 0px;
       backdrop-filter: blur(45px);

padding: 50px 36px;

display: flex;
    flex-direction: column;

    height: 100vh;

`;

export const H1 = styled.h1`
margin-bottom: 80px;
color: #FFF;
text-align: center;
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: normal;

`;


export const Button = styled.button`
border-radius: 14px;
background: transparent;
width: 342px;
height: 74px;
margin-top: 120px;

border: 1px solid #ffff;
color: #FFF;


font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 28px; 

cursor: pointer;

display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;


    
&:hover{
opacity: 0.8;

}

&:active {
opacity: 0.5;

}

img{
transform: rotate(180deg);

}

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
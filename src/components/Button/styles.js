import styled from "styled-components";

export const Button = styled.button`
border-radius: 14px;
background: ${props => props.isback ? 'transparent' : 'rgba(0, 0, 0, 0.80)'} ;
width: 342px;
height: 74px;
margin-top: 132px;

border: ${props => props.isback ? '1px solid #ffff' : 'none'};
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
transform: ${ props => props.isback && 'rotateY(180deg)'};

}

`;
import styled from "styled-components";

import deposito from "../../assets/img/deposito.jpg"

export const banner = styled.section `
height:100vh;
background-image: url(${deposito});
background-size:cover;
background-position:center ;
    background-repeat:no-repeat ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    text-align:center ;

    figure > h1{
        color:snow ;
    font-size:60px ;
    font-weight:600 ;
    }

    figure > div {
        margin-top:30px
    }

    figure > div > button {
        height:50px ;
        width:170px ;
        border-radius:5px ;
        border:0 ;
        margin:0 10px ;
        font-size:20px ;
        font-weight:500 ;
        padding:0 10 ;
        cursor: pointer;
       
    
        &:hover{
             transition: 0.2s;
             transform:scale(1.1);
        }
       

    }


`





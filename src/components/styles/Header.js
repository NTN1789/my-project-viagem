import styled from "styled-components"


 export const Header = styled.header `
    background-color:black;
    padding:10px 60px
    display: flex;
    justify-content : space-between;
    align-items:center;


    ul {
    display:flex ;
    justify-content:flex-end;
    align-items:center ;
    list-style:none ;
    padding:2vh
    
   }

    li{
    margin-right:10px;
    text-decoration:none;
    color:white;
    font-size:1.5rem;
    font-weight:500 ;
    padding: 10px 15px ;
    border-radius:5px ;
    transition:0.3s ;
    text-transform: uppercase;

        &:hover{
            background-color:snow ;
         color:tomato ;
         cursor:pointer;
   
        }


   }





`


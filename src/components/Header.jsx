
import * as S from "./styles/Header.js"

import { GlobalStyle } from "./styles/globalstyle.js"

 function Header (){
    return( 
     <div>
        <GlobalStyle/>
          
            <S.Header>
        
            <ul>
               
             <li> Home </li>
            <li>Blog </li>
            <li>Valores</li>
         <li>Sobre</li> 
            <li>contatos</li>
            </ul>
           
            </S.Header>

            
          
    
    
            
     </div>
 
 
    
    )
}


export default Header
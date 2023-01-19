
import { GlobalStyle } from "../styles/globalstyle.js"
import * as S from  "../styles/main.js"
import cancun from "../../assets/img/Cancun.jpg"
import paris from "../../assets/img/paris.jpeg"
import Lisboa from "../../assets/img/Lisboa.jpg"
function Main (){
    return(
        <div>
            <GlobalStyle/>
          
            <S.banner>
            <figure>
                <h1> faça o seu Login é vem aproveitar nossas viagens </h1>
            
            <div>
            <button > saiba mais</button>
                <button  > inscrever</button>  
                <button >clique aqui </button>
                </div>
            </figure>



            </S.banner>

            <S.itens>
                
                <p> nossos Locais de viagem </p>
                

            <img src={cancun} alt=""  />

            <h2> cancun</h2>

            <img src={paris} alt=""  />


            <h2> Paris</h2>

            <img src={Lisboa} alt=""  />


                <h2> Lisboa</h2>





                </S.itens>

             



         
         
            <></>
           
        </div>
    )
}

export default Main
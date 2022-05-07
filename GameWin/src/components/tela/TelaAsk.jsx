import { useContext } from "react";
import styled from "styled-components";
import { PerguntasContext, usePerguntasHook } from "../../context/PerguntasContext";

const BoxAsk = styled.div`
margin-top: 50px;
width: 100%;
min-height: 70vh;
background-color: #2e2e2e;
   
h1{
    color: #FFAE02;
}
.boxCard{
    
    display: flex;
    justify-content: center;
    padding: 10px;
    gap: 50px;
    margin-top: 50px;
}
    .card{
        width: 250px;
        height: auto;
        background-image: linear-gradient(0deg, #0d4998, #3b4ec6);
        border-radius: 10px;

        h1{
            font-size: 20px;
        }
    }

`


const Ask = () => {

    const {perguntas} = usePerguntasHook()
    return ( 
        <BoxAsk>

           
                <h1>Perguntas</h1>
          
            <div className="boxCard">
                {perguntas.map(e=>(
                         <div className="card">
                         <h1>{perguntas.map(e=>(
                            <>
                             <h1>{e.ask}</h1>
                                <h3>R: {e.res}</h3>
                             <p>Categoria: {e.categoria.length === 1 ?e.categoria : ''}</p>
                            </>
                         ))}</h1>
                     </div>
                    ))}
               
                
           

            </div>
        </BoxAsk>
     );
}
 
export default Ask;
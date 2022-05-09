import React, { useRef, useState } from 'react'
import { BasePerguntas } from './StyPerguntas'
import boxAsk from '../../../assets/Asks/boxAsk.svg'



export default function Perguntas() {
    
    const [topY, setTopY]=useState('100')
    let imgAskCorrect = useRef<HTMLImageElement>(null)
    


    function AskStyles (){
        setTopY('85px')
        
    }

    function respostaPerguntas(valor: number){

        switch(valor){
            case 0:
            return  AskStyles()
            

            case 1:
            return alert('errou')
            case 2: 
            return alert('errou')
        }
    }
    return (
   <BasePerguntas>
    <img style={{bottom: topY}}
     ref={imgAskCorrect} onClick={()=>respostaPerguntas(0)} src={boxAsk} alt="caixa de resposta" />
    <img onClick={()=>respostaPerguntas(1)} src={boxAsk} alt="caixa de resposta" />
    <img onClick={()=>respostaPerguntas(2)} src={boxAsk} alt="caixa de resposta" />
   </BasePerguntas>
  )
}

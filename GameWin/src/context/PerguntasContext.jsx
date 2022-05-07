import { createContext, useContext, useState } from "react";



export const PerguntasContext = createContext()




export const AppPerguntasProvider =({children})=>{
    
    const ask =[
        {
            id: 1,
            ask: 'O que é',
            res: ['é nao sei oq'],
            categoria: ['JavaScript']
            
        }

    ]
    const [perguntas, setPerguntas]=useState(ask)

    console.log(perguntas)

    return(
        <PerguntasContext.Provider value={{perguntas}}>
            {children}
        </PerguntasContext.Provider>
    )
}

export const usePerguntasHook =()=>{
    const context = useContext(PerguntasContext)
    return context
}
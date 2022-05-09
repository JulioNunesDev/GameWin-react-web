import React, { createContext, ReactNode, useState } from "react";

interface IPropsBank {
    esmeraldaCount: number;
    goldCount: number;
    moedaCount: number;
}

type UserContextProps = {
children: ReactNode
}


export const Bank = createContext({} as IPropsBank)

export const AppBankProvider= ({children}:UserContextProps)=>{
    const [goldCount,setGoldCount]=useState(0)
    const [esmeraldaCount,setEsmeraldaCount]=useState(0)
    const [moedaCount,setMoedaCount]=useState(0)
    return(
        <Bank.Provider value={{goldCount, esmeraldaCount, moedaCount}}>
            {children}
        </Bank.Provider>
    )

}


import { useContext } from "react";
import { Bank } from "../contexts/usebank";


export default function useBank(){
    const context = useContext(Bank)
    return context
}
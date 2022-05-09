import { useContext } from "react";
import { usePlContext } from "../contexts/usePluginModal";



export default function usePlugin(){
    const context = useContext(usePlContext)
    return context
}
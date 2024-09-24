import { useContext,createContext,useState } from "react";
const useContext=createContext()
const Provider=({children})=>{
    const [data,setData]=useState([])

    return(
        <>
        <useContext.Provider value={{data,setData}}>
            {children}

        </useContext.Provider>
        </>
    )

}
export  {useContext,Provider}
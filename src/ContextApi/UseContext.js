import { useContext,createContext,useState } from "react";
const UseContext=createContext()
const DataProvider=({children})=>{
    const [data,setData]=useState([])

    return(
        <>
        <UseContext.Provider value={{data,setData}}>
            {children}

        </UseContext.Provider>
        </>
    )

}
export  {UseContext,DataProvider}
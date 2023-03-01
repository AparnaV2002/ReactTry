import React from 'react'
import { useState, createContext, useContext } from "react";
import {a} from './App'
function D(){
    // const[count,setCount]=useState(0)
    const x= useContext(a)
    return(
        <div>
            <button onClick={() => x("inc")}>INC</button>
            <button onClick={() => x("dec")}>DEC</button>
            <button onClick={() => x("reset")}>RESET</button>
        </div>
    )
}
export default D


import React from "react";
import { useState } from "react";


function C(){
    const [a,setA]= useState()
   

    const Submit = (e)=>{
        alert(`${a}`)
       
    }
    return(
        <form onSubmit={Submit}>
            <div>
                <input type="text" onChange={(e)=>setA(e.target.value)}></input>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}
export default C;
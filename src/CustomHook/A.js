import React, {useState} from 'react'
import useCount from './B'

function A(){
    // for passing only start value
    // const [count1,inc1,dec1,reset1] = useCount(0)
    // const [count2,inc2,dec2,reset2] = useCount(10)
   
    //for passing 2 values:
    const [count1,inc1,dec1,reset1] = useCount(0,5)
    const [count2,inc2,dec2,reset2] = useCount(10,5)
    return(
        <div>
            Count1 - {count1}
            <button onClick={inc1}>Inc </button>
            <button onClick={dec1}>Dec</button>
            <button onClick={reset1}>Reset </button>

            Count2 - {count2}
            <button onClick={inc2}>Inc </button>
            <button onClick={dec2}>Dec</button>
            <button onClick={reset2}>Reset </button>
        </div>
    )
}
export default A;
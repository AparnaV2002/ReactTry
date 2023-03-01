import React, { useState,useMemo } from "react";

function A(){
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)

    const count1fn =() =>{
        setCount1(count1+1)
    }

    const count2fn = () =>{
        setCount2(count2+1)
    }
    const iseven = useMemo(()=>{
        var i=0
        while(i<100000000){i++}
        return count1 %2 ===0

    },[count1])
    return(
        <div>
            <button onClick={count1fn}>Clicked {count1} times </button>
            <p>{iseven?"Even":"Odd"}</p>
            <button onClick={count2fn}>Clicked {count2} times </button>
    
        </div>
    )
}
export default A;
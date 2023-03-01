import React, { useState } from "react";

function useCount(init,incval){
    const [count,setCount]=useState(init)
    const inc=()=>setCount(count+incval)
    const dec=()=>setCount(count-incval)
    const reset = () => setCount(0)
    return [count,inc,dec,reset]
}
export default useCount;
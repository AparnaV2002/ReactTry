import React, {useEffect,useState,useRef} from 'react';


function A(){
const [count, setCount] = useState(0)
const intervalref = useRef(null)
useEffect(()=>{
    intervalref.current = setInterval(()=>{
        setCount(count+1)
    },1000)
    return()=>{
        clearInterval(intervalref.current)
    }
})
return(
    <div>
    Count - {count}
    <button onClick={()=> clearInterval(intervalref.current)}>Stop</button>
    </div>
)
}

export default A
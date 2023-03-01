import React, {useState} from 'react'
import useDocTitle from './B'

function A(){
    const [count,setCount] = useState(0)
    useDocTitle(count)
    return(
        <div>
            Count - {count}
            <button onClick={()=>setCount(count+1)}> Inc </button>
        </div>
    )
}
export default A;
import React, {useRef, useEffect} from 'react'

function Demo(){
    const inref = useRef(null)
    useEffect(()=>{
        inref.current.focus()
    })

    return(
        <div>
            <input ref={inref}/>
        </div>
    )
}
export default Demo;
import React, {useState} from 'react'
function useFormInp(init){
    const [a,setA]=useState(init)
    const inpAttr={
        value : a,
        onChange: (e)=> setA(e.target.value)
    }
    return [a,inpAttr]
}
export default useFormInp

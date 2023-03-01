import React from "react";
import useFormInp from './B';

function A(){
    const [a,attr]= useFormInp("")
    const [b,attr2]=useFormInp("abc")

    const submit = (e)=>{
        alert(`${a} and ${b}`)
        e.preventDefault()
    }
    return(
        <form onSubmit={submit}>
            <div>
                <input type="text" {...attr}/>
                <input type="text" {...attr2}/>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}
export default A;
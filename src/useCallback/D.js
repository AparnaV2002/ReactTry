import React from "react";
function D(props){
    console.log(props.children)
    return(
        <div>
            <button onClick={props.fn}>{props.children}</button>
        </div>
    )
}
export default React.memo(D);
import React from "react";

function B(){
    console.log("B coponent")
    return(
        <div>
            Welcome
        </div>
    )
}
export default React.memo(B);
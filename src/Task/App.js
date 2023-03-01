
import React, { useReducer } from 'react'
import A from './A'
import B from './B'
import C from './C'
import { createContext } from 'react'
export const a= React.createContext()
const intialstate = 0
const reducer = (state, action) => {
    switch (action) {
        case "inc":
            return state + 1
        case "dec":
            return state - 1
        case "reset":
            return intialstate
    }
}

function App(){
    const [count, dispatch] = useReducer(reducer, intialstate)
    return(
        <>
        {count}
        <a.Provider value={dispatch}>
                     <A/>
                    <B/>
                    <C/>
        </a.Provider>
        </>
    )
}
export default App

import React from 'react'
import { useState, useEffect } from 'react'

export default function Count() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        })
    }, 100000)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => { (count < 15) && (setCount(count + 1)) }}>+</button>
            <button onClick={() => { (count > 0) && (setCount(count - 1)) }}>-</button>
        </>
    )
}

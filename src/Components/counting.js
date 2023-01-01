import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Increment, Decrement } from "../Action/index.js"
function Counting() {
    const dispatch = useDispatch()
    const myData = useSelector((state) => state.Reducer)
    return (
        <>
            <div className="container">
                <h1>counting</h1>
                <button type="button" className="anchor" onClick={() => dispatch(Decrement())} >-</button>
                <input type="text" className="input" value={myData} />
                <button type="button" className="anchor" onClick={() => dispatch(Increment())}>+</button>
            </div>
        </>
    )
}

export default Counting
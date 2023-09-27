import React from "react"

export default function CounterPractice() {
 
    function Add(){
        setCount(prevCount => prevCount+1)
    }
    function Substract(){
        setCount(prevCount=> prevCount-1)
    }
     const [count, setCount] = React.useState(0)
    return (
        <div className="counter">
            <button className="counter--minus" onClick={Substract}>–</button>
            <div className="counter--count">
                <h1>{count }</h1>
            </div>
            <button className="counter--plus" onClick={Add}>+</button>
        </div>
    )
}

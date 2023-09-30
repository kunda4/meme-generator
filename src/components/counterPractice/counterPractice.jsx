import React from "react"
import Count from "./count"
export default function CounterPractice() {

     const [count, setCount] = React.useState(0)
     function Add(){
        setCount(prevCount => prevCount+1)
    }
    function Substract(){
        setCount(prevCount=> prevCount-1)
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={Substract}>–</button>
            <Count number={count}/>
            <button className="counter--plus" onClick={Add}>+</button>
        </div>
    )
}

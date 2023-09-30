import React from "react"

export default function ChangeState() {
    const [isImportant, setIsIpmortant] = React.useState("Yes")
   function handleClick(){
    setIsIpmortant("No")
   }
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
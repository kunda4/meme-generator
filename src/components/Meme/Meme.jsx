import React, { useState } from "react"
import memesData from "../../memesData"

let url 
export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        //  url = memesArray[randomNumber].url
        // console.log(url)
        setMemeImage(memesArray[randomNumber].url)
    }
    const [inputData, setInputData] = useState({
        topText:"",
        bottomText:"",
    })
    const HandleChange = (event) => {
        const {name, value} = event.target

        setInputData(prevData => ({
            ...prevData,
            [name]: value
        }))

    }
    return (
        <main>
            <p>{url}</p>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={HandleChange}
                    value={inputData.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={HandleChange}
                    value={inputData.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <h2 className="meme--text top">{inputData.topText}</h2>
                <img src={memeImage} className="meme--image" />
                <h2 className="meme--text bottom">{inputData.bottomText}</h2>
            </div>
        </main>
    )
}
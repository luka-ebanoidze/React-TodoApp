import { useState } from "react"
import './Title.css'

export function Title ({editing, title}) {
    const [isDone, setIsDone] = useState(false)
    const [inputValue, setInputValue] = useState(title)

    const colorChange = (e) => {
        if(!isDone && !editing) {
          e.currentTarget.style.backgroundColor = 'green'
        } else {
          e.currentTarget.style.backgroundColor = ''
        }
      }

    return <div className="title" onClick={(e)=>{setIsDone(!isDone); colorChange(e)}}>{editing ? <input value={inputValue} onChange={(e)=> {setInputValue(e.target.value)}} ></input> : <p>{inputValue}</p>}</div>
}

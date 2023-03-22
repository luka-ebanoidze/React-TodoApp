import { useState } from "react";
import './Todo.css'

export function Todo({ title, handleRemove, id}) {

    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState(title)

  return (
    <div className="todo">
      <div className="title">{isEditing ? <input placeholder="axali" onChange={(e) => setInputValue(e.target.value)}/> : <p>{inputValue}</p>}</div>
      <div className="buttons">
        <button onClick={() => handleRemove(title, id)}>remove</button>
        <button onClick={() => {setIsEditing(!isEditing)}}>{isEditing ? 'save' : 'edit'}</button>    
      </div>
    </div>
  );
}


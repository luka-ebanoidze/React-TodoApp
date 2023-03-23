import { useState } from "react";
import './Todo.css'

import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'


export function Todo({ title, handleRemove, id, handleEdit}) {
  const colorChange = (e) => {
    if(!isDone && !isEditing) {
      e.currentTarget.style.backgroundColor = 'green'
    } else {
      e.currentTarget.style.backgroundColor = ''
    }
  }

    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState(title)
    const [isDone, setIsDone] = useState(false)

  return (
    <div className="todo">
      <div className='title' onClick={(e)=> {setIsDone(!isDone); colorChange(e)}}>{isEditing ? <input value={inputValue} placeholder="Edit Title" onChange={(e) => {setInputValue(e.target.value)}} /> : <p>{inputValue}</p>}</div>
      <div className="buttons">
        <button className="remove-btn" onClick={() => handleRemove(title, id)}><AiFillDelete /></button>
        {isEditing ? <button className="save-btn" onClick={() => {setIsEditing(!isEditing); handleEdit(id)}} ><TiTick /></button> : <button className="edit-btn" onClick={() => {setIsEditing(!isEditing);}}><AiFillEdit /></button>}
      </div>
    </div>
  );
}



import { useState } from "react";
import './Todo.css'

import { Title } from "./Title/Title";
import { Button } from "./Button/Button";


export function Todo({ title, handleRemove, id, handleEdit}) {

  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="todo">
      <Title title={title} editing={isEditing}></Title>
      <div className="buttons">
        <Button type={'remove'}  remove={handleRemove} id={id} />
        {isEditing ? <Button type={'save'} edit={handleEdit} setEdit={setIsEditing} id={id} /> : <Button type={'edit'} setEdit={setIsEditing} id={id} />}
      </div>
    </div>
  );
}



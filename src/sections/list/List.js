import { Todo } from "../../componenets/Todo/Todo"

import './List.css'

export function List ({todos, handleRemove, handleEdit}) {

    return (
        <div className="todo__list">
            {todos.map((todo) => {
            return (
              <Todo title={todo.title} id={todo.id} key={todo.id} handleRemove={handleRemove} handleEdit={handleEdit} />
            );
          })}
        </div>
    )
}
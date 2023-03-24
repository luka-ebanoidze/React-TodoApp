import './Form.css'

export function Form ({handleSubmit, setcurrentTodo, currentTodo}) {
    return (
        <form name="create-todo" className="todoform" onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentTodo}
          placeholder="Todo title"
          onChange={(e) => setcurrentTodo(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
    )
}
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import { Todo } from "./componenets/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setcurrentTodo] = useState("");

  useEffect(()=> {
  axios.get('https://jsonplaceholder.typicode.com/todos',{
    params: {
      _limit: 50
    }
  })
  .then((res) => {
    setTodos(res.data)
    console.log(res.data);
  })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => {
      return [...prev, { title: currentTodo, id : todos.length, completed : false}];
    });

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      id : todos.length,
      title : currentTodo,
      completed : false
    }).then((res) => {
      console.log(res);
    })

    setcurrentTodo("");
    };

    const handleRemove = (title, id) => {
      const new_todos = todos.filter((todo) => todo.title !== title)
      setTodos(new_todos)

      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => {console.log(res)})
    }

  return (
    <div className="App">
      <form name="create-todo" className="todoform" onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentTodo}
          placeholder="Todo title"
          onChange={(e) => setcurrentTodo(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
        {todos.map((todo) => {
          return <Todo key={todo.title} id={todo.id} title={todo.title} handleRemove={handleRemove} />;
        })}
    </div>
  );
}

export default App;

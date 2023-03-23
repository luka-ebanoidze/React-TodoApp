import { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Todo } from "./componenets/Todo";

function App() {
  const errorToast = (text) => {
    toast.error(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };

  const addToast = () => {
    toast.success('Successfully added', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const editToast = () => {
      toast.info('Successfully edited', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const [todos, setTodos] = useState([]);
  const [currentTodo, setcurrentTodo] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _limit: 50,
        },
      })
      .then((res) => {
        setTodos(res.data);
        console.log(res.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentTodo !== '') {
      setTodos((prev) => {
        return [
          ...prev,
          { title: currentTodo, id: todos.length + 1, completed: false },
        ];
      });
      axios.post("https://jsonplaceholder.typicode.com/todos", {
        id: todos.length + 1,
        title: currentTodo,
        completed: false,
      })
      .then((res) => {
        console.log(currentTodo);
        addToast()
        console.log(res);
      });

      setcurrentTodo("");

    } else errorToast('Type Something');
  };

  const handleRemove = (title, id) => {
    const new_todos = todos.filter((todo) => todo.title !== title);
    setTodos(new_todos);
 
     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        errorToast('Successfully removed')
        console.log(res);
      });
  };

  const handleEdit = (id) => {
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => {
      editToast()
      console.log(res);
    })
  }

  return (
    <div className="App">
      <div>
        <ToastContainer />
      </div>
      <form name="create-todo" className="todoform" onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentTodo}
          placeholder="Todo title"
          onChange={(e) => setcurrentTodo(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
      <main className="todos-block">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.title}
            id={todo.id}
            title={todo.title}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
          />
        );
      })}
      </main>
      
    </div>
  );
}

export default App;

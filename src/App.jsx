import { useState } from "react";

import "./App.css";

function App() {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);

  function handleInput(e) {
    setTodo({ value: e.target.value, isCompleted: false });
    console.log("***********", todo);
  }

  function handleSubmit() {
    if (todo.value == "") {
      alert("Please fill the input");
    } else {
      setTodos([...todos, todo]);
      setTodo({ value: "" });
    }
  }

  function handleClear() {
    setTodos([]);
  }

  function handleDelete(i) {
    const filtered = todos.filter((_, index) => {
      return index != i;
    });
    setTodos(filtered);
  }

  function handleEdit(index) {
    console.log("Edit ###", todos[index].value);
    setTodo({ value: todos[index].value });
    handleDelete(index);
  }

  function handleComplete(i) {
    const output = todos.map((item, index) => {
      if (i === index) {
        return { ...item, isCompleted: !item.isCompleted };
      } else {
        return item;
      }
    });
    setTodos(output);

    console.log("output  ", output);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Todo List</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={todo.value}
        className="border border-black p-3 m-3 focus"
        onChange={(e) => {
          handleInput(e);
        }}
      ></input>

      <button
        className="border rounded-sm p-2 m-2 bg-purple-500 text-white"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
      <button
        className="border rounded-sm p-2 m-2 bg-purple-500 text-white"
        onClick={() => {
          handleClear();
        }}
      >
        Clear
      </button>
      <div className="p-2 m-2 bg-purple-500 w-100vh h-100vh">
        <div className="p-2 m-2 bg-purple-300 w-100vh h-100vh">
          {todos.length > 0 ? (
            todos.map((element, index) => {
              return (
                <div className="flex">
                  <li
                    key={index}
                    className="p-2 m-2 bg-purple-100 decoration-white list-none text-center w-3/4"
                    placeholder="empty list"
                  >
                    {console.log(element.isCompleted)}
                    {element.isCompleted ? (
                      <div className="line-through">{element.value}</div>
                    ) : (
                      <div>{element.value}</div>
                    )}
                  </li>
                  <button
                    className="border rounded-sm p-2 m-2 bg-purple-500 text-white"
                    onClick={() => {
                      handleEdit(index);
                    }}
                  >
                    {" "}
                    Edit
                  </button>
                  <button
                    className="border rounded-sm p-2 m-2 bg-purple-500 text-white"
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    {" "}
                    Delete
                  </button>
                  <button
                    className="border rounded-sm p-2 m-2 bg-purple-500 text-white"
                    onClick={() => {
                      handleComplete(index);
                    }}
                  >
                    {" "}
                    {element.isCompleted ? "Undo" : "Mark as done"}
                  </button>
                </div>
              );
            })
          ) : (
            <h3>Please add your todos</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

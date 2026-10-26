
import { useLocalStorage } from "./useLocalStorage";
import {AppUI} from './AppUI';
import React from "react";

// const defaultTodos = [
//   { text: "Morder mollete", completed: false },
//   { text: "Morder cachetitos", completed: true },
//   { text: "Morder lokit", completed: false },
// ];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const {item: todos, saveItem: saveTodo, loading, error} = useLocalStorage("TODOS_V1", []);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodoList = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase()),
  );

  function addTodo(_) {
    const newTodo = [
      {
        text: searchValue,
        completed: false,
      },
      ...todos,
    ];
    saveTodo(newTodo);
    setSearchValue("");
  }

  function completeTask(todo) {
    const newTodo = todos.map((x) =>
      x === todo ? { ...x, completed: !x.completed } : x,
    );
    saveTodo(newTodo);
  }

  function deleteTask(todo) {
    const newTodo = todos.filter((x) => x !== todo);
    saveTodo(newTodo);
  }

  console.log(searchValue);

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      addTodo={addTodo}
      filteredTodoList={filteredTodoList}
      completeTask={completeTask}
      deleteTask={deleteTask}
      error={error}
      loading={loading}
    />
  );
}

export default App;

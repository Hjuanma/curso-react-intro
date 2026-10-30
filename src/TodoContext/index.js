import React, { Children } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = React.useState("");
  const {
    item: todos,
    saveItem: saveTodo,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodoList = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const addTodo = ( ) => {
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

  const completeTask = (todo) => {
    const newTodo = todos.map((x) =>
      x === todo ? { ...x, completed: !x.completed } : x,
    );
    saveTodo(newTodo);
  }

  const deleteTask = (todo) =>{
    const newTodo = todos.filter((x) => x !== todo);
    saveTodo(newTodo);
  }

  return (<TodoContext.Provider value={{
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    filteredTodoList,
    completeTask,
    deleteTask,
    loading, 
    error
  }}>{children}</TodoContext.Provider>);
}

function TodoConsumer() {
    <TodoContext.Consumer/>
}

export {TodoContext, TodoProvider, TodoConsumer};
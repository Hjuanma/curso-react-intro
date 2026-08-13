import logo from "./platzi.webp";
import { TodoCounter } from "./TodoCounter";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoBtn } from "./CreateTodoBtn";
import React from "react";

const defaultTodos = [
  { text: "Morder mollete", completed: false },
  { text: "Morder cachetitos", completed: true },
  { text: "Morder lokit", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter((todo) => (todo.completed)).length;
  const totalTodos = todos.length;

  const filteredTodoList = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase()),
  );

  console.log(searchValue);
  return (
    <>
      <TodoCounter done={completedTodos} total={totalTodos} />
      <TodoInput searchValue={searchValue} setSearchValue={setSearchValue} />

      <CreateTodoBtn />

      <TodoList>
        {filteredTodoList.map((todo) => (
          <TodoItem text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
    </>
  );
}

export default App;

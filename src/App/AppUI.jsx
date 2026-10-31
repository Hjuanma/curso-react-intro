import React from "react";

import { TodoCounter } from "../TodoCounter";
import { Modal } from "../Modal";
import { TodoInput } from "../TodoInput";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { EmptyTodoList } from "../EmptyTodoList";
import { CreateTodoBtn } from "../CreateTodo";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    loading,
    error,
    filteredTodoList,
    completeTask,
    deleteTask,
    openModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoInput />

      <CreateTodoBtn />

      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {!loading && filteredTodoList.length === 0 && <EmptyTodoList />}
        {filteredTodoList.map((todo) => (
          <TodoItem
            key={todo.text}
            onComplete={() => completeTask(todo)}
            onDelete={() => deleteTask(todo)}
            todo={todo}
          />
        ))}
      </TodoList>

      {openModal && <Modal><TodoForm/></Modal>}
    </>
  );
}

export { AppUI };

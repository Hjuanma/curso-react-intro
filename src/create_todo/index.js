import React from 'react';
import './CreateTodoBtn.css'
import { TodoContext } from '../TodoContext';

function CreateTodoBtn() {
  const { openAddTodo } = React.useContext(TodoContext);

  return (
    <button className="CreateTodoButton" onClick={openAddTodo}>
      +
    </button>
  );
}

export {CreateTodoBtn};
import React from 'react';
import './CreateTodo.css'
import { TodoContext } from '../TodoContext';

function CreateTodoBtn() {
  const { openTodoForm } = React.useContext(TodoContext);

  return (
    <button className="CreateTodoButton" onClick={openTodoForm}>
      +
    </button>
  );
}

export {CreateTodoBtn};

import React from 'react';
import "./TodoItem.css";
import PropTypes from 'prop-types';
import {CheckIcon} from '../CheckIcon';
import {DeleteIcon} from '../DeleteIcon';


function TodoItem({ onComplete, todo, onDelete }) {
  return (
    <li className="TodoItem">
      <CheckIcon
        className={`Icon Icon-check ${todo.completed && "Icon-check--active"}`}
        onClick={onComplete}
        completed={todo.completed}
      />

      <p className={`TodoItem-p ${todo.completed && "TodoItem-p--complete"}`}>
        {todo.text}
      </p>

      <DeleteIcon onClick={onDelete} />
    </li>
  );
}

TodoItem.propTypes = {
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export { TodoItem };

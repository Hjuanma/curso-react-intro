import "./TodoItem.css";
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

export { TodoItem };

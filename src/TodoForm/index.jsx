import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
	const [newTodoText, setNewTodoText] = React.useState("");

	const { openTodoForm, addTodo } = React.useContext(TodoContext);

	const onSubmit = (event) => {
		event.preventDefault();

		addTodo(newTodoText);

		openTodoForm();
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu TODO</label>
			<textarea
				onChange={(event) => {
					setNewTodoText(event.target.value);
				}}
			/>
			<div className="TodoForm-btnContainer">
				<button
					type="button"
					onClick={openTodoForm}
					className="TodoForm-btn TodoForm-btn--cancel"
				>
					Cancel
				</button>
				<button className="TodoForm-btn TodoForm-btn--add">Add</button>
			</div>
		</form>
	);
}

export { TodoForm };

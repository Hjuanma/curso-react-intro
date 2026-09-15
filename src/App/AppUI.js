import { TodoCounter } from "../TodoCounter";
import { TodoInput } from "../TodoInput";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoBtn } from "../create_todo";

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  addTodo,
  filteredTodoList,
  completeTask,
  deleteTask,
}) {
  return (
    <>
      <TodoCounter done={completedTodos} total={totalTodos} />
      <TodoInput searchValue={searchValue} setSearchValue={setSearchValue} />

      <CreateTodoBtn addTodo={addTodo} />

      <TodoList>
        {filteredTodoList.map((todo) => (
          <TodoItem
            onComplete={() => completeTask(todo)}
            onDelete={() => deleteTask(todo)}
            todo={todo}
          />
        ))}
      </TodoList>
    </>
  );
}

export {AppUI};
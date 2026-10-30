import { TodoCounter } from "../TodoCounter";
import { TodoInput } from "../TodoInput";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { EmptyTodoList } from "../EmptyTodoList";
import { CreateTodoBtn } from "../create_todo";
import { TodoContext } from "../TodoContext";



function AppUI() {
  return (
    <>
      <TodoCounter />
      <TodoInput />

      <CreateTodoBtn />

      <TodoContext.Consumer>
        {({ loading, error, filteredTodoList, completeTask, deleteTask }) => (
          <TodoList>
            {loading && <TodoLoading />}
            {error && <TodoError />}
            {!loading && filteredTodoList.length === 0 && <EmptyTodoList />}
            {filteredTodoList.map((todo) => (
              <TodoItem
                onComplete={() => completeTask(todo)}
                onDelete={() => deleteTask(todo)}
                todo={todo}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>
    </>
  );
}

export {AppUI};
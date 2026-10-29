import "./TodoLoading.css";

function TodoLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon" />
      <p className="LoadingTodo-Text" />
      <span className="LoadingTodo-deleteIcon" />
    </div>
  );
}

export { TodoLoading };

import { FC, useEffect } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";

const pages = [1, 2, 3, 4, 5];

const TodoList: FC = () => {
  const { loading, todos, error, page, limit } = useTypeSelector(
    (state) => state.todo
  );

  const { fetchTodos, setTodoPage } = useActions();
  useEffect(() => {
    fetchTodos(page, 10);
  }, [page]);

  console.log(todos);

  if (loading) {
    return <div>зашрущка</div>;
  }
  return (
    <div>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
      {pages.map((p) => (
        <button
          onClick={() => setTodoPage(p)}
          style={{ background: p === page ? "red" : "green" }}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default TodoList;

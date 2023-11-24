import { useDispatch, useSelector } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
<>
  <div className="font-bold mt-6">My task list</div>

  <ul className="max-w-md w-full mx-auto">
    {todos.map((todo) => (
      <li
        className="mt-4 border-2 border-gray-500 px-4 py-2 rounded"
        key={todo.id}
      >
        <div className="flex justify-between items-center">
          <span>{todo.text}</span>
          <div className="flex space-x-2">
            <button
              onClick={() => dispatch(editTodo(todo.id))}
              className="text-white bg-gray-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md ml-4"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Remove
            </button>
          </div>
        </div>
      </li>
    ))}
  </ul>
</>

  );
}

export default Todos;

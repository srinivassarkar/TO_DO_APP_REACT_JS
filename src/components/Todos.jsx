import { useDispatch, useSelector } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function Todos() {
  const [editingTodo, setEditingTodo] = useState(null);
  const [editText, setEditText] = useState("");
  const [checkedTasks, setCheckedTasks] = useState([]);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleEditSubmit(event, todo) {
    event.preventDefault();
    dispatch(editTodo({ ...todo, text: editText }));
    setEditingTodo(null);
    setEditText("");
  }

  function handleEditClick(todo) {
    setEditText(todo.text);
    setEditingTodo(todo);
  }

  function handleCheckboxChange(todo) {
    const updatedCheckedTasks = checkedTasks.includes(todo.id)
      ? checkedTasks.filter((taskId) => taskId !== todo.id)
      : [...checkedTasks, todo.id];

    setCheckedTasks(updatedCheckedTasks);
  }

  return (
    <div className="max-w-md mx-auto mt-6">
      <div className="font-bold text-center mb-4">My Task List</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mb-4">
            <div className="p-4 rounded shadow-md flex items-center">
              <input
                type="checkbox"
                checked={checkedTasks.includes(todo.id)}
                onChange={() => handleCheckboxChange(todo)}
                className="mr-2"
              />
              {editingTodo && editingTodo.id === todo.id ? (
                <form onSubmit={(e) => handleEditSubmit(e, todo)} className="flex items-center">
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="text-black border rounded px-2 py-1 mr-2"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <div className="flex items-center">
                  <span className={checkedTasks.includes(todo.id) ? "line-through text-gray-500" : "mr-2"}>
                    {todo.text}
                  </span>
                  <button
                    onClick={() => handleEditClick(todo)}
                    className="bg-gray-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;

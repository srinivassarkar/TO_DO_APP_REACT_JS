import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    
    <div className="mt-8 w-full max-w-md">
      <div className="text-xl font-bold mb-4">Add a new task</div>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-500 rounded text-black"
        />
        <button
        type="submit"
          onClick={addTodoHandler}
          className="text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTodo;

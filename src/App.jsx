import Todos from "./components/Todos";
import AddTodo from "./components/addTodo";


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-2">TODO APP</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;


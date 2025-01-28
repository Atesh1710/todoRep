// App.js
import  { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/todos");
            setTodos(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const addTask = async (task) => {
        try {
            const response = await axios.post("http://localhost:3000/api/todos", { task });
            setTodos([...todos, response.data]);
        } catch (err) {
            console.error(err);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/todos/${id}`);
            setTodos(todos.filter((todo) => todo._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Todo App</h1>
            <TodoForm addTask={addTask} />
            <TodoList todos={todos} deleteTask={deleteTask} />
        </div>
    );
};

export default App;

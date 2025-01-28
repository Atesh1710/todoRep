// components/TodoForm.js
import { useState } from "react";

const TodoForm = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            addTask(task);
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="border px-2 py-1 rounded"
            />
            <button type="submit" className="px-4 py-1 bg-blue-500 text-white rounded">
                +
            </button>
        </form>
    );
};

export default TodoForm;

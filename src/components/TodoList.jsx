const TodoList = ({ todos, deleteTask }) => {
    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <li key={todo._id} className="flex justify-between items-center">
                    <span>{todo.task}</span>
                    <button
                        onClick={() => deleteTask(todo._id)}
                        className="text-red-500 hover:underline"
                    >
                        X
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;

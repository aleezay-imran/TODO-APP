const TodoItem = ({ todo, index, deleteTodo }) => {
    return (
        <div className="todo-item">
            <span>{todo}</span>
            <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
        </div>
    );
};

export default TodoItem;

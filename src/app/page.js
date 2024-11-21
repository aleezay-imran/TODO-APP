"use client"; // Add this at the very top of the file

import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function Home() {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        setTodos([...todos, task]);
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <h1>TODO App</h1>
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}


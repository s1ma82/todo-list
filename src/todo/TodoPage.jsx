import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./TodoPage-style.scss"

const TodoPage = () => {
    return (
        <div className="container">
            <TodoForm/>
            <TodoList/>
        </div>
    );
}

export default TodoPage;

import React from 'react';
import { useEffect} from 'react';
import { useDispatch, connect} from 'react-redux';
import { todo } from '../../redux/actions';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if(!localStorage.getItem("init")) return localStorage.clear()
        localStorage.setItem("init", "true")
        const data = localStorage.length !== 0 ? JSON.parse(localStorage.getItem('todos')) : ["todo"]
        dispatch(todo.enter({arr: data}))
    }, [dispatch])

    return todos.length !== 0 ? (
        <ul className="todolist">
            {todos.map(i => <TodoItem  params={i} key={`TodoID:${i.id}`}/>)}
        </ul>
    ) : <h1 className="nothing">Здесь пока ничего нет</h1>;
}
const mapStateToProps = state => ({todos: state.todo})

export default connect(mapStateToProps)(TodoList);

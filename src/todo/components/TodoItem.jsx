import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todo } from '../../redux/actions';

const TodoItem = ({params = false}) => {
    const dispatch = useDispatch()
    const [state, setState] = useState(params['completed'])
    if(!params) return <li className="todo__item danger">Некорректные данные</li>
    const {title, id} = params
    function clickHandler(e){
        const target = e.target.closest('li')
        if(!state){
            setState(true)
            console.log("id: " + id)
            dispatch(todo.complete({id}))
            return
        }
        target.classList.add("delete")
        dispatch(todo.delete({id}))
    }
    return (
        <li className={`todolist__item${state? " completed" : ""}`} onClick={e => clickHandler(e)}>
            <p className={`todolist__item_title`}>{title}</p>
        </li>
    );
}

export default TodoItem;

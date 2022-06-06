import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todo } from '../../redux/actions';


const TodoForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    function generateID(){
        return Date.now()
    }
    function submit(e){
        e.preventDefault()
        if(title.length < 3) return 
        generateID()
        setTitle("")
        dispatch(todo.submit({title, id: generateID()}))
    }
    return (
        <form className="todoform" onSubmit={e => submit(e)}>
            <input onChange={e => setTitle(e.target.value)} type="text" name='title' minLength="3" value={title}/>
            <input type="submit" value="Ввести"/>
        </form>
    );
}

export default TodoForm;

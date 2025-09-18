import '../App.css'
import { useState } from 'react';
import type { Todo } from '../types';
import TodoTable from './TodoTableComponent';

export default function TodoList() {

    const [todo, setTodo] = useState<Todo>({description: '', priority: 'low'}) // here we set one todo
    const [todos, setTodos] = useState<Todo[]>([]); // empty array where we set the todos

    const addTodo = () => {
        const desc = todo.description ? setTodos([todo, ...todos]) : alert("Description cannot be empty!") // created new constant so there is always something to return :D
        setTodo({...todo, description: ""}) // clears the input placeholder, sets todo description to empty
        return desc

    }
    const handleDelete = (indexToDelete: number) => {
            setTodos(todos.filter((_, index) => index !== indexToDelete));
    }    
    
    return(
        <>
        <h3>My todos</h3>
        <input
            placeholder='Enter description'
            onChange={event => setTodo({...todo, description: event.target.value})} // onChange we change the description, ...todo allows us to only set to description!
            value={todo.description}
        />
        <select 
            title='Priority'
            onChange={event => setTodo({...todo, priority: event.target.value as 'low'|'medium'|'high'})} // as is used here as a type assertation
        >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <button onClick={addTodo}>Add todo</button>
        <TodoTable todos={todos} handleDelete={handleDelete} />
        </>
    );
}
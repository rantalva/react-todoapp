import { useState } from 'react';
import type { Todo } from '../types';
import TodoTable from './TodoTableComponent';
import { Button, TextField, Stack } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

    const [todo, setTodo] = useState<Todo>({id: '', description: '', priority: 'low'}) // here we set one todo
    const [todos, setTodos] = useState<Todo[]>([]); // empty array where we set the todos
    const [descriptionError, setDescriptionError] = useState(false); // this is for the error text in textfield!

  const addTodo = () => {
    if (!todo.description) {
      setDescriptionError(true);
    } 
    else {
      setDescriptionError(false);
      setTodos([...todos, { ...todo, id: uuidv4()}]);
      setTodo({id: '', description: '', priority: 'low'});
    }
  };

    const handleDelete = (indexToDelete: number) => {
            setTodos(todos.filter((_, index) => index !== indexToDelete));
    }    
    
    return(
        <>
        <h3>My todos</h3>
        <Stack
            mt={2}
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
        >
            <TextField
                placeholder='Enter description'
                onChange={event => setTodo({...todo, description: event.target.value})} // onChange we change the description, ...todo allows us to only set to description!
                value={todo.description}
                required
                error={descriptionError}
                />
            <TextField
                label="Priority"
                select
                slotProps={{
                    select: {
                    native: true,
                    },
                }}
                onChange={event => setTodo({...todo, priority: event.target.value as 'low' | 'medium' | 'high'})} 
                value={todo.priority} 
                >
                <option key="low" value="low">Low</option>
                <option key="medium" value="medium">Medium</option>
                <option key="high" value="high">High</option>
            </TextField>
            <Button 
            variant='contained'
            size='large'
            onClick={addTodo}>
                Add todo
            </Button>
        </Stack>
        <TodoTable todos={todos} handleDelete={handleDelete} />
        </>
    );
}
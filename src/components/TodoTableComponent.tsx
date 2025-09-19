import type { TodoTableProps } from "../types";
import { Button, Stack } from '@mui/material';

export default function TodoTable(props: TodoTableProps) {
        // Define columns

    return(
        <>
        <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
        >
        <div>
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map((todo, index) => ( // map needs the object and a index
                    <tr key={index}>
                        <td>{todo.description}</td>
                        <td>{todo.priority}</td>
                        <td>
                            <Button 
                            variant="contained"
                            size="small"
                            color="error"
                            onClick={() => props.handleDelete(index)}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </Stack>
        </>
    );
}
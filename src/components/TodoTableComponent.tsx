import type { TodoTableProps } from "../types";
import { Button, Stack } from '@mui/material';
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import type { GridColDef, GridRowParams  } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoTable(props: TodoTableProps) {
        // Define columns
    const columns: GridColDef[] = [
        { 
            field: 'description',
            width: 300,
            headerName: 'Description' 
        },
        { 
            field: 'priority', 
            width: 150,
            headerName: 'Priority' 
        },
        { // deleting from Datagrid
            field: 'actions',
            type: 'actions',
            getActions: (params: GridRowParams) => [
                <GridActionsCellItem 
                icon={<DeleteIcon />}
                onClick={() => props.handleDelete(params.row.id)}
                label = "Delete"/>
            ]
        },
    ]
        

    return(
        <>
        <div style={{ height: 500, width: '60%', margin: 'auto'}}>
            <DataGrid rows={props.todos} columns={columns} />
        </div>
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
                            onClick={() => props.handleDelete(todo.id)}>
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
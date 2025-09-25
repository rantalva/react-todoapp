import { useEffect, useState } from "react";
import type { User, ApiResponse } from "../types";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from '@mui/x-data-grid';
import { fetchUsers } from "../customfunctions/userApi";

export default function UserList() {

    const [users, setUsers] = useState<User[]>([])
    const columns: GridColDef[] = [
        { 
            field: 'first_name',
            width: 300,
            headerName: 'First name' 
        },
        { 
            field: 'last_name', 
            width: 300,
            headerName: 'Last name' 
        },
        { 
            field: 'email', 
            width: 300,
            headerName: 'Email' 
        }
    ]

    useEffect(() => {
        fetchUsers()
        .then((responseData: ApiResponse) => {
            setUsers(responseData.data)
            console.log(responseData.data)
        })
        .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        console.log(users)
    }, [users])
    
    return(
        <>
        <h3>Users fetched</h3>
        <div style={{ height: 500, width: '60%', margin: 'auto'}}>
            <DataGrid rows={users} columns={columns} />
        </div>
        </>
    );
}
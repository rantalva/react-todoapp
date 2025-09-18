import type { TodoTableProps } from "../types";

export default function TodoTable(props: TodoTableProps) {
    return(
        <>
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
                            <button onClick={() => props.handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}
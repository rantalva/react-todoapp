export type Todo = {
    id: string,
    description: string;
    priority: 'low'|'medium'|'high';
}

export type TodoTableProps = {
    todos: Todo[];
    handleDelete: (row: number) => void;
}

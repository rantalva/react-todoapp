export type Todo = {
    description: string;
    priority: 'low'|'medium'|'high';
}

export type TodoTableProps = {
    todos: Todo[];
    handleDelete: (row: number) => void;
}
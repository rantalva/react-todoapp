export type Todo = {
    id: string,
    description: string;
    priority: 'low'|'medium'|'high';
}

export type TodoTableProps = {
    todos: Todo[];
    handleDelete: (id: string) => void;
}

export type ApodData = {
  copyright: string;
  date: string;
  explanation: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

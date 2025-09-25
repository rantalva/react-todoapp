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

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type ApiResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: {
    url: string;
    text: string;
  }
}
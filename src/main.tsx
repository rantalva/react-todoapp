import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createHashRouter } from 'react-router';
import About from './components/AboutComponent.tsx';
import RoutingError from './components/RoutingErrorComponent.tsx';
import TodoListComponent from './components/TodoListComponent'
import NasaFetch from './components/NasaFetchComponent.tsx';
import UserList from './components/UserListComponent.tsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RoutingError />,
    children: [
      {
        index: true,
        element: <TodoListComponent />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "nasa",
        element: <NasaFetch />
      },
      {
        path: "users",
        element: <UserList />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

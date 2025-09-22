import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import About from './components/AboutComponent.tsx';
import RoutingError from './components/RoutingErrorComponent.tsx';
import TodoListComponent from './components/TodoListComponent'
import NasaFetch from './components/NasaFetchComponent.tsx';

const router = createBrowserRouter([
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
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

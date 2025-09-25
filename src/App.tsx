import {Outlet} from 'react-router'
import HeaderComponent from './components/HeaderComponent'

function App() {

  return (
    <>
    <HeaderComponent />
    <Outlet />
    </>
  )
}

export default App

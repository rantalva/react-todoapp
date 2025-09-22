import {Link, Outlet} from 'react-router'
import HeaderComponent from './components/HeaderComponent'

function App() {

  return (
    <>
    <HeaderComponent />
    <nav>
      <Link to={"/"}>Todo app</Link>
      <Link to={"/about"}>About me</Link>
      <Link to={"/nasa"}>Nasa</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default App

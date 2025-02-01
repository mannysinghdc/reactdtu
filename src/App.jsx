import { Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"

const App = () => {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App

import { Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Rgb from "./Component/Color/Rgb"

const App = () => {


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App







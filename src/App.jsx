import { Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import ShimmerCard from "./Component/Recipe/ShimmerCard"


const App = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>

    </>
  )
}



export default App









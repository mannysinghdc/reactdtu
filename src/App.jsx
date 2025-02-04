import { Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"
import { lazy, useState } from "react"
const Lazy = lazy(() => import("./Component/Lazy")) 


const App = () => {

  return (
    <>

      <Navbar />
      <Outlet />
    </>
  )
}

export default App







import { Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"
import { useEffect, useState } from "react"
import Testing from "./Component/Testing"


const App = () => {


  return (
    <>
      <Navbar />
      {/* <Testing/> */}
      <Outlet />
    </>
  )
}

export default App







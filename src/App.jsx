import { Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"
import { useEffect, useState } from "react"
import Testing from "./Component/Testing"
import Today from "./Component/Today"


const App = () => {

  return (
    <>
      <Navbar />
      {/* <Today /> */}
      {/* <Testing/> */}
      <Outlet />

    </>
  )
}



export default App









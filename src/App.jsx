import { Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"
import { useEffect, useState } from "react"
import Testing from "./Component/Testing"


const App = () => {

 console.log(import.meta.env.VITE_NEWS_KEY)

  return (
    <>
      <Navbar />
      {/* <Testing/> */}
      <Outlet />
      
    </>
  )
}

export default App







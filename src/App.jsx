import { Outlet } from "react-router-dom" // Protected routes and suspense loader and dark/light mode & Lefting up state
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import { Suspense, useEffect, useState } from "react"
import Loader from "./Component/Loader.jsx/Loader"
import Protect from "./Component/Login/Protect"


const App = () => {
  // Store mode in state & sync with localStorage
  const [mode, setMode] = useState(() => JSON.parse(localStorage.getItem("isMode")) ?? false)

  // Toggle Mode
  const toggleMode = () => setMode(prevMode => !prevMode)

  useEffect(() => {
    localStorage.setItem("isMode", JSON.stringify(mode))
  }, [mode])

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Suspense fallback={<Loader />}>
        <Protect>
          <Outlet />
        </Protect>
      </Suspense>
      <Footer mode={mode}/>

    </>
  )
}



export default App









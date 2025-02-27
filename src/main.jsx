import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css'

import App from './App.jsx'
import Loader from './Component/Loader.jsx/Loader.jsx'
import Weather from './Component/Weather/Weather.jsx'



// Lazy-loaded components
const Home = lazy(() => import('./Component/Home.jsx'))
const Todo = lazy(() => import('./Component/Todo/Todo.jsx'))
const TodoJson = lazy(() => import('./Component/JSON/TodoFile.jsx'))
const Color = lazy(() => import('./Component/Color/Color.jsx'))
const Rgb = lazy(() => import('./Component/Color/Rgb.jsx'))
const Image = lazy(() => import('./Component/Image.jsx'))
const Watch = lazy(() => import('./Component/Watch/Watch.jsx'))
const SignUp = lazy(() => import('./Component/Login/SignUp.jsx'))
const Login = lazy(() => import('./Component/Login/Login.jsx'))
const NotPage = lazy(() => import('./Component/404.jsx'))
const Protect = lazy(() => import('./Component/Login/Protect.jsx'))
const TextCounter = lazy(() => import('./Component/TextCounter/TextCounter.jsx'))
const Recipe = lazy(() => import('./Component/Recipe/Recipe.jsx'))
const RecipeItem= lazy(()=>import('./Component/Recipe/RecipeItem.jsx')) 
const Todo2= lazy(()=>import('./Component/NewTodo/Todo2.jsx')) 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <Protect> <Suspense fallback={<Loader />}><NotPage /></Suspense></Protect>
      },
      {
        path: "/",
        element: <Protect> <Suspense fallback={<Loader />}><Home /></Suspense></Protect>
      },
      {
        path: "color",
        element: <Protect> <Suspense fallback={<Loader />}><Color /></Suspense></Protect>
      },
      {
        path: "mixcolor",
        element: <Protect> <Suspense fallback={<Loader />}><Rgb /></Suspense></Protect>
      },
      {
        path: "signUp",
        element: <Protect> <Suspense fallback={<Loader />}><SignUp /></Suspense></Protect>
      },
      {
        path: "login",
        element: <Protect> <Suspense fallback={<Loader />}><Login /></Suspense></Protect>
      },
      {
        path: "image",
        element: <Protect> <Suspense fallback={<Loader />}><Image /></Suspense></Protect>
      },
      {
        path: "clock",
        element: <Protect> <Suspense fallback={<Loader />}><Watch /></Suspense></Protect>
      },
      {
        path: "recipe",
        element: <Protect> <Suspense fallback={<Loader />}><Recipe /></Suspense></Protect>
      },
      {
        path: "recipe/:id",
        element: <Protect> <Suspense fallback={<Loader />}><RecipeItem/></Suspense></Protect>
      },
      {
        path: "todo",
        element: <Protect> <Suspense fallback={<Loader />}><Todo /></Suspense></Protect>
      },
      {
        path: "todo2",
        element: <Protect> <Suspense fallback={<Loader />}><Todo2 /></Suspense></Protect>
      },

      {
        path: "todofile",
        element: <Protect> <Suspense fallback={<Loader />}><TodoJson /></Suspense></Protect>
      },
      {
        path: "textcounter",
        element: <Protect> <Suspense fallback={<Loader />}><TextCounter /></Suspense></Protect>
      },
      {
        path: "weather",
        element: <Protect> <Suspense fallback={<Loader />}><Weather /></Suspense></Protect>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>
)

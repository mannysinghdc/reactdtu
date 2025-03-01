import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css'

import App from './App.jsx'
import Counter from './Component/Counter/Counter.jsx'
import Country from './Component/Country/Country.jsx'
import CountryDetail from './Component/Country/CountryDetail.jsx'

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
const TextCounter = lazy(() => import('./Component/TextCounter/TextCounter.jsx'))
const Recipe = lazy(() => import('./Component/Recipe/Recipe.jsx'))
const RecipeItem = lazy(() => import('./Component/Recipe/RecipeItem.jsx'))
const Todo2 = lazy(() => import('./Component/NewTodo/Todo2.jsx'))
const Weather = lazy(() => import('./Component/Weather/Weather.jsx'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <NotPage />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "color",
        element: <Color />
      },
      {
        path: "counter",
        element: <Counter/>
      },
      {
        path: "country",
        element: <Country/>
      },
      {
        path: "country/:name",
        element: <CountryDetail/>
      },
      {
        path: "mixcolor",
        element: <Rgb />
      },
      {
        path: "signUp",
        element: <SignUp />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "image",
        element: <Image />
      },
      {
        path: "clock",
        element: <Watch />
      },
      {
        path: "recipes",
        element: <Recipe />
      },
      {
        path:"/recipes/:id/:name?",
        element: <RecipeItem />
      },
      {
        path: "todo",
        element: <Todo />
      },
      {
        path: "todo2",
        element: <Todo2 />
      },

      {
        path: "todofile",
        element: <TodoJson />
      },
      {
        path: "textcounter",
        element: <TextCounter />
      },
      {
        path: "weather",
        element: <Weather />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

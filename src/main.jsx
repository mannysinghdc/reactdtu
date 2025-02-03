import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Todo from './Component/Todo/Todo.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import Social from './Component/Social/Social.jsx'
import PostList from './Component/Social/PostList.jsx'
import SocialContextProvider from './store/Social-Item.jsx'
import Image from './Component/Image.jsx'

import './index.css'
import Color from './Component/Color/Color.jsx'
import Watch from './Component/Watch/Watch.jsx'
import SignUp from './Component/Login/SignUp.jsx'
import Login from './Component/Login/Login.jsx'
import NotPage from './Component/404.jsx'
import Home from './Component/Home.jsx'
import Protect from './Component/Login/Protect.jsx'
import Rgb from './Component/Color/Rgb.jsx'

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
        element: <Protect><Home /></Protect>
      },
      {
        path: "color",
        element: <Color />
      },
      {
        path: "mixcolor",
        element:<Protect><Rgb /></Protect> 
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
        path: "social",
        element: <Protect><Social /></Protect>,
      },
      {
        path: "social/post",
        element: <Protect> <PostList /></Protect>

      },
      {
        path: "image",
        element: <Protect><Image /></Protect>

      },
      {
        path: "clock",
        element: <Protect><Watch /></Protect>
      },
      {
        path: "todo",
        element: <Protect> <Todo /></Protect>
      },

    ]

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocialContextProvider>
      <RouterProvider router={router} />
    </SocialContextProvider>
  </StrictMode>,
)

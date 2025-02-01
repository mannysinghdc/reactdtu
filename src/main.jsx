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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>home</h1>
      },
      {
        path: "todo",
        element: <Todo />
      },
      {
        path: "color",
        element: <Color />
      },
      {
        path: "social",
        element: <Social />,

      },
      {
        path: "social/post",
        element: <PostList />

      },
      {
        path: "image",
        element: <Image />

      },
      {
        path: "clock",
        element: <Watch />

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

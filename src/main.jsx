import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"


// Lazy-loaded components
const Home = lazy(() => import('./Component/Home.jsx'));
const Todo = lazy(() => import('./Component/Todo/Todo.jsx'));
const Social = lazy(() => import('./Component/Social/Social.jsx'));
const Color = lazy(() => import('./Component/Color/Color.jsx'));
const Rgb = lazy(() => import('./Component/Color/Rgb.jsx'));
const PostList = lazy(() => import('./Component/Social/PostList.jsx'));
const Image = lazy(() => import('./Component/Image.jsx'));
const Watch = lazy(() => import('./Component/Watch/Watch.jsx'));
const SignUp = lazy(() => import('./Component/Login/SignUp.jsx'));
const Login = lazy(() => import('./Component/Login/Login.jsx'));
const NotPage = lazy(() => import('./Component/404.jsx'));
const Protect = lazy(() => import('./Component/Login/Protect.jsx'));
const TextCounter = lazy(() => import('./Component/TextCounter/TextCounter.jsx'));
import './index.css'
import SocialContextProvider from './store/Social-Item.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <Protect> <Suspense fallback={"loading.."}><NotPage /></Suspense></Protect>
      },
      {
        path: "/",
        element: <Protect> <Suspense fallback={"loading.."}><Home /></Suspense></Protect>
      },
      {
        path: "color",
        element: <Protect> <Suspense fallback={"loading.."}><Color /></Suspense></Protect>
      },
      {
        path: "mixcolor",
        element: <Protect> <Suspense fallback={"loading.."}><Rgb /></Suspense></Protect>
      },
      {
        path: "signUp",
        element: <Protect> <Suspense fallback={"loading.."}><SignUp /></Suspense></Protect>
      },
      {
        path: "login",
        element: <Protect> <Suspense fallback={"loading.."}><Login /></Suspense></Protect>
      },
      {
        path: "social",
        element: <Protect> <Suspense fallback={"loading.."}><Social /></Suspense></Protect>
      },
      {
        path: "social/post",
        element: <Protect> <Suspense fallback={"loading.."}><PostList /></Suspense></Protect>

      },
      {
        path: "image",
        element: <Protect> <Suspense fallback={"loading.."}><Image /></Suspense></Protect>

      },
      {
        path: "clock",
        element: <Protect> <Suspense fallback={"loading.."}><Watch /></Suspense></Protect>
      },
      {
        path: "todo",
        element: <Protect> <Suspense fallback={"loading.."}><Todo /></Suspense></Protect>
      },
      {
        path: "textcounter",
        element: <Protect> <Suspense fallback={"loading.."}><TextCounter /></Suspense></Protect>
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

import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';

import App from './App.jsx';
import SocialContextProvider from './store/Social-Item.jsx';
import Loader from './Component/Loader.jsx/Loader.jsx';

// Lazy-loaded components
const Home = lazy(() => import('./Component/Home.jsx'));
const Todo = lazy(() => import('./Component/Todo/Todo.jsx'));
const TodoJson = lazy(() => import('./Component/JSON/TodoFile.jsx'))
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
const TextCounter = lazy(() => import('./Component/TextCounter/TextCounter.jsx')) 

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
        path: "social",
        element: <Protect> <Suspense fallback={<Loader />}><Social /></Suspense></Protect>
      },
      {
        path: "social/post",
        element: <Protect> <Suspense fallback={<Loader />}><PostList /></Suspense></Protect>
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
        path: "todo",
        element: <Protect> <Suspense fallback={<Loader />}><Todo /></Suspense></Protect>             
      },
      {
        path: "todofile",                                                                            
        element: <Protect> <Suspense fallback={<Loader />}><TodoJson /></Suspense></Protect>
      },
      {
        path: "textcounter",
        element: <Protect> <Suspense fallback={<Loader />}><TextCounter /></Suspense></Protect>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SocialContextProvider>
      {/* Wrap RouterProvider with Suspense */}
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </SocialContextProvider>
  </StrictMode>
);

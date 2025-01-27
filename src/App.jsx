import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/pages/user/login/Login";
import Register from "./components/pages/user/register/Register";
import Posts from "./components/pages/posts/posts"
import Videos from "./components/pages/posts/Videos";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "/",
          element: <Posts />
        },
        {
          path: "videos",
          element: <Videos />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

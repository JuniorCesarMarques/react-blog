import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/pages/user/Login";
import Register from "./components/pages/user/Register";
import Posts from "./components/pages/posts/posts"

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
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Layout from "./components/layout/Layout";
import Login from "./components/pages/user/login/Login";
import Register from "./components/pages/user/register/Register";
import Posts from "./components/pages/posts/posts"
import Videos from "./components/pages/posts/Videos";
import Store from "./components/pages/posts/Store";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";

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
        },
        {
          path: "store",
          element: <Store />
        },
        {
          path: "privacy-policy",
          element: <PrivacyPolicy />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Layout from "./components/layout/Layout";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import Posts from "./pages/posts/posts"
import Videos from "./pages/posts/videos/Videos";
import Store from "./pages/posts/Store";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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

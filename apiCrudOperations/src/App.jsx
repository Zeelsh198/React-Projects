import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { RootLayout } from "./Pages/RootLayout";
import { Insert } from "./Pages/Insert";
import { Details } from "./Pages/Details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />, // Login page as the initial route
    },
    {
      path: "/", // Main layout with Navbar
      element: <RootLayout />,
      children: [
        {
          path: "/home", // Path for Home
          element: <Home />,
        },
        {
          path: "/insert", // Path for Insert
          element: <Insert />, // For creating a new post
        },
        {
          path: "/insert/:id", // Path for editing an existing post
          element: <Insert />, // Reusing Insert component for updates
        },
        {
          path: "/details/:id", // Path for viewing details
          element: <Details />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

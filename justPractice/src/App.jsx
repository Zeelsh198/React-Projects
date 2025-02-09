import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import HomePage from "./pages/HomePage";
import { RootLayout } from "./pages/RootLayout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/homePage",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

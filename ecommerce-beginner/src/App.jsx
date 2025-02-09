import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/Shop-context"; // Import the ShopContextProvider
import { ProductDeetails } from "./pages/ProductDeetails";
import { ApiData } from "./pages/shop/ApiData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }, {
        path: "/apidata",
        element: <ApiData />,
      },
      {
        path: "/product/:id",
        element: <ProductDeetails/>
      }
    ],
  },
]);

function App() {
  return (
    <ShopContextProvider> 
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;

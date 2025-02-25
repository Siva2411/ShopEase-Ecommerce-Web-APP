import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Shop from "./Shop";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { loadProductByid } from "./component/routes/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const routes = createBrowserRouter([
  {
    path :"/",
    element:<ShopApplicationWrapper />,
    children: [
      {
        index:true,
        element:<Shop/>
      },
      {
        path: "/womens",
        element: <ProductListPage productCategoryType="WOMEN"/>
      },
      {
        path: "/mens",
        element: <ProductListPage productCategoryType="MEN"/>
      },
      {
        path: "/kids",
        element: <ProductListPage productCategoryType="KID"/>
      },
      {
        path: "/prouductDetail/:id",
        element: <ProductDetail/>,
        loader: loadProductByid
      }
    ]
  }
])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopApplicationWrapper />}>
          <Route index element={<Shop />} />
          <Route path="/womens" element={<ProductListPage productCategoryType={"WOMEN"}/>}></Route>
          <Route path="/mens" element={<ProductListPage productCategoryType={"MEN"}/>}></Route>
          <Route path="/kids" element={<ProductListPage productCategoryType={"KID"}/>}></Route>
          <Route path="/prouductDetail/:id" element={<ProductDetail/>} loader={loadProductByid}></Route>
        </Route>
      </Routes>
    </BrowserRouter> */}
    <RouterProvider router={routes}>

    </RouterProvider>
  </StrictMode>
);

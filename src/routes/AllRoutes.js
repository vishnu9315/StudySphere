import { Routes, Route } from "react-router-dom"
import { Homepage, ProductList, ProductDetails } from "../pages"

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "products" element = {<ProductList />} />
        <Route path = "products/:id" element = {<ProductDetails />} />
      </Routes>
    </>
  )
}



import { Routes, Route } from "react-router-dom"
import { Homepage, ProductList, ProductDetails, Login, Register, CartPage } from "../pages"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "products" element = {<ProductList />} />
        <Route path = "products/:id" element = {<ProductDetails />} />
        <Route path = "login" element = {<Login />} />
        <Route path = "register" element = {<Register />} />
        <Route path = "cart" element = {<ProtectedRoutes > <CartPage /></ProtectedRoutes>} />

      </Routes>
    </>
  )
}



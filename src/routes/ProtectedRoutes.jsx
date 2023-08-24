import React from 'react'
import { Navigate } from 'react-router-dom'

//cartpage
export const ProtectedRoutes = ({children}) => {
    const token = JSON.parse(sessionStorage.getItem("token"))
  return (
    token ? children : <Navigate to = "/login" />
  )
}

 
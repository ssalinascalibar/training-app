import React from 'react'

import { Outlet, Navigate } from "react-router-dom";

import { useContext } from 'react';
import Context from "../Context";

const PrivateRoutes = () => {
    const { isAuth } = useContext(Context);
    console.log(isAuth);
  return (
    isAuth ? <Outlet /> : <Navigate to="/login"/>
  )
//   return <Outlet/>
}

export default PrivateRoutes
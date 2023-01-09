import {Outlet, Navigate} from 'react-router-dom'
import React from 'react'
const PrivateRoutes=()=>{
    let auth = {'token': localStorage.getItem("token")? true: false}
    return(
        auth.token? <Outlet/>: <Navigate to="/SystemDashBoard/Login"/>
    )
}

export default PrivateRoutes;
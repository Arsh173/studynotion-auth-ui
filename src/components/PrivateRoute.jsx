import React from 'react'
import { Navigate } from 'react-router-dom';
import { useState } from 'react'

const PrivateRoute =( {isLoggedIn, children}) => {
    const navigate = useState();
    if(isLoggedIn) {
        return children;
    }
    else {
        return <Navigate to="/login" />

    }
}

export default PrivateRoute
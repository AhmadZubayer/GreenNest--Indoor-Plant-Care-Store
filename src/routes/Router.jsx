import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ForgotPassword from '../pages/ForgotPassword';
import AllPlants from '../pages/AllPlants';
import PlantDetails from '../pages/PlantDetails';
import MyProfile from '../pages/MyProfile';
import PrivateRoute from '../context/PrivateRoute';

const Router = createBrowserRouter([{
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <Signup></Signup>
        },
        {
            path: "/forgot-password",
            element: <ForgotPassword></ForgotPassword>
        },
        {
            path: "/allPlants",
            element: <AllPlants></AllPlants>
        },
        {
            path: "/plant/:id",
            element: <PrivateRoute><PlantDetails></PlantDetails></PrivateRoute>
        },
        {
            path: "/userProfile",
            element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        }
    ]
}])

export default Router;
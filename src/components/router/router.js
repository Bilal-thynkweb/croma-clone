import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../../page/Home'
import Cart from '../cart'
import App from '../../App'
import ProductListing from '../../page/ProductListing'



const router = createBrowserRouter([{
    path: "/" ,
    element: <App></App>,
    children: [
       {
        path: "/",
        element: <Home></Home>
       },
       {
        path: "/cart",
        element: <Cart></Cart>
       },
       {
        path: "/listing",
        element: <ProductListing></ProductListing>
       },  
    ]

}])


export default router
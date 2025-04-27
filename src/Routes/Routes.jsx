import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../Components/Root/Root';
import Home from '../Components/Home/Home';
import ProductDetails from '../Components/ProductCard.jsx/ProductDetails';


export const router = createBrowserRouter([
  {
    path: "/",
   Component :Root,
   children:[
    {
      index:true,
      path:"/",
      Component :Home
    },
    {
      path: '/product/:id',
      Component: ProductDetails, 
    },

   ]
  },
]);

import { useState } from 'react'
import Root from './routes/root'

import ErrorPage from "./routes/error-page";
import {  createBrowserRouter } from "react-router-dom";
const RouterContext = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper ><Root/></AppWrapper>,
    errorElement: <AppWrapper><ErrorPage /></AppWrapper>,
  },
//   {
//     path: "contacts/:contactId",
//     element: <Contact />,
//   },
]);

export default RouterContext;

function AppWrapper({children}) {

  return (

    <div className=' bg-black '>
      <div className='container px-1 md:px-10 mx-auto'>
       {children}

      </div>
    </div>
  )
}


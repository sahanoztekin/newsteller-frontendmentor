import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
// import { element } from 'prop-types'



// const router = createBrowserRouter([
//   index: "/",
//   element: <Base/>,
//   errorElement: <NotFound/>,
//   children=[
//     {
//       index: true,
//       element:<Anasayfa/>
//     },
//     {
//       Path:"/detay",
//       element:<detay/>
//     },
//     {
//       Path:"/hakkımda",
//       element:<hakkımda/>
//     }
//   ]
// ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <RouterProvider router={router}/>
)

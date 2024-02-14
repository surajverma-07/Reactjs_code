import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route } from 'react-router-dom'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home,About,Layout,Contact,Project } from './componentes/index.js'
import User from './componentes/User/User.jsx'
import Github, { githubInfoLoader } from './componentes/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element= {<Layout/>} >
       <Route path="" element={<Home/>} />
       <Route path="about" element={<About/>} />
       <Route path="contact" element={<Contact/>} />
       <Route path="/user/:userid" element={<User/>} />
       <Route path='/project' element={< Project/>} />

       <Route 
             loader={githubInfoLoader}
                  path='github'
                  element={<Github/>} />

    </Route>
    
  ),
  // createRoutesFromElements(
  //   <Route path='/project' element={< Project/>} />

  //  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

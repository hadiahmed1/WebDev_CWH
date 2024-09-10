import Nav from './Components/Nav'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import User from './Components/User'
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Nav></Nav><Home></Home></>
    },{
      path:"/login",
      element:<><Nav></Nav><Login></Login></>
    },{
      path:"/user/:userName",
      element:<><Nav/><User></User></>
    }
  ])
  return (
    <>
      
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

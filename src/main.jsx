import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./Components/About.jsx"
import Resume from "./Components/Resume.jsx"
import Works from "./Components/Works.jsx"
import Contact from "./Components/Contact.jsx"
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<About />} />
      <Route path="Resume" element={<Resume />} />
      <Route path="Works" element={<Works />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

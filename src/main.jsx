import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import router from './router'
import { RouterProvider } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)

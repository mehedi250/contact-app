import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import router from './router/Router.jsx'
import { RouterProvider } from 'react-router'
import { ContactProvider } from './context/ContactContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactProvider>
      <RouterProvider router={router} />
    </ContactProvider>
  </StrictMode>,
)

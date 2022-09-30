import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { CustomFonts } from './lib/CustomFonts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={{
          fontFamily: 'Poppins, sans-serif',
      }}>
        <CustomFonts/>
        <App/>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Page from './blog/Page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Page/>
  </StrictMode>,
)


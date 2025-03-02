import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx' //a sample component

//our own components
import Layout from './Layout.jsx';

// //to determine which c omponent to load in which part of index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Layout/> 
  </StrictMode>,
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route.jsx';
import Authcontexts from './providers/Authcontexts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authcontexts><RouterProvider router={router} /></Authcontexts>
  </React.StrictMode>,
)

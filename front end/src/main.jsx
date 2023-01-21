import React from 'react'
import {createRoot} from 'react-dom/client'
import Layout from './layout'

const root = createRoot(document.querySelector("#root"))

//render your react application
root.render(<Layout/>)

import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from './views/home.jsx'
import {Activewear} from './views/activewear'

function Layout() {

  return(
   <div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path="/product/:id" element={<Activewear />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>)
}

export default Layout

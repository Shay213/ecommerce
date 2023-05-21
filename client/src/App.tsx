import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	)
}

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/products/:id' element={<Products />} />
					<Route path='/product/:id' element={<Product />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App

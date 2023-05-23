import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import CartContextProvider from './context/CartContextProvider.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<CartContextProvider>
					<App />
				</CartContextProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
)

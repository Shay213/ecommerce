import { DeleteOutline } from '@mui/icons-material'
import useCartContext from '../context/useCartContext'

const API_FILES_URL = import.meta.env.VITE_API_FILES_URL as string

const Cart = () => {
	const mangeCart = useCartContext()
	const cartItems = mangeCart?.state?.products
	const total = cartItems
		?.reduce((sum, el) => sum + el.price * el.quantity, 0)
		.toFixed(2)
	return (
		<div className='absolute right-5 top-24 w-[470px] bg-white p-5 shadow-lg'>
			{!cartItems || cartItems.length === 0 ? (
				<h1 className='mb-6 text-2xl text-gray-700'>
					No products in your cart
				</h1>
			) : (
				<>
					<h1 className='mb-6 text-2xl text-gray-700'>Products in your cart</h1>
					{cartItems &&
						cartItems.map((item) => (
							<div key={item.id} className='mb-6 flex items-center gap-5'>
								<img
									src={API_FILES_URL + item.img}
									alt=''
									className='h-28 flex-1 object-cover'
								/>
								<div className='flex-[3]'>
									<h1 className='font-medium'>{item.title}</h1>
									<p className='py-1 text-justify text-sm'>
										{item.desc?.substring(0, 70)}...
									</p>
									<div>
										<span className='text-blue-600'>
											{item.quantity} x ${item.price}
										</span>
									</div>
								</div>
								<DeleteOutline
									className='cursor-pointer text-red-600'
									fontSize='medium'
									onClick={() =>
										mangeCart.dispatch({
											type: 'removeFromCart',
											payload: { id: item.id },
										})
									}
								/>
							</div>
						))}
					<div className='flex justify-between border-b border-blue-400'>
						<h1 className='uppercase'>subtotal</h1>
						<span>${total}</span>
					</div>
					<div className='mt-6 flex justify-between'>
						<button
							type='button'
							className={`
					w-max cursor-pointer rounded-sm bg-blue-500 p-2 text-sm font-medium 
          uppercase text-white opacity-[0.85] hover:opacity-100
				`}
						>
							proceed to checkout
						</button>
						<span
							className='cursor-pointer text-red-600'
							onClick={() => mangeCart.dispatch({ type: 'resetCart' })}
						>
							Reset Cart
						</span>
					</div>
				</>
			)}
		</div>
	)
}

export default Cart

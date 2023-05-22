import { DeleteOutline } from '@mui/icons-material'

const DATA = [
	{
		id: 1,
		img: 'https://images.pexels.com/photos/15812678/pexels-photo-15812678/free-photo-of-mezczyzna-okulary-sloneczne-ludzie-piasek.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		title: 'Long sleeve Graphic T-shirt',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo consequuntur, reiciendis ex molestiae sequi impedit molestias harum veniam? Officiis, deleniti corporis nesciunt aperiam sit doloribus rem minima explicabo magni ab!',
		isNew: true,
		oldPrice: 19,
		price: 12,
	},
	{
		id: 2,
		img: 'https://images.pexels.com/photos/15812678/pexels-photo-15812678/free-photo-of-mezczyzna-okulary-sloneczne-ludzie-piasek.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		title: 'Long sleeve Graphic T-shirt',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo consequuntur, reiciendis ex molestiae sequi impedit molestias harum veniam? Officiis, deleniti corporis nesciunt aperiam sit doloribus rem minima explicabo magni ab!',
		isNew: true,
		oldPrice: 19,
		price: 12,
	},
]

const Cart = () => {
	return (
		<div className='absolute right-5 top-24 max-w-md bg-white p-5 shadow-lg'>
			<h1 className='mb-6 text-2xl text-gray-700'>Products in your cart</h1>
			{DATA?.map((item) => (
				<div key={item.id} className='mb-6 flex items-center gap-5'>
					<img src={item.img} alt='' className='h-28 flex-1 object-cover' />
					<div className='flex-[3]'>
						<h1 className='font-medium'>{item.title}</h1>
						<p className='py-1 text-justify text-sm'>
							{item.desc?.substring(0, 70)}...
						</p>
						<div>
							<span className='text-blue-600'>1 x ${item.price}</span>
						</div>
					</div>
					<DeleteOutline
						className='cursor-pointer text-red-600'
						fontSize='medium'
					/>
				</div>
			))}
			<div className='flex justify-between border-b border-blue-400'>
				<h1 className='uppercase'>subtotal</h1>
				<span>$123</span>
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
				<span className='cursor-pointer text-red-600'>Reset Cart</span>
			</div>
		</div>
	)
}

export default Cart

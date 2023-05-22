import { useState } from 'react'
import {
	AddShoppingCart,
	FavoriteBorder,
	Balance,
	Favorite,
} from '@mui/icons-material'

const IMAGES = [
	'https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=1600',
	'https://images.pexels.com/photos/1390602/pexels-photo-1390602.jpeg?auto=compress&cs=tinysrgb&w=1600',
]

const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0)
	const [quantity, setQuantity] = useState(1)
	return (
		<div className='flex gap-12 px-5 py-12'>
			<div className='flex flex-1 gap-4'>
				<div className='flex flex-1 flex-col gap-3'>
					<img
						src={IMAGES[0]}
						alt=''
						onClick={(e) => setSelectedImg(0)}
						className='h-36 w-full cursor-pointer object-cover'
					/>
					<img
						src={IMAGES[1]}
						alt=''
						onClick={(e) => setSelectedImg(1)}
						className='h-36 w-full cursor-pointer object-cover'
					/>
				</div>
				<div className='flex-[5]'>
					<img
						src={IMAGES[selectedImg]}
						alt=''
						className='max-h-[700px] w-full object-cover'
					/>
				</div>
			</div>
			<div className='flex flex-1 flex-col gap-7'>
				<h1 className='text-3xl'>Title</h1>
				<span className='text-2xl font-bold text-blue-500'>$199</span>
				<p className='text-base font-light'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat
					reiciendis numquam nesciunt, dolores amet officia. Quo, velit
					voluptatibus, a aliquam eveniet aspernatur molestiae minima sunt
					laudantium exercitationem assumenda ad!
				</p>
				<div className='flex items-center gap-3'>
					<button
						type='button'
						onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
						className={`
							flex h-5 w-5 items-center justify-center rounded-full 
							bg-gray-500 text-white opacity-80 hover:opacity-100
						`}
					>
						<span className='text-lg'>-</span>
					</button>
					<span className='text-lg'>{quantity}</span>
					<button
						type='button'
						onClick={() => setQuantity((prev) => prev + 1)}
						className={`
							flex h-5 w-5 items-center justify-center rounded-full 
							bg-gray-500 text-white opacity-80 hover:opacity-100
						`}
					>
						<span>+</span>
					</button>
				</div>
				<button
					className={`
						flex w-48 cursor-pointer items-center justify-center gap-5 
						rounded-sm bg-blue-500 p-2 font-medium uppercase text-white
						opacity-[0.85] hover:opacity-100
					`}
				>
					<AddShoppingCart /> add to cart
				</button>
				<div className='flex gap-4 text-sm uppercase text-blue-400'>
					<div className='flex cursor-pointer items-center gap-2'>
						<FavoriteBorder /> add to with list
					</div>
					<div className='flex cursor-pointer items-center gap-2'>
						<Balance /> add to compare
					</div>
				</div>
				<div className='flex flex-col gap-2 text-sm text-gray-500'>
					<span>Vendor: Polo</span>
					<span>Product Type: T-shirt</span>
					<span>Tag: T-Shirt, Women, Top</span>
				</div>
				<hr />
				<div className='flex w-max flex-col gap-2 text-sm text-gray-500'>
					<span className='uppercase'>description</span>
					<hr />
					<span className='uppercase'>additional information</span>
					<hr />
					<span className='uppercase'>faq</span>
				</div>
			</div>
		</div>
	)
}

export default Product

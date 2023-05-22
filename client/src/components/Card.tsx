import { Link } from 'react-router-dom'
import type { Product } from './FeaturedProducts'

const API_FILES_URL = import.meta.env.VITE_API_FILES_URL as string
if (!API_FILES_URL) throw new Error('Api files url not specified!')

const Card = ({ item }: { item: Product }) => {
	return (
		<Link to={`/product/${item.id}`}>
			<div className='overflow-hidden rounded-md shadow-lg'>
				<div className='group relative h-80 overflow-hidden'>
					{item.isNew && (
						<span className='absolute left-2 top-2 z-30 rounded-lg bg-white px-2 py-1 text-xs font-bold text-green-600'>
							New Season
						</span>
					)}
					<img
						src={API_FILES_URL + item.img1}
						alt='product'
						className='absolute z-10 h-full w-full object-cover'
					/>
					<img
						src={API_FILES_URL + item.img2}
						alt='product'
						className='absolute h-full w-full object-cover group-hover:z-20'
					/>
				</div>
				<div className='p-3'>
					<h2 className='text-sm'>{item.title}</h2>
					<div className='mt-2 flex gap-3 text-base font-bold'>
						<h3 className='text-gray-500 line-through decoration-2'>
							${item.price + 20}
						</h3>
						<h3>${item.price}</h3>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default Card

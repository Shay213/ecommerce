import List from '../components/List'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export enum PriceRange {
	MIN = 0,
	MAX = 1000,
}

export enum SortType {
	ASC = 'asc',
	DESC = 'desc',
}

const Products = () => {
	const { id: catId } = useParams()
	const [maxPrice, setMaxPrice] = useState(1000)
	const [sort, setSort] = useState<SortType | null>(null)

	if (!catId) return null

	return (
		<div className='flex px-7 py-11 '>
			<div className='sticky top-10 flex h-full flex-1 flex-col gap-4'>
				<div>
					<h2 className='mb-2 text-lg font-medium'>Product Categories</h2>
					<div>
						<input type='checkbox' id='1' value={1} />
						<label htmlFor='1' className='pl-2'>
							Shoes
						</label>
					</div>
					<div>
						<input type='checkbox' id='2' value={2} />
						<label htmlFor='2' className='pl-2'>
							Skirts
						</label>
					</div>
					<div>
						<input type='checkbox' id='3' value={3} />
						<label htmlFor='3' className='pl-2'>
							Coats
						</label>
					</div>
				</div>
				<div>
					<h2 className='mb-2 text-lg font-medium'>Filter by price</h2>
					<div>
						<span>0</span>
						<input
							type='range'
							min={PriceRange.MIN}
							max={PriceRange.MAX}
							value={maxPrice}
							onChange={(e) => setMaxPrice(+e.target.value)}
						/>
						<span>{maxPrice}</span>
					</div>
				</div>
				<div>
					<h2 className='mb-2 text-lg font-medium'>Sort by</h2>
					<div>
						<input
							type='radio'
							id={SortType.ASC}
							value={SortType.ASC}
							name='price'
							onChange={(e) => setSort(SortType.ASC)}
						/>
						<label htmlFor={SortType.ASC} className='pl-2'>
							Price (Lowest first)
						</label>
					</div>
					<div>
						<input
							type='radio'
							id={SortType.DESC}
							value={SortType.DESC}
							name='price'
							onChange={(e) => setSort(SortType.DESC)}
						/>
						<label htmlFor={SortType.DESC} className='pl-2'>
							Price (Highest first)
						</label>
					</div>
				</div>
			</div>
			<div className='flex-[3]'>
				<img
					src='https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1600'
					alt=''
					className='mb-12 h-72 w-full object-cover'
				/>

				<List catId={+catId} maxPrice={maxPrice} sort={sort} />
			</div>
		</div>
	)
}

export default Products

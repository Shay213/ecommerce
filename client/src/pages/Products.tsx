import { useQuery } from '@tanstack/react-query'
import List from '../components/List'
import { ChangeEventHandler, useState } from 'react'
import { useParams } from 'react-router-dom'
import newRequest from '../utils/newRequest'

export enum PriceRange {
	MIN = 0,
	MAX = 1000,
}

export enum SortType {
	ASC = 'asc',
	DESC = 'desc',
}

type SubCategoryTitle = 'hat' | 'tShirt' | 'suit'

interface SubCategory {
	id: string
	title: SubCategoryTitle
}

const Products = () => {
	const { id: catId } = useParams()
	const [maxPrice, setMaxPrice] = useState(1000)
	const [sort, setSort] = useState<SortType | null>(null)
	const [selectedSubCats, setSelectedSubCats] = useState<string[]>([])

	const { isLoading, isError, data } = useQuery<SubCategory[]>({
		queryKey: ['subCategories', catId],
		queryFn: () =>
			newRequest
				.get(`/sub-categories${catId ? '/' + catId : ''}`)
				.then((res) => res.data as SubCategory[]),
	})

	if (!catId) return null

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const value = e.target.value
		const isChecked = e.target.checked

		setSelectedSubCats((prev) =>
			isChecked ? [...prev, value] : prev.filter((el) => el !== value)
		)
	}

	return (
		<div className='flex px-7 py-11 '>
			<div className='sticky top-10 flex h-full flex-1 flex-col gap-4'>
				<div>
					<h2 className='mb-2 text-lg font-medium'>Product Categories</h2>
					{data?.map((el) => (
						<div key={el.id}>
							<input
								type='checkbox'
								id={el.id}
								value={el.id}
								onChange={handleChange}
							/>
							<label htmlFor={el.id} className='pl-2'>
								{el.title}
							</label>
						</div>
					))}
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

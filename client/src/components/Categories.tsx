import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import newRequest from '../utils/newRequest'

type CategoryTitle =
	| 'women'
	| 'man'
	| 'shoes'
	| 'newSeason'
	| 'sale'
	| 'accessories'

interface Category {
	id: string
	title: CategoryTitle
	desc: string
	img: string
}

const API_FILES_URL = import.meta.env.VITE_API_FILES_URL as string

const Categories = () => {
	const { isLoading, isError, data } = useQuery<Category[]>({
		queryKey: ['categories'],
		queryFn: () =>
			newRequest.get('/categories').then((res) => res.data as Category[]),
	})

	return (
		<div className='px-5 py-20'>
			{isLoading ? (
				'Loading...'
			) : isError ? (
				'Something went wrong!'
			) : (
				<div className='grid auto-rows-[450px] grid-cols-1 gap-2 sm:grid-cols-[repeat(3,_minmax(180px,_1fr))] lg:grid-cols-[repeat(4,_minmax(240px,_1fr))] '>
					{data.map((c, i) => (
						<div
							key={c.id}
							className={`relative h-full w-full ${
								i === 0 ? 'sm:row-span-2 ' : ''
							} ${
								i === 2
									? 'row-start-1 sm:col-span-2 sm:col-start-2 lg:col-start-3'
									: ''
							}`}
						>
							<img
								src={API_FILES_URL + c.img}
								alt=''
								className='h-full w-full object-cover'
							/>
							<button
								className={`
									absolute inset-0 m-auto h-min w-max cursor-pointer 
									rounded-sm border-none bg-white text-lg uppercase
									opacity-90 outline-none hover:opacity-100`}
							>
								<Link
									to={`/products/${c.id}`}
									className='h-full w-full px-4 py-1'
								>
									{c.title}
								</Link>
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Categories

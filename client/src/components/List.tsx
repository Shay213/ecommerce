import Card from './Card'
import { SortType } from '../pages/Products'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../utils/newRequest'
import { Product } from './FeaturedProducts'

interface ListProps {
	catId: string
	maxPrice: number
	sort: SortType | null
	subCats: string[]
}

const List = ({ catId, maxPrice, sort, subCats }: ListProps) => {
	const { isLoading, isError, data } = useQuery<Product[]>({
		queryKey: ['filteredProducts', catId, maxPrice, sort, subCats],
		queryFn: () =>
			newRequest
				.get(
					`/products/${catId}?maxPrice=${maxPrice}${
						sort ? '&sort=' + sort : ''
					}${
						subCats.length
							? '&subCats=' + encodeURIComponent(JSON.stringify(subCats))
							: ''
					}`
				)
				.then((res) => res.data as Product[]),
	})

	if (isLoading) return <p>Loading...</p>
	if (isError) return <p>Something went wrong!</p>

	return (
		<div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-11'>
			{data?.map((item) => (
				<Card key={item.id} item={item} />
			))}
		</div>
	)
}

export default List

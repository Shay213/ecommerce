import { useQuery } from '@tanstack/react-query'
import Card from './Card'
import newRequest from '../utils/newRequest'

export enum FeaturedType {
	FEATURED = 'featured',
	TRENDING = 'trending',
	NORMAL = 'normal',
}

export interface Product {
	id: string
	title: string
	desc: string
	img1: string
	img2: string
	productType: FeaturedType
	price: number
	isNew: boolean
}

const FeaturedProducts = ({ type }: { type: FeaturedType }) => {
	const { isLoading, isError, data } = useQuery<Product[]>({
		queryKey: ['featuredProducts'],
		queryFn: () =>
			newRequest.get('/products').then((res) => res.data as Product[]),
	})

	if (isLoading) return console.log('loading')
	if (isError) return null

	return (
		<div className='mx-48 my-20'>
			<div className='mb-11 flex items-center justify-between'>
				<h1 className='text-2xl font-bold capitalize'>{type} products</h1>
				<p className='max-w-prose text-gray-600'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
					temporibus, incidunt, vero ipsam reiciendis deserunt maiores adipisci
					consequuntur officia quae nulla totam porro quia minima dignissimos
					laborum error quas optio.
				</p>
			</div>
			<div className='mx-auto grid w-5/6 grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))] gap-11'>
				{data.map((item) => (
					<Card key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default FeaturedProducts

import Card from './Card'
import { SortType } from '../pages/Products'

interface ListProps {
	catId: number
	maxPrice: number
	sort: SortType | null
}

const List = ({ catId, maxPrice, sort }: ListProps) => {
	return (
		<h1>
			hello
			{/*<div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-11'>
			{DATA?.map((item) => (
				<Card key={item.id} item={item} />
			))}
			</div>*/}
		</h1>
	)
}

export default List

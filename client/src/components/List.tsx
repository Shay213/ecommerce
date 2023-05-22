import Card from './Card'
import { SortType } from '../pages/Products'

const DATA = [
	{
		id: 1,
		img1: 'https://images.pexels.com/photos/15812678/pexels-photo-15812678/free-photo-of-mezczyzna-okulary-sloneczne-ludzie-piasek.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		img2: 'https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&w=1600',
		title: 'Long sleeve Graphic T-shirt',
		isNew: true,
		oldPrice: 19,
		price: 12,
	},
	{
		id: 2,
		img1: 'https://images.pexels.com/photos/15812678/pexels-photo-15812678/free-photo-of-mezczyzna-okulary-sloneczne-ludzie-piasek.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		img2: 'https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&w=1600',
		title: 'Long sleeve Graphic T-shirt',
		isNew: true,
		oldPrice: 19,
		price: 12,
	},
	{
		id: 3,
		img1: 'https://images.pexels.com/photos/15812678/pexels-photo-15812678/free-photo-of-mezczyzna-okulary-sloneczne-ludzie-piasek.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		img2: 'https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&w=1600',
		title: 'Long sleeve Graphic T-shirt',
		isNew: true,
		oldPrice: 19,
		price: 12,
	},
	{
		id: 4,
		img1: 'https://images.pexels.com/photos/15812678/pexels-photo-15812678/free-photo-of-mezczyzna-okulary-sloneczne-ludzie-piasek.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		img2: 'https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&w=1600',
		title: 'Long sleeve Graphic T-shirt',
		isNew: true,
		oldPrice: 19,
		price: 12,
	},
	{
		id: 5,
		img1: 'https://images.pexels.com/photos/15812678/pexels-photo-15812678/free-photo-of-mezczyzna-okulary-sloneczne-ludzie-piasek.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		img2: 'https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&w=1600',
		title: 'Long sleeve Graphic T-shirt',
		isNew: true,
		oldPrice: 19,
		price: 12,
	},
	{
		id: 6,
		img1: 'https://images.pexels.com/photos/15812678/pexels-photo-15812678/free-photo-of-mezczyzna-okulary-sloneczne-ludzie-piasek.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		img2: 'https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&w=1600',
		title: 'Long sleeve Graphic T-shirt',
		isNew: true,
		oldPrice: 19,
		price: 12,
	},
	{
		id: 7,
		img1: 'https://images.pexels.com/photos/15812678/pexels-photo-15812678/free-photo-of-mezczyzna-okulary-sloneczne-ludzie-piasek.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		img2: 'https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&w=1600',
		title: 'Long sleeve Graphic T-shirt',
		isNew: true,
		oldPrice: 19,
		price: 12,
	},
	{
		id: 8,
		img1: 'https://images.pexels.com/photos/15812678/pexels-photo-15812678/free-photo-of-mezczyzna-okulary-sloneczne-ludzie-piasek.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
		img2: 'https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&w=1600',
		title: 'Long sleeve Graphic T-shirt',
		isNew: true,
		oldPrice: 19,
		price: 12,
	},
]

interface ListProps {
	catId: number
	maxPrice: number
	sort: SortType | null
}

const List = ({ catId, maxPrice, sort }: ListProps) => {
	return (
		<div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-11'>
			{DATA?.map((item) => (
				<Card key={item.id} item={item} />
			))}
		</div>
	)
}

export default List

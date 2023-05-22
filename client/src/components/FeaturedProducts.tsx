import Card from './Card'

export enum FeaturedType {
	FEATURED = 'Featured',
	TRENDING = 'Trending',
}

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
]

const FeaturedProducts = ({ type }: { type: FeaturedType }) => {
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
				{DATA.map((item) => (
					<Card key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default FeaturedProducts

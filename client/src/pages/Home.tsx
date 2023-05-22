import FeaturedProducts from '../components/FeaturedProducts'
import Slider from '../components/Slider'
import { FeaturedType } from '../components/FeaturedProducts'
import Categories from '../components/Categories'

const Home = () => {
	return (
		<div>
			<Slider />
			<FeaturedProducts type={FeaturedType.FEATURED} />
			<Categories />
			<FeaturedProducts type={FeaturedType.TRENDING} />
		</div>
	)
}

export default Home

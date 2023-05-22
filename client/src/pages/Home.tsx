import FeaturedProducts from '../components/FeaturedProducts'
import Slider from '../components/Slider'
import { FeaturedType } from '../components/FeaturedProducts'
import Categories from '../components/Categories'
import Contact from '../components/Contact'

const Home = () => {
	return (
		<div>
			<Slider />
			<FeaturedProducts type={FeaturedType.FEATURED} />
			<Categories />
			<FeaturedProducts type={FeaturedType.TRENDING} />
			<Contact />
		</div>
	)
}

export default Home

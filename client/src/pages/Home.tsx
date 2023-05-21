import FeaturedProducts from '../components/FeaturedProducts'
import Slider from '../components/Slider'
import { FeaturedType } from '../components/FeaturedProducts'
const Home = () => {
	return (
		<div>
			<Slider />
			<FeaturedProducts type={FeaturedType.FEATURED} />
			<FeaturedProducts type={FeaturedType.TRENDING} />
		</div>
	)
}

export default Home

import { EastOutlined, WestOutlined } from '@mui/icons-material'
import { useState } from 'react'

const DATA = [
	'https://images.pexels.com/photos/4927787/pexels-photo-4927787.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
	'https://images.pexels.com/photos/16307711/pexels-photo-16307711/free-photo-of-krajobraz-pustynia-jalowy-cabrio.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
	'https://images.pexels.com/photos/15252557/pexels-photo-15252557/free-photo-of-miasto-mezczyzna-noc-ulica.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
]

const Slider = () => {
	const [currSlide, setCurrSlide] = useState(0)

	const prevSlide = () => {
		setCurrSlide(currSlide === 0 ? 2 : (prev) => prev - 1)
	}

	const nextSlide = () => {
		setCurrSlide(currSlide === 2 ? 0 : (prev) => prev + 1)
	}

	return (
		<div className='relative h-[calc(100vh-80px)] w-full overflow-hidden'>
			<div
				className='flex h-full w-[300vh] transition-all duration-700 ease-in-out'
				style={{ transform: `translateX(-${currSlide * 100}vw)` }}
			>
				<img
					src={DATA[0]}
					alt=''
					className='h-full w-screen flex-none object-cover'
				/>
				<img
					src={DATA[1]}
					alt=''
					className='h-full w-screen flex-none object-cover'
				/>
				<img
					src={DATA[2]}
					alt=''
					className='h-full w-screen flex-none object-cover'
				/>
			</div>
			<div className='absolute inset-x-0 bottom-24 m-auto flex w-28 gap-3'>
				<div
					className={`
          flex h-7 flex-1 cursor-pointer items-center justify-center 
          rounded-full bg-blue-500 opacity-70 hover:opacity-100`}
					onClick={prevSlide}
				>
					<WestOutlined fontSize='medium' className='text-white' />
				</div>
				<div
					className={`
          flex h-7 flex-1 cursor-pointer items-center justify-center 
          rounded-full bg-blue-500 opacity-70 hover:opacity-100`}
					onClick={nextSlide}
				>
					<EastOutlined fontSize='medium' className='text-white' />
				</div>
			</div>
		</div>
	)
}

export default Slider

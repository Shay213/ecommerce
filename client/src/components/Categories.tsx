import { Link } from 'react-router-dom'

const Categories = () => {
	return (
		<div className='px-5 py-20'>
			<div className='h-80vh grid grid-cols-4 grid-rows-2 gap-2'>
				<div className='relative h-full w-full'>
					<img
						src='https://images.pexels.com/photos/1544724/pexels-photo-1544724.jpeg?auto=compress&cs=tinysrgb&w=1600'
						alt=''
						className='h-full w-full object-cover'
					/>
					<button
						className={`
						absolute inset-0 m-auto h-min w-max cursor-pointer 
						rounded-sm border-none bg-white px-4 py-1 text-lg uppercase
						opacity-90 outline-none hover:opacity-100`}
					>
						<Link to='/products/1' className='h-full w-full'>
							Sale
						</Link>
					</button>
				</div>
				<div className='relative row-span-2 h-full w-full'>
					<img
						src='https://images.pexels.com/photos/4124201/pexels-photo-4124201.jpeg?auto=compress&cs=tinysrgb&w=1600'
						alt=''
						className='h-full w-full object-cover'
					/>
					<button
						className={`
						absolute inset-0 m-auto h-min w-max cursor-pointer 
						rounded-sm border-none bg-white px-4 py-1 text-lg uppercase
						opacity-90 outline-none hover:opacity-100`}
					>
						<Link to='/products/1' className='h-full w-full'>
							Women
						</Link>
					</button>
				</div>
				<div className='relative h-full w-full'>
					<img
						src='https://images.pexels.com/photos/1544724/pexels-photo-1544724.jpeg?auto=compress&cs=tinysrgb&w=1600'
						alt=''
						className='h-full w-full object-cover'
					/>
					<button
						className={`
						absolute inset-0 m-auto h-min w-max cursor-pointer 
						rounded-sm border-none bg-white px-4 py-1 text-lg uppercase
						opacity-90 outline-none hover:opacity-100`}
					>
						<Link to='/products/1' className='h-full w-full'>
							New Season
						</Link>
					</button>
				</div>
				<div className='relative h-full w-full'>
					<img
						src='https://images.pexels.com/photos/4966995/pexels-photo-4966995.jpeg?auto=compress&cs=tinysrgb&w=1600'
						alt=''
						className='h-full w-full object-cover'
					/>
					<button
						className={`
						absolute inset-0 m-auto h-min w-max cursor-pointer 
						rounded-sm border-none bg-white px-4 py-1 text-lg uppercase
						opacity-90 outline-none hover:opacity-100`}
					>
						<Link to='/products/1' className='h-full w-full'>
							Men
						</Link>
					</button>
				</div>
				<div className='relative h-full w-full'>
					<img
						src='https://images.pexels.com/photos/4244305/pexels-photo-4244305.jpeg?auto=compress&cs=tinysrgb&w=1600'
						alt=''
						className='h-full w-full object-cover'
					/>
					<button
						className={`
						absolute inset-0 m-auto h-min w-max cursor-pointer 
						rounded-sm border-none bg-white px-4 py-1 text-lg uppercase
						opacity-90 outline-none hover:opacity-100`}
					>
						<Link to='/products/1' className='h-full w-full'>
							Accessories
						</Link>
					</button>
				</div>
				<div className='relative col-span-2 h-full w-full'>
					<img
						src='https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=1600'
						alt=''
						className='h-full w-full object-cover'
					/>
					<button
						className={`
						absolute inset-0 m-auto h-min w-max cursor-pointer 
						rounded-sm border-none bg-white px-4 py-1 text-lg uppercase 
						opacity-90 outline-none hover:opacity-100`}
					>
						<Link to='/products/1' className='h-full w-full'>
							Shoes
						</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Categories

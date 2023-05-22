// ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cart from './Cart'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = document.documentElement.scrollTop
			setHasScrolled(scrollTop > 0)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div
			className={`sticky top-0 z-40 flex h-20 items-center bg-white ${
				hasScrolled ? 'shadow-sm' : ''
			}`}
		>
			<div className='flex flex-1 justify-between px-6'>
				{/* LEFT SIDE */}
				<div className='flex items-center gap-5'>
					<div className='flex items-center'>
						<img src='/images/en.png' alt='flag' />
						<KeyboardArrowDownIcon />
					</div>
					<div className='flex items-center'>
						<span>USD</span>
						<KeyboardArrowDownIcon />
					</div>
					<div className='flex gap-5 text-lg'>
						<div>
							<Link to='/products/1'>Women</Link>
						</div>
						<div>
							<Link to='/products/2'>Men</Link>
						</div>
						<div>
							<Link to='/products/3'>Children</Link>
						</div>
					</div>
				</div>
				{/* MIDDLE */}
				<div className='flex items-center text-3xl tracking-wide'>
					<Link to='/'>COOLSTORE</Link>
				</div>
				{/* RIGHT SIDE */}
				<div className='flex items-center gap-5'>
					<div className='flex gap-5 text-lg'>
						<div>
							<Link to='/'>Homepage</Link>
						</div>
						<div>
							<Link to='/'>About</Link>
						</div>
						<div>
							<Link to='/'>Contact</Link>
						</div>
						<div>
							<Link to='/'>Stores</Link>
						</div>
					</div>
					{/* ICONS */}
					<div className='flex items-center gap-2'>
						<SearchIcon className='cursor-pointer' htmlColor='#777' />
						<PersonOutlinedIcon className='cursor-pointer' htmlColor='#777' />
						<FavoriteBorderOutlinedIcon
							className='cursor-pointer'
							htmlColor='#777'
						/>
						<div
							className='relative cursor-pointer'
							onClick={() => setOpen(!open)}
						>
							<ShoppingCartOutlinedIcon htmlColor='#777' />
							<span
								className={`
								absolute -right-3 -top-3 flex h-5 w-5
								items-center justify-center rounded-full 
								bg-blue-500 text-xs font-bold text-white`}
							>
								10
							</span>
						</div>
					</div>
				</div>
			</div>
			{open && <Cart />}
		</div>
	)
}

export default Navbar

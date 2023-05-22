import {
	FacebookOutlined,
	Instagram,
	Twitter,
	Google,
	Pinterest,
} from '@mui/icons-material'

const Contact = () => {
	return (
		<div className='flex justify-center bg-blue-600 py-4 text-white'>
			<div className='flex w-3/5 items-center justify-between'>
				<span className='text-lg font-bold uppercase'>
					be in touch with us:
				</span>
				<div className='flex overflow-hidden rounded-lg'>
					<input
						type='text'
						placeholder='Enter your e-mail...'
						className='border-none p-2 text-black outline-none'
					/>
					<button className='h-auto w-max bg-black px-3 text-sm font-bold uppercase'>
						join us
					</button>
				</div>
				<div className='flex items-center gap-1'>
					<FacebookOutlined />
					<Instagram />
					<Twitter />
					<Google />
					<Pinterest />
				</div>
			</div>
		</div>
	)
}

export default Contact

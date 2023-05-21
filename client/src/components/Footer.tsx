const Footer = () => {
	return (
		<div className='mx-48 mb-5 mt-24'>
			{/* TOP */}
			<div className='flex gap-12 text-sm text-gray-500'>
				<div className='flex flex-1 flex-col text-justify'>
					<h1 className='text-2xl font-medium text-gray-600'>Categories</h1>
					<span>Women</span>
					<span>Men</span>
					<span>Shoes</span>
					<span>Accessories</span>
					<span>New Arrivals</span>
				</div>
				<div className='flex flex-1 flex-col text-justify'>
					<h1 className='text-2xl font-medium text-gray-600'>Links</h1>
					<span>FAQ</span>
					<span>Pages</span>
					<span>Stores</span>
					<span>Compare</span>
					<span>Cookies</span>
				</div>
				<div className='flex flex-1 flex-col text-justify'>
					<h1 className='text-2xl font-medium text-gray-600'>About</h1>
					<span>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
						laudantium dignissimos vitae magni eum neque in ipsa corporis quo
						enim nisi, nihil cum, labore deserunt rem fugiat aliquid
						reprehenderit quam!
					</span>
				</div>
				<div className='flex flex-1 flex-col text-justify'>
					<h1 className='text-2xl font-medium text-gray-600'>Contact</h1>
					<span>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
						eveniet non expedita dolorem libero aliquam dignissimos voluptatum
						aliquid atque facere excepturi ipsam amet dolor commodi est maiores,
						perferendis fugiat accusamus.
					</span>
				</div>
			</div>
			{/* BOTTOM */}
			<div className='mt-12 flex items-center justify-between'>
				<div className='flex items-center gap-5'>
					<span className='text-3xl font-bold text-blue-600'>Coolstore</span>
					<span className='text-sm text-gray-400'>
						&copy; Copyright 2023. All Rights Reserved
					</span>
				</div>
				<div>
					<img src='images/payment.png' alt='payment' className='h-14' />
				</div>
			</div>
		</div>
	)
}

export default Footer

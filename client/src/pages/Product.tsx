import { useState } from 'react'
import { AddShoppingCart, FavoriteBorder, Balance } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../utils/newRequest'
import { Product as IProduct } from '../components/FeaturedProducts'
import useCartContext from '../context/useCartContext'

enum ImgFields {
	FIRST_IMG = 'img1',
	SECOND_IMG = 'img2',
}

const API_FILES_URL = import.meta.env.VITE_API_FILES_URL as string

const Product = () => {
	const { id } = useParams()
	const [selectedImg, setSelectedImg] = useState(ImgFields.FIRST_IMG)
	const [quantity, setQuantity] = useState(1)
	const cartManager = useCartContext()
	const dispatch = cartManager?.dispatch

	const { isLoading, isError, data } = useQuery<IProduct>({
		queryKey: ['product', id],
		queryFn: () =>
			newRequest
				.get(`/products/single/${id || ''}`)
				.then((res) => res.data as IProduct),
	})

	if (isLoading) return <p>Loading...</p>
	if (isError) return <p>Product not found!</p>

	return (
		<div className='flex gap-12 px-5 py-12'>
			<div className='flex flex-1 gap-4'>
				<div className='flex flex-1 flex-col gap-3'>
					<img
						src={API_FILES_URL + data.img1}
						alt=''
						onClick={(e) => setSelectedImg(ImgFields.FIRST_IMG)}
						className='h-36 w-full cursor-pointer object-cover'
					/>
					<img
						src={API_FILES_URL + data.img2}
						alt=''
						onClick={(e) => setSelectedImg(ImgFields.SECOND_IMG)}
						className='h-36 w-full cursor-pointer object-cover'
					/>
				</div>
				<div className='flex-[5]'>
					<img
						src={API_FILES_URL + data[selectedImg]}
						alt=''
						className='max-h-[700px] w-full object-cover'
					/>
				</div>
			</div>
			<div className='flex flex-1 flex-col gap-7'>
				<h1 className='text-3xl'>{data.title}</h1>
				<span className='text-2xl font-bold text-blue-500'>${data.price}</span>
				<p className='text-base font-light'>{data.desc}</p>
				<div className='flex items-center gap-3'>
					<button
						type='button'
						onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
						className={`
							flex h-5 w-5 items-center justify-center rounded-full 
							bg-gray-500 text-white opacity-80 hover:opacity-100
						`}
					>
						<span className='text-lg'>-</span>
					</button>
					<span className='text-lg'>{quantity}</span>
					<button
						type='button'
						onClick={() => setQuantity((prev) => prev + 1)}
						className={`
							flex h-5 w-5 items-center justify-center rounded-full 
							bg-gray-500 text-white opacity-80 hover:opacity-100
						`}
					>
						<span>+</span>
					</button>
				</div>
				<button
					className={`
						flex w-48 cursor-pointer items-center justify-center gap-5 
						rounded-sm bg-blue-500 p-2 font-medium uppercase text-white
						opacity-[0.85] hover:opacity-100
					`}
					onClick={() =>
						dispatch &&
						dispatch({
							type: 'addToCart',
							payload: {
								id: data.id,
								title: data.title,
								desc: data.desc,
								price: data.price,
								img: data.img1,
								quantity,
							},
						})
					}
				>
					<AddShoppingCart /> add to cart
				</button>
				<div className='flex gap-4 text-sm uppercase text-blue-400'>
					<div className='flex cursor-pointer items-center gap-2'>
						<FavoriteBorder /> add to with list
					</div>
					<div className='flex cursor-pointer items-center gap-2'>
						<Balance /> add to compare
					</div>
				</div>
				<div className='flex flex-col gap-2 text-sm text-gray-500'>
					<span>Vendor: Polo</span>
					<span>Product Type: T-shirt</span>
					<span>Tag: T-Shirt, Women, Top</span>
				</div>
				<hr />
				<div className='flex w-max flex-col gap-2 text-sm text-gray-500'>
					<span className='uppercase'>description</span>
					<hr />
					<span className='uppercase'>additional information</span>
					<hr />
					<span className='uppercase'>faq</span>
				</div>
			</div>
		</div>
	)
}

export default Product

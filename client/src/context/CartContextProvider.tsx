import {
	PropsWithChildren,
	Reducer,
	createContext,
	useEffect,
	useReducer,
} from 'react'

interface RemoveFromCartPayload {
	id: string
}

interface CartProduct {
	id: string
	title: string
	desc: string
	price: number
	img: string
	quantity: number
}

interface State {
	products: CartProduct[]
}

type Action =
	| { type: 'addToCart'; payload: CartProduct }
	| { type: 'removeFromCart'; payload: RemoveFromCartPayload }
	| { type: 'resetCart' }

const INITIAL_STATE: State = {
	products: [],
}

const reducer = (state: State, action: Action): State => {
	const { type } = action
	switch (type) {
		case 'addToCart': {
			const payload = action.payload
			const { products } = state
			const item = products.find((item) => item.id === payload.id)
			if (item) {
				const updatedItem = {
					...item,
					quantity: item.quantity + payload.quantity,
				}
				const updatedProducts = products.map((item) =>
					item.id === payload.id ? updatedItem : item
				)
				return { ...state, products: updatedProducts }
			}

			return { ...state, products: [...products, payload] }
		}
		case 'removeFromCart': {
			const newState = { ...state }
			return {
				...state,
				products: newState.products.filter(
					(product) => product.id !== action.payload.id
				),
			}
		}
		case 'resetCart': {
			return { ...state, products: [] }
		}
		default:
			return state
	}
}

interface ManageCart {
	state: State
	dispatch: React.Dispatch<Action>
}

export const CartContext = createContext<ManageCart | null>(null)

const CartContextProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(
		reducer,
		localStorage.getItem('cart')
			? (JSON.parse(localStorage.getItem('cart') as string) as State)
			: INITIAL_STATE
	)

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(state))
	}, [state])

	const manageCart = {
		state,
		dispatch,
	}

	return (
		<CartContext.Provider value={manageCart}>{children}</CartContext.Provider>
	)
}

export default CartContextProvider

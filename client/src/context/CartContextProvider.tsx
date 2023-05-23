import { PropsWithChildren, createContext, useReducer } from 'react'

interface AddToCartPayload {
	id: string
	quantity: number
}
interface RemoveFromCartPayload {
	id: string
}

interface Product {
	id: string
	quantity: number
}

interface State {
	products: Product[]
}

type Action =
	| { type: 'addToCart'; payload: AddToCartPayload }
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
			newState.products.filter((product) => product.id !== action.payload.id)
			return newState
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
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

	const manageCart = {
		state,
		dispatch,
	}

	return (
		<CartContext.Provider value={manageCart}>{children}</CartContext.Provider>
	)
}

export default CartContextProvider

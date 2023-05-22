import axios from 'axios'

const { VITE_API_URL } = import.meta.env
if (!VITE_API_URL) throw new Error('Api url not specified!')

const axiosInst = axios.create({
	baseURL: VITE_API_URL as string,
})
export default axiosInst

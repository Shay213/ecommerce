import axios from 'axios'

const API_URL = import.meta.env.API_URL as string | undefined
if (!API_URL) throw new Error('Api url not specified!')

const axiosInst = axios.create({
	baseURL: API_URL,
})
export default axiosInst

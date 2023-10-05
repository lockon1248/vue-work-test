import axios from 'axios';

const baseReq = axios.create({
	// 開發環境使用 proxy
	baseURL: process.env.NODE_ENV === 'production' ? window.__env.url.BASE_HOST : '/baseProxy',
});
baseReq.interceptors.request.use((res) => {
	// request 加上 token
	// res.headers.Authorization = `Bearer ${token}`;
	return res;
});

export const apiGetSampleData = () => baseReq.get(`/entries`);
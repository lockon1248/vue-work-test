import axios from 'axios';
const baseReq = axios.create({
	// 開發環境使用 proxy
	baseURL: 'http://61.222.82.248:8080/PSKPI',
	headers: { 'Content-Type': 'application/json' }
});

baseReq.interceptors.request.use((config) => {
	// 在请求头中添加 token
	//   config.headers.Authorization = `Bearer ${Token}`;
	return config;
});

const apiGetProjectData = () => baseReq.get('/ProjectList/FRTEST/VERFRTEST/FRTEST');
const apiPostProjectData = (newProject) => baseReq.post('/Project', newProject);
const apiPutProjectData = (dataForm) => baseReq.put('/Project', dataForm,);
const apiGetPhaseData =()=>baseReq.get('/PhaseList/FRTEST/VERFRTEST/FRTEST')
const apiPostPhaseData =(newPhase)=>baseReq.post('/Phase',newPhase)
const apiPutPhaseData =(dataForm)=>baseReq.put('/Phase',dataForm)

export { apiGetProjectData, apiPostProjectData,apiPutProjectData,apiGetPhaseData,apiPostPhaseData,apiPutPhaseData};

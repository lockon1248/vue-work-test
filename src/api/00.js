import axios from 'axios';
import { LALE_API_URL, ORGTREE_API_URL } from './setting';

const laleReq = axios.create({
	//創一個axios實例並設定好開發環境
	baseURL: process.env.NODE_ENV === 'production' ? window.__env.url.BASE_HOST : '/baseProxy',
});
laleReq.interceptors.request.use((res) => {
	// 在laleReq實例裡面設定阻攔器加上相對應的標頭和給予token
	res.url = LALE_API_URL + res.url;
	// 下面這句話不是很懂，但如果在阻攔器裡面這樣寫的話，header是不是就會自動加上token?
	res.headers.Authorization = `Bearer ${token}`;
	return res;
});


// 以下是和剛剛相同的orgTreeReq axios實例創建
const orgTreeReq = axios.create({
	baseURL: process.env.NODE_ENV === 'production' ? window.__env.url.BASE_HOST : '/baseProxy',
});
baseReq.interceptors.request.use((res) => {
	res.url = ORGTREE_API_URL + res.url;
	res.headers.Authorization = `Bearer ${token}`;
	return res;
});

// 取得組織樹
const getOrgTree = async (companyId) => {
	const res = await orgTreeReq.get(`/dau/org-tree/info`,{
		// 簡化掉多餘重複的url前綴並將method移到前面，header的token在阻攔器設定好了所以也不需要在這邊寫
		params: { companyId },
	});
	return res;
};

// 獲取用戶所屬公司
const getAllCompany = async (headerafToken) => {
	// console.log("JS=>", token)
	const res = await orgTreeReq.get(`/dau/org-tree/company-info`,{
		headers: {
			Authorization: `Bearer ${headerafToken}`,
		},
	});
	return res;
};

// 獲取組織所有人員
const getAllMember = async (id) => {
	const res = await orgTreeReq.get(`/dau/org-tree/all-member/${id}`,{
	});
	return res;
};

// 新增群組聊天室
const createRoom = async (dataForm) => {
	console.log('dataForm', dataForm);
	const res = await laleReq.post(`/group`,{
		data: dataForm,
	});
	return res;
};

// 編輯群組名稱
const updateRoomName = async (dataForm) => {
	const res = await laleReq.put( `/group/setting`,{
		data: dataForm,
	});
	return res;
};

// 更新群組圖片
const updateRoomImage = async (dataForm) => {
	const res = await laleReq.put( `/group/avatar`,{
		data: dataForm,
	});
	return res.data;
};

// 訊息設為公告，header只傳token
const setAnnouncement = async (data, header) => {
	const res = await laleReq.post(`/room/announcement`, data, {
		headers: header,
	});
	return res.data;
};

export { getOrgTree, getAllCompany, getAllMember, createRoom, updateRoomName, updateRoomImage, setAnnouncement};

// 問題:
// 若是LALE_API_URL，token固定使用window.laleToken，若是ORGTREE_API_URL，token固定使用window.afToekn，不用傳入參數的方式。
// 我看不懂上面這句話是甚麼意思
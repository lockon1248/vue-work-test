import axios from 'axios';
import { LALE_API_URL, ORGTREE_API_URL } from './setting';

const laleReq = axios.create({
	//創一個axios實例並設定好開發環境，如果是production那麼httpHeader就是LALE_API_URL.BASE_HOST(是嗎?)，不然就是/baseProxy
	baseURL: process.env.NODE_ENV === 'production' ? LALE_API_URL.BASE_HOST : '/baseProxy',
});
laleReq.request.use((res) => {
	// 不用寫res.url = LALE_API_URL + res.url;??
	res.headers.Authorization = `Bearer ${window.laleToken}`;
	return res;
});

// 以下是和剛剛相同的orgTreeReq axios實例創建
const orgTreeReq = axios.create({
	baseURL: process.env.NODE_ENV === 'production' ? ORGTREE_API_URL.BASE_HOST : '/baseProxy',
});
orgTreeReq.interceptors.request.use((res) => {
	res.headers.Authorization = `Bearer ${window.afToekn}`;
	return res;
});

// 取得組織樹
const getOrgTree = (companyId) => orgTreeReq.get(`/dau/org-tree/info`, { params: { companyId } });

// 簡化掉多餘重複的url前綴並將method移到前面，header的token在阻攔器設定好了所以也不需要在這邊寫}

// 獲取用戶所屬公司
const getAllCompany = () => orgTreeReq.get(`/dau/org-tree/company-info`);

// 獲取組織所有人員
const getAllMember = (id) => orgTreeReq.get(`/dau/org-tree/all-member/${id}`);

// 新增群組聊天室
const createRoom = (dataForm) => laleReq.post(`/group`, dataForm);

// 編輯群組名稱
const updateRoomName = (dataForm) => laleReq.put(`/group/setting`, dataForm);

// 更新群組圖片
const updateRoomImage = (dataForm) => laleReq.put(`/group/avatar`, dataForm);

// 訊息設為公告，header只傳token
const setAnnouncement = (data) => laleReq.post(`/room/announcement`, data);
//把header拿掉了

export { getOrgTree, getAllCompany, getAllMember, createRoom, updateRoomName, updateRoomImage, setAnnouncement };

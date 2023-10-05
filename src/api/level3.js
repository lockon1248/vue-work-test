import axios from 'axios';
import { LALE_API_URL, ORGTREE_API_URL } from './setting'

const baseReq = axios.create({
	// 開發環境使用 proxy
	baseURL: process.env.NODE_ENV === 'production' ? window.__env.url.BASE_HOST : '/baseProxy',
});
baseReq.interceptors.request.use((res) => {
	// request 加上 token
	// res.headers.Authorization = `Bearer ${ }`;
	return res;
});


// 取得組織樹
const getOrgTree = async (companyId, token) => {
  const res = await axios({
    url: ORGTREE_API_URL.value + `/dau/org-tree/info`,
    method: 'get',
    params: { companyId },
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  return res
}

// 獲取用戶所屬公司
const getAllCompany = async (headerafToken) => {
  // console.log("JS=>", token)
  const res = await axios({
    url: ORGTREE_API_URL.value + `/dau/org-tree/company-info`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${headerafToken}`
    }
  })
  return res
}

// 獲取組織所有人員
const getAllMember = async (id, token) => {
  const res = await axios({
    url: ORGTREE_API_URL.value + `/dau/org-tree/all-member/${id}`,
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  return res
}

// 新增群組聊天室
const createRoom = async (dataForm, token) => {
  console.log('dataForm', dataForm)
  const res = await axios({
    url: LALE_API_URL.value + `/group`,
    // method: 'post',
    method: 'post',
    data: dataForm,
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  return res
}

// 編輯群組名稱
const updateRoomName = async (dataForm, token) => {
  const res = await axios({
    url: LALE_API_URL.value + `/group/setting`,
    method: 'put',
    data: dataForm,
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  return res
}

// 更新群組圖片
const updateRoomImage = async (dataForm, token) => {
  const res = await axios({
    url: LALE_API_URL.value + `/group/avatar`,
    method: 'put',
    data: dataForm,
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  return res.data
}

// 訊息設為公告，header只傳token
const setAnnouncement = async (data, header) => {
  const res = await axios.post(
    LALE_API_URL.value + `/room/announcement`,
    data,
    {
      headers: header
    }
  )
  return res.data
}

export {
  getOrgTree, 
  getAllCompany, 
  getAllMember, 
  createRoom,
  updateRoomName,
  updateRoomImage,
  setAnnouncement
}

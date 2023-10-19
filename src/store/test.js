const updateProject = (updateField) => {
	handleProject(updateField);
};

// 使用防抖 (debounce) 函數處理的更新專案資料的函數
const updateProjectDelay = _.debounce((updateField) => {
	handleProject(updateField);
}, 2000); // 在這裡設定延遲時間（2000 毫秒，即 2 秒）

// 處理專案資料的函數
const handleProject = async (updateField) => {
	// 假設 project 是一個 Vue.js ref 或其他資料對象
	let item = { ...project.value, memberList: JSON.stringify(project.value.memberList) }; // 欄位 stringify 處理
	apiPutProject({
		projectId: item.projectId,
		field: updateField,
		value: item[_.camelCase(updateField)],
	}).then((res) => {
		res;
	});
	// 如果更新的欄位為 'IS_DELETED'，則觸發 'deleteproject' 事件
	if (updateField === 'IS_DELETED') {
		emit('deleteproject', item.projectId);
	}
};




<template>
	<div class="main-body">
		<lale-button variant="primary" @click="addProject" class="add-new-button"> 新增專案 </lale-button>
		<div class="new-project-block">
			<Project v-for="project in projectList" :key="project.projectId" :data="project" @deleteProject="deleteProject" />
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import Project from '@/components/Project.vue';
import { usePhaseStore } from '@/store/level4-store.js';
import { useItemStore } from '@/store/level4-store.js';
import { apiGetProjectData, apiPostProjectData } from '@/api/level4.js';
const phaseStore = usePhaseStore();
const itemStore = useItemStore();
const projectList = ref([]);
phaseStore.getPhaseData();
itemStore.getItemData();
class PROJECT { //物件導向寫法
	constructor() {
		this.projectId = `NEW_PRJ`;
		this.productId = 'FRTEST';
		this.versionId = 'VERFRTEST';
		this.name = '';
		this.startDate = '';
		this.endDate = '';
		this.memberList = ['FRTEST'];
		this.isDeleted = false;
		this.sort = 0;
	}
}
apiGetProjectData().then((res) => {
		projectList.value = res.data.data;
	})
	.catch((error) => {
		console.error(error);
	});
const addProject = async () => {
	try {
		let newProject = new PROJECT();
		newProject.memberList = JSON.stringify(newProject.memberList);
		const res = await apiPostProjectData(JSON.stringify(newProject));
		projectList.value.unshift(res.data.data.DATA); // 添加 newProject 到 projectList
		console.log('項目數據已提交:', res);
	} catch (error) {
		console.error('提交項目數據失敗:', error);
	}
};
const deleteProject = (projectId) => {
	const index = projectList.value.findIndex((item) => item.projectId === projectId);
	if (index !== -1) {
		projectList.value.splice(index, 1);
	}
};
</script>
<style scoped lang="scss">
.main-body {
	min-width: 800px;
	max-width: 1280px;
	margin: auto;
	.add-new-button {
		margin-top: 20px;
		padding: 20px;
	}
	.new-project-block {
		margin-top: 20px;
	}
}
</style>

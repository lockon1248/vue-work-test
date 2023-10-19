<template>
	<div class="main-body">
		<lale-button variant="primary" @click="addProject" class="new-button"> 新增專案 </lale-button>
		<div class="new-project-block">
			<Project v-for="project in projectList" :key="project.projectId" :data="project" @deleteProject="deleteProject" />
		</div>
	</div>
</template>
<script setup>
import Project from '@/components/Project.vue';
import { ref } from 'vue';
import { apiGetProjectData, apiPostProjectData } from '@/api/level4.js';
const projectList = ref([]);
import { useAddStore } from '@/store/Level4-store.js';
const AddStore = useAddStore();
apiGetProjectData()
	.then((response) => {
		projectList.value = response.data.data;
	})
	.catch((error) => {
		console.error(error);
	});
AddStore.getPhaseData()
const addProject = async () => {
	try {
		const newProject = {
			projectId: 'NEW_PRJ',
			productId: 'FRTEST',
			versionId: 'VERFRTEST',
			name: '',
			startDate: '',
			endDate: '',
			memberList: ['FRTEST'],
			isDeleted: false,
			sort: 0,
		};
		newProject.memberList = JSON.stringify(newProject.memberList);
		const response = await apiPostProjectData(JSON.stringify(newProject));
		projectList.value.unshift(response.data.data.DATA); // 添加 newProject 到 projectList
		console.log('项目数据已提交:', response);
	} catch (error) {
		console.error('提交项目数据失败:', error);
	}
};
const deleteProject = (project) => {
	const index = projectList.value.findIndex((item) => item.projectId === project.projectId);
	if (index !== -1) {
		projectList.value.splice(index, 1);
	}
};
</script>
<style scoped lang="scss">
.main-body {
	width: 1024px;
	margin: auto;
	.new-button {
		margin-top: 20px;
		padding: 20px;
	}
	.new-project-block {
		margin-top: 20px;
	}
}
</style>

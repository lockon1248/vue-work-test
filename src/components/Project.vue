<template>
	<div class="new-project">
		<lale-input placeholder="請輸入Project名稱" class="project-name" style="width: 100%" v-model="project.name" @input="debounceEditProject('NAME')" @blur="editProject('NAME')" />
		<i class="fas fa-user-plus"></i>
		<a-select mode="tags" style="width: 500px" placeholder="新增成員" :options="itemStore.memberData" v-model:value="project.memberList" @change="editProject('MEMBER_LIST')"></a-select>
		<div class="arrow">
			<i :class="['fas', isOpen ? 'fa-chevron-up' : ' fa-chevron-down']" @click="changeOpen(project.projectId)"></i>
			<!-- 三元運算子判斷，用一個陣列去提出相同的字，然後判斷是要出現哪一個icon -->
		</div>
		<div class="setting">
			<lale-dropdown :trigger="['click']" class="delete-icon">
				<a class="ant-dropdown-link" @click.prevent> <i class="fas fa-ellipsis-v"></i></a>
				<template #overlay>
					<lale-menu>
						<lale-menu-item key="1" @click="deleteProject(project)">delete</lale-menu-item>
					</lale-menu>
				</template>
			</lale-dropdown>
		</div>
	</div>
	<lale-collapse-transition>
		<div class="show-control" v-if="isOpen">
			<div class="phase-block">
				<Phase v-for="phase in phaseStore.getPhaseMap[project.projectId]" :key="phase.phaseId" :data="phase" />
				<div class="add-new-block" @click="phaseStore.addPhase(project)">
					<i class="fas fa-plus"></i>
					<p>新增階段</p>
				</div>
			</div>
		</div>
	</lale-collapse-transition>
</template>
<script setup>
import { reactive, ref } from 'vue';
import Phase from '@/components/Phase.vue';
import { apiPutProjectData } from '@/api/level4.js';
import { usePhaseStore,useItemStore } from '@/store/level4-store.js';
const emit = defineEmits(['deleteProject']);
const phaseStore = usePhaseStore();
const itemStore = useItemStore();
const showPhase = reactive({});
const isOpen = ref(false);
const props = defineProps({
	data: {
		type: Object,
		default: () => {},
	},
});
const project = ref(props.data);
const changeOpen = (projectId) => {
	isOpen.value = !isOpen.value;
	showPhase[projectId] = !showPhase[projectId];
};
const editProject = async (updateField) => {
	let item = { ...project.value, memberList: JSON.stringify(project.value.memberList) };
	try {
		const response = await apiPutProjectData({
			projectId: item.projectId,
			field: updateField,
			value: item[_.camelCase(updateField)],
		});
		console.log('项目数据已修改:', response);
		if (updateField === 'IS_DELETED') {
			emit('deleteProject', item.projectId);
		}
	} catch (error) {
		console.error('修改项目数据失败:', error);
	}
};
const debounceEditProject = _.debounce(editProject, 2000);
const deleteProject = (project) => {
	project.isDeleted = true; //先改為true
	editProject('IS_DELETED');
};
</script>
<style scoped lang="scss">
.new-project {
	display: flex;
	padding: 20px;
	margin: 20px 20px;
	background-color: #e0e0e0;
	.project-name {
		width: 300px;
		padding: 0 20px;
		flex-grow: 1;
	}
	i {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 10px;
		cursor: pointer;
	}
	.arrow {
		display: flex;
	}

	i {
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
	}
	.setting {
		display: flex;
		.delete-icon {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
}
.phase-block {
	display: flex;
	flex-wrap: wrap;
	.add-new-block {
		margin: 20px 0px 20px 0;
		width: 300px;
		height: 100px;
		background-color: #f2f2f2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		cursor: pointer;
	}
	.add-new-block p {
		display: flex;
		justify-content: center;
	}
	.add-new-block i {
		display: flex;
		justify-content: center;
	}
}
</style>

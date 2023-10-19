<template>
	<div class="new-project">
		<lale-input placeholder="請輸入Project名稱" class="project-name" style="width: 100%" v-model="project.name" @input="debounceSaveProject('NAME')" @blur="saveProject('NAME')" />
		<i class="fas fa-user-plus"></i>
		<a-select
			mode="tags"
			style="width: 500px"
			:token-separators="[',']"
			placeholder="新增成員"
			:options="memberData"
			v-model:value="project.memberList"
			@change="saveProject('MEMBER_LIST')"
		></a-select>
		<div class="arrow">
			<i
				class="fas fa-chevron-up"
				@click="
					changeState(project.projectId);
					isOpen = !isOpen;
				"
				v-if="showSettings[project.projectId]"
			></i>
			<i
				class="fas fa-chevron-down"
				@click="
					changeState(project.projectId);
					isOpen = !isOpen;
				"
				v-else
			></i>
		</div>
		<div class="setting">
			<lale-dropdown :trigger="['click']" class="delete-icon">
				<a class="ant-dropdown-link" @click.prevent> <i class="fas fa-ellipsis-v"></i></a>
				<template #overlay>
					<lale-menu>
						<lale-menu-item key="1" @click="saveProject('IS_DELETED')">delete</lale-menu-item>
					</lale-menu>
				</template>
			</lale-dropdown>
		</div>
	</div>
	<lale-collapse-transition>
		<div class="show-block" v-if="isOpen">
			<div class="phase-block">
				<Phase v-for="phase in AddStore.getPhaseDataMap[project.projectId]" :key="phase.phaseId" :data="phase" />
				<div class="add-block" @click="AddStore.addPhaseName(project)">
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
import { useAddStore } from '@/store/Level4-store.js';
const emit = defineEmits(['deleteProject']);
const AddStore = useAddStore();
const showSettings = reactive({});
const isOpen = ref(false);
const memberData = reactive([
	{
		value: 'FRTEST',
		label: 'FRTEST',
	},
	{
		value: 'FR885',
		label: 'Tim',
	},
]);
const props = defineProps({
	data: {
		type: Object,
		default: () => {},
	},
});
const project = ref(props.data);
const changeState = (projectId) => {
	showSettings[projectId] = !showSettings[projectId];
	changeOpen();
};
const changeOpen = (projectId) => {
	isOpen[projectId] = !isOpen[projectId];
};
const saveProject = async (updateField) => {
	let item = { ...project.value, memberList: JSON.stringify(project.value.memberList) };
	try {
		if (updateField === 'IS_DELETED') {
			const response = await apiPutProjectData({
				phaseId: item.projectId,
				field: updateField,
				value: true,
			});
			if (response.status === 200) {
				emit('deleteProject', item);
				console.log('项目数据已删除:', response);
			}
		} else {
			const response = await apiPutProjectData({
				projectId: item.projectId,
				field: updateField,
				value: item[_.camelCase(updateField)],
			});
			console.log('项目数据已修改:', response);
		}
	} catch (error) {
		console.error('修改项目数据失败:', error);
	}
};
const debounceSaveProject = _.debounce(saveProject, 2000);
</script>
<style scoped lang="scss">
.new-project {
	display: flex;
	padding: 20px;
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
	.add-block {
		margin: 20px 0px 20px 0;
		width: 300px;
		height: 100px;
		background-color: #f2f2f2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		cursor: pointer;
	}
	.add-block p {
		display: flex;
		justify-content: center;
	}
	.add-block i {
		display: flex;
		justify-content: center;
	}
}
</style>

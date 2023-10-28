import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { apiGetPhaseData, apiPostPhaseData, apiPutPhaseData, apiGetItemData, apiPostItemData } from '@/api/level4.js';
import { apiPutItemData } from '@/api/level4.js';

import dayjs from 'dayjs';
class PHASE {
	constructor(projectId) {
		this.phaseId = `NEW_PHASE`;
		this.projectId = projectId;
		this.name = '';
		this.startDate = null;
		this.endDate = null;
		this.isCompleted = false;
		this.isDeleted = false;
		this.sort = 0;
	}
}

class ITEM {
	constructor(phase) {
		this.itemId = `NEW_ITEM_${dayjs().format('YYYYMMDDmmss')}`;
		this.phaseId = phase.phaseId;
		this.name = '';
		this.startDate = phase.startDate;
		this.endDate = phase.endDate;
		this.memberList = this.memberData[0].label;
		this.isCompleted = false;
		this.isDeleted = false;
		this.sort = 0;
		this.description = '';
		this.completedDate = '';
	}
}
export const usePhaseStore = defineStore('phase', {
	state: () => {
		return {
			phaseList: [],
		};
	},
	getters: {
		getPhaseMap() {
			try {
				const phaseDataMap = {};
				this.phaseList.forEach((item) => {
					const projectId = item.projectId;
					if (!phaseDataMap[projectId]) {
						phaseDataMap[projectId] = [];
					}
					phaseDataMap[projectId].push(item);
				});
				return phaseDataMap;
			} catch (error) {
				console.error(error);
			}
		},
	},
	actions: {
		async getPhaseData() {
			try {
				const response = await apiGetPhaseData();
				console.log(response)
				this.phaseList = response.data.data;
				console.log(this.phaseList)
			} catch (error) {
				console.error(error);
			}
		},
		async addPhase(project) {
			try {
				let item = new PHASE(project.projectId);
				const response = await apiPostPhaseData(JSON.stringify(item));
				this.phaseList.unshift(response.data.data.DATA.phase);
				console.log('项目数据已提交:', response);
			} catch (error) {
				console.error('提交项目数据失败:', error);
			}
		},
		deletePhase(phase) {
			phase.isDeleted = true; //先改為true
			this.editPhase(phase, 'IS_DELETED');
		},
		async editPhase(phase, updateField) {
			try {
				const response = await apiPutPhaseData({
					phaseId: phase.phaseId,
					field: updateField,
					value: phase[_.camelCase(updateField)],
				});
				console.log('项目数据已修改:', response);
				if (updateField === 'IS_DELETED') {
					const index = this.phaseList.findIndex((item) => item.phaseId === phase.phaseId);
					if (index !== -1) {
						this.phaseList.splice(index, 1);
					}
				}
			} catch (error) {
				console.error('修改或刪除项目数据失败:', error);
			}
		},
	},
});
export const useItemStore = defineStore('item', {
	state: () => {
		return {
			itemList: [],
			memberData: reactive([
				{
					value: 'FRTEST',
					label: 'FRTEST',
				},
				{
					value: 'FR885',
					label: 'Tim',
				},
			]),
		};
	},
	getters: {
		getItemMap() {
			try {
				const itemDataMap = {};
				this.itemList.forEach((item) => {
					const phaseId = item.phaseId;
					if (!itemDataMap[phaseId]) {
						itemDataMap[phaseId] = [];
					}
					itemDataMap[phaseId].push(item);
				});
				return itemDataMap;
			} catch (error) {
				console.error(error);
			}
		},
	},
	actions: {
		async getItemData() {
			try {
				const response = await apiGetItemData();
				this.itemList = response.data.data;
			} catch (error) {
				console.error(error);
			}
		},
		async addItem(phase) {
			try {
				let fakeItem = new ITEM(phase);
				let item = { ...fakeItem, memberList: JSON.stringify(fakeItem.memberList) };
				const response = await apiPostItemData(JSON.stringify(item));
				console.log(response);
				this.itemList.unshift(response.data.data.DATA.item);
				console.log('项目数据已提交:', response);
			} catch (error) {
				console.error('提交项目数据失败:', error);
			}
		},
		deleteItem(item) {
			item.isDeleted = true; //先改為true
			this.editItem(item, 'IS_DELETED');
		},
		async editItem(inputItem, updateField) {
			try {
				let item = { ...inputItem, memberList: JSON.stringify(inputItem.memberList) };
				const response = await apiPutItemData({
					itemId: item.itemId,
					field: updateField,
					value: item[_.camelCase(updateField)],
				});
				console.log('项目数据已修改:', response);
				if (updateField === 'IS_DELETED') {
					const index = this.itemList.findIndex((el) => el.itemId === item.itemId);
					if (index !== -1) {
						this.itemList.splice(index, 1);
					}
				}
			} catch (error) {
				console.error('修改或刪除项目数据失败:', error);
			}
		},
	},
});

import { defineStore } from 'pinia';
import { apiGetPhaseData, apiPostPhaseData, apiPutPhaseData } from '@/api/level4.js';
export const usePhaseStore = defineStore('phase', {
	state: () => {
		return {
			phaseList: [],
		};
	},

	getters: {
		getPhaseDataMap() {
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
				throw error;
			}
		},
	},
	actions: {
		async getPhaseData() {
			try {
				const response = await apiGetPhaseData();
				console.log(response);
				if (response.data && response.data.data) {
					this.phaseList = response.data.data;
					console.log(this.phaseList);
				} else {
					console.log('没有資料');
				}
			} catch (error) {
				console.error(error);
				throw error;
			}
		},

		async addPhase(project) {
			try {
				const phaseData = {
					phaseId: 'NEW_PHASE',
					projectId: project.projectId,
					name: '',
					startDate: null,
					endDate: null,
					isCompleted: false,
					isDeleted: false,
					sort: 0,
				};
				const response = await apiPostPhaseData(JSON.stringify(phaseData));
				this.phaseList.unshift(response.data.data.DATA.phase);
				console.log('项目数据已提交:', response);
			} catch (error) {
				console.error('提交项目数据失败:', error);
			}
		},

		async editPhase(phase, updateField) {
			try {
				if (updateField === 'IS_DELETED') {
					const response = await apiPutPhaseData({
						phaseId: phase.phaseId,
						field: updateField,
						value: true,
					});
					console.log('项目数据已刪除:', response);
					const index = this.phaseList.findIndex((item) => item.phaseId === phase.phaseId);
					if (index !== -1) {
						this.phaseList.splice(index, 1);
					}
				} else {
					const response = await apiPutPhaseData({
						phaseId: phase.phaseId,
						field: updateField,
						value: phase[_.camelCase(updateField)],
					});
					console.log('项目数据已修改:', response);
				}
			} catch (error) {
				console.error('修改或刪除项目数据失败:', error);
			}
		},
	},
});

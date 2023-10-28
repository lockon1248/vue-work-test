<template>
	<div class="new-phase">
		<div class="phase-inner">
			<div class="phase-container">
				<div class="phase-content-first">
					<lale-textarea
						placeholder="請輸入階段"
						width="250px"
						:autoSize="true"
						v-model="phase.name"
						@input="debounceEditPhase(phase, 'NAME')"
						@blur="phaseStore.editPhase(phase, 'NAME')"
						class="input"
					>
					</lale-textarea>
					<lale-dropdown :trigger="['click']">
						<a class="ant-dropdown-link" @click.prevent> <i class="fas fa-ellipsis-v"></i> </a>
						<template #overlay>
							<lale-menu>
								<lale-menu-item key="1" @click="phaseStore.deletePhase(phase)">delete</lale-menu-item>
							</lale-menu>
						</template>
					</lale-dropdown>
				</div>
				<div class="phase-content-second">
					<lale-date-picker v-model:value="phase.startDate" @change="phaseStore.editPhase(phase, 'START_DATE')" valueFormat="YYYY-MM-DD" :disabledDate="disabledStartDate">
					</lale-date-picker>
					~
					<lale-date-picker v-model:value="phase.endDate" @change="phaseStore.editPhase(phase, 'END_DATE')" valueFormat="YYYY-MM-DD" :disabledDate="disableEndDate"></lale-date-picker>
				</div>
				<div class="add-item">
					<Item v-for="item in itemStore.getItemMap[phase.phaseId]" :key="item.phaseId" :data="item"/>
					<lale-button class="add-new-button" @click="itemStore.addItem(phase)"> Button </lale-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { usePhaseStore,useItemStore } from '@/store/level4-store.js';
import Item from '@/components/Item.vue';
const phaseStore = usePhaseStore();
const itemStore = useItemStore();
const props = defineProps({
	data: {
		type: Object,
		default: () => {},
	},
});
const phase = ref(props.data);
const debounceEditPhase = _.debounce(() => {
	phaseStore.editPhase(phase.value, 'NAME');
}, 2000);
const disabledStartDate = (date) => {
	const EndDate = dayjs(phase.value.endDate);
	const selectedDate = dayjs(date);
	if (selectedDate.isAfter(EndDate, 'day')) {
		return true;
	}
};
console.log(itemStore.getItemMap[phase.value.phaseId])
const disableEndDate = (date) => {
	const startDate = dayjs(phase.value.startDate);
	const selectedDate = dayjs(date);
	if (selectedDate.isBefore(startDate, 'day')) {
		return true;
	}
	return false;
};
</script>
<style scoped lang="scss">
.new-phase {
	display: flex;
	flex-wrap: wrap;

	.phase-inner {
		display: flex;
		flex-direction: column;
		margin: 20px 20px 20px 0;
		width: 300px;
		background-color: #e0e0e0;
	}
	.phase-content-first {
		display: flex;
		justify-content: center;
		.input {
			margin: 5px 0;
		}
	}
	.phase-content-first i {
		color: black;
	}
	.phase-content-first a {
		margin: 15px;
	}
	.phase-content-second {
		display: flex;
		justify-content: center;
		margin-bottom: 5px;
		.lale-datepicker-wrap-default {
			width: 135px;
		}
	}
	.add-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.add-new-button {
			width: 250px;
			margin: 20px;
			background-color: #f2f2f2;
			color: #A2B3BB;
			border: 1px solid #A2B3BB;
		}
	}
}
</style>

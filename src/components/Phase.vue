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
						@input="phaseStore.editPhase(phase, 'NAME')"
						@blur="debounceEditPhase(phase, 'NAME')"
						class="input"
					>
					</lale-textarea>
					<lale-dropdown :trigger="['click']">
						<a class="ant-dropdown-link" @click.prevent> <i class="fas fa-ellipsis-v"></i> </a>
						<template #overlay>
							<lale-menu>
								<lale-menu-item key="1" @click="phaseStore.editPhase(phase, 'IS_DELETED')">delete</lale-menu-item>
							</lale-menu>
						</template>
					</lale-dropdown>
				</div>
				<div class="phase-content-second">
					<lale-date-picker v-model:value="phase.startDate" @change="phaseStore.editPhase(phase, 'START_DATE')" valueFormat="YYYY-MM-DD" :disabled-date="disabledDate"> </lale-date-picker>
					~
					<lale-date-picker v-model:value="phase.endDate" @change="phaseStore.editPhase(phase, 'END_DATE')" valueFormat="YYYY-MM-DD" :disabled-date="disabledDate"></lale-date-picker>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { usePhaseStore } from '@/store/Level4-store.js';
const phaseStore = usePhaseStore();
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
const disabledDate = (date) => {
	const now = dayjs();
	const selectedDate = dayjs(date);
	if (selectedDate.isBefore(now, 'day')) {
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
}
</style>

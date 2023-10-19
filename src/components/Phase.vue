<template>
	<div class="add-new">
		<div class="add-inner">
			<div class="add-container">
				<div class="add-content-first">
					<lale-textarea
						placeholder="請輸入階段"
						width="250px"
						:autoSize="true"
						v-model="phase.name"
						@input="AddStore.SavePhase(phase, 'NAME')"
						@blur="debounceSavePhase(phase, 'NAME')"
						class="input"
					>
					</lale-textarea>
					<lale-dropdown :trigger="['click']">
						<a class="ant-dropdown-link" @click.prevent> <i class="fas fa-ellipsis-v"></i> </a>
						<template #overlay>
							<lale-menu>
								<lale-menu-item key="1" @click="AddStore.SavePhase(phase, 'IS_DELETED')">delete</lale-menu-item>
							</lale-menu>
						</template>
					</lale-dropdown>
				</div>
				<div class="add-content-second">
					<lale-date-picker v-model:value="phase.startDate" @change="AddStore.SavePhase(phase, 'START_DATE')" valueFormat="YYYY-MM-DD" labelWidth="10"></lale-date-picker>
					~
					<lale-date-picker v-model:value="phase.endDate" @change="AddStore.SavePhase(phase, 'END_DATE')" valueFormat="YYYY-MM-DD" labelWidth="10"></lale-date-picker>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { useAddStore } from '@/store/Level4-store.js';
const AddStore = useAddStore();
const phase = ref(props.data);
const props = defineProps({
	data: {
		type: Object,
		default: () => {},
	},
});
const debounceSavePhase = _.debounce(() => {
	AddStore.SavePhase(phase.value, 'NAME');
}, 2000);
</script>
<style scoped lang="scss">
.add-new {
	display: flex;
	flex-wrap: wrap;

	.add-inner {
		display: flex;
		flex-direction: column;
		margin: 20px 20px 20px 0;
		width: 300px;
		background-color: #e0e0e0;
	}
	.add-content-first {
		display: flex;
		justify-content: center;
		.input {
			margin: 5px 0;
		}
	}
	.add-content-first i {
		color: black;
	}
	.add-content-first a {
		margin: 15px;
	}
	.add-content-second {
		display: flex;
		justify-content: center;
		margin-bottom: 5px;
		.lale-datepicker-wrap-default {
			width: 135px;
		}
	}
}
</style>

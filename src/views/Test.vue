<template>
	<div>
		<lale-date-picker :disabled-date="disabledDate" v-model:value="value1"></lale-date-picker>
		<lale-date-picker v-model:value="value2" :disabled-date="disabledDate2"></lale-date-picker>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref(dayjs());
const value2 = ref(null);
const disabledDate = (date) => {
	const now = dayjs();
	const selectedDate = dayjs(date);
	/// 将 selectedDate 变量设置为 date 参数的值
	if (selectedDate.isBefore(now, 'day')) {
		return true;
	}
	return false;
};

const disabledDate2 = () => {
	if (value1.value > value2.value) {
		return false;
	}
	return true;
};
const a = dayjs().subtract(1, 'month').format('YYYY-MM-DD');
console.log(a);
</script>

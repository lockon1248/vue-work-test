<template>
	<div>{{ showName }}</div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
	data: {
		type: Object,
		default: () => {},
	},
});
const showName = computed(() => props.data?.name);
</script>

<style lang="scss" scoped></style>

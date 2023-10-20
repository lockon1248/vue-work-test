<template>
	<div>Hello {{ sampleName }}</div>
	<HomeItem :data="item" v-for="item in itemList" :key="item.key" />
	<router-link to="/level1">Level1</router-link><br>
	<router-link to="/homework2">homework2</router-link><br>
	<router-link to="/level2">Level2</router-link><br>
	<router-link to="/level3">Level3</router-link><br>
	<router-link to="/level4">Level4</router-link><br>
	<router-link to="/project">cop</router-link><br>
	<router-link to="/phase">phase</router-link><br>
	<router-link to="/test">test</router-link><br>
</template>

<script setup>
import { ref, computed } from 'vue';
import HomeItem from '@/components/HomeItem.vue';
import { useSampleStore } from '@/store/sampleStore.js';
import { apiGetSampleData } from '@/api/sample.js';

const itemList = ref([
	{
		key: 'morning',
		name: '早安',
	},
	{
		key: 'evening',
		name: '晚安',
	},
]);

// 使用 store 範例
const storeSample = useSampleStore();
const sampleName = computed(() => storeSample.name);
storeSample.changeName('World');

// 呼叫 api 範例
const getSampleDate = () => {
	apiGetSampleData().then((res) => {
		res.data.data;
	});
};
getSampleDate();
</script>

<style lang="scss" scoped></style>

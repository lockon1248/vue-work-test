<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

async function ConnectionData() {
	try {
		const response = await axios.get('/api/figma/viewFile.json');
		const newData = response.data;
		// console.log(newData);
		// const divMap = {};
		// const depMap = {};
		console.log(newData);
		let b = _.keyBy(newData, 'divId');
		console.log(b); //返回一個物件
		let a = _.mapValues(_.keyBy(newData, 'divId'), 'depFileRep');
		console.log(a); //返回一個物件
		let c = Object.values(a);
		console.log(c); //物件轉成陣列
		let e = [];
		Object.values(a).forEach((item) => {
			e = e.concat(item); //陣列的物件相加
		});
		console.log(e);
		// const a = {};
		// a = _.mapValues(newData, 'name');
		// console.log(a);

		// newData.forEach((item) => {
		// 	divMap[item.divId] = item.depFileRep;
		// 	item.depFileRep.forEach((depItem) => {
		// 		depMap[depItem.depId] = depItem.vwFlFile;
		// 	});
		// });
		// console.log(response)
		// console.log(typeof response)
		// console.log(newData);
		// console.log(typeof newData);
		// console.log(divMap);
		// console.log(typeof divMap)
		// console.log(depMap);
		// console.log(typeof depMap)
		// depMap.keys();
	} catch (error) {
		console.error(error);
	}
}

onMounted(() => {
	ConnectionData();
});
</script>

<template>
	<div></div>
</template>

<style scoped lang="scss"></style>

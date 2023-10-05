<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

async function ConnectionData() {
	try {
		const response = await axios.get('/api/figma/viewFile.json');
		console.log(response);
		const newData = response.data;
		const divMap = {};
		const depMap = {};
		newData.forEach((item) => {
			divMap[item.divId] = item.depFileRep;
			item.depFileRep.forEach((depItem) => {
				depMap[depItem.depId] = depItem.vwFlFile;
			});
		});
		console.log(divMap);
		console.log(depMap);
	} catch (error) {
		console.error(error);
	}
}

// async function ConnectionData() {
//   try {
//     const response = await axios.get('/api/figma/viewFile.json');
//     const newData = response.data;

//     const divMap = {};
//     const depMap = {};

//     newData.forEach((item) => { // 将 division 改为 item
//       const divId = item.divId;
//       const depFileRep = {};

//       item.depFileRep.forEach((department) => {
//         const depId = department.depId;

//         // 在 depMap 中动态创建 depId 条目
//         depMap[depId] = department.vwFlFile;
//       });

//       divMap[divId] = {
//         depFileRep,
//         ...item,
//       };
//     });

//     console.log(divMap);
//     console.log(depMap);
//   } catch (error) {
//     console.error(error);
//   }
// }

onMounted(() => {
	ConnectionData();
});
</script>

<template>
	<div></div>
</template>

<style scoped lang="scss"></style>

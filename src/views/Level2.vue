<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

async function ConnectionData() {
	try {
		const response = await axios.get('/api/figma/viewFile.json');
		console.log(response);
		console.log(typeof response)
		const newData = response.data;
		console.log(newData);
		console.log(typeof newData);
		const divMap = {};
		const depMap = {};
		newData.forEach((item) => {
			divMap[item.divId] = item.depFileRep;
			item.depFileRep.forEach((depItem) => {
				depMap[depItem.depId] = depItem.vwFlFile;
			});
		});
		console.log(divMap);
		console.log(typeof divMap)
		console.log(depMap);
		console.log(typeof depMap)
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

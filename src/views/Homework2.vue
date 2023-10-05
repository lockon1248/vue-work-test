<script setup>
import axios from 'axios';
import { ref } from 'vue';
// const data = ref({
// 	id: 'EX-A001',
// 	name: '押出機',
// 	status: 'Running',
// 	location: '台中',
// 	keeper: 'Make',
// 	ip: '192.168.9.1',
// });
const dataList = ref([]);
axios
	.get('http://192.168.9.101:8080/IMES_DEMO/practice.json')
	.then(function (response) {
		if (response.data.length > 0) {
			response.data.forEach((element) => {
				dataList.value.push({
					...element,
					isEditing: false,
				});
			});
		}
		// console.log(dataList);
	})
	.catch(function (error) {
		console.log('Error occurred:', error);
	});

const editData = (item) => {
	// 全部重置為false
	dataList.value.forEach((dataItem) => {
		if (dataItem.id === item.id) {
			dataItem.isEditing = !dataItem.isEditing;
		}else{
			dataItem.isEditing = false;
		}
		
	});

};
</script>
<template>
	<div class="mainBody" v-for="(item, index) in dataList" :key="index">
		<div class="inner-one">
			<div>
				<h2>{{ item.id }}</h2>
			</div>
			<div class="inner-one-block">
				<p>{{ item.name }}</p>
				<div class="line"></div>
				<p>{{ item.status }}</p>
			</div>
		</div>
		<div class="inner-two">
			<div class="inner">
				<div class="title">
					<h2>位置</h2>
				</div>
				<div class="content">
					<p v-if="!item.isEditing">{{ item.location }}</p>
					<input v-else v-model="item.location" />
				</div>
			</div>
			<div class="inner">
				<div class="title">
					<h2>保管人</h2>
				</div>
				<div class="content">
					<p v-if="!item.isEditing">{{ item.keeper }}</p>
					<input v-else v-model="item.keeper" />
				</div>
			</div>
			<div class="inner">
				<div class="title">
					<h2>ip</h2>
				</div>
				<div class="content">
					<p v-if="!item.isEditing">{{ item.ip }}</p>
					<input v-else v-model="item.ip" />
				</div>
			</div>
		</div>
		<div class="icon-block">
			<div @click="editData(item)" class="icon">
				<i class="fas fa-edit" style="color: #165eda;" v-if="!item.isEditing"></i>
				<i class="far fa-save" style="color: #165eda;" v-else></i>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
// @import '@/assets/plugins/fontawesome-pro-5.13.0-web/css/all.min.css';

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	h2 {
		text-align: center;
	}
	p {
		text-align: center;
	}
}
.mainBody {
	margin: auto;
	display: flex;
	border: 1px solid black;
	width: 900px;
	justify-content: space-evenly;
	.inner-one {
		height: 150px;
		width: 175px;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		align-self: center;
		.inner-one-block {
			border-top: 1px solid black;
			display: flex;
			flex-grow: 1;
			justify-content: space-evenly;
			.line {
				width: 1px;
				position: relative;
				border: 0.5px dashed black;
				margin: 10px 0;
			}
			p {
				display: flex;
				justify-content: center;
				align-self: center;
			}
		}
	}
	.inner-two {
		display: flex;
		.inner {
			display: flex;
			flex-direction: column;
			width: 200px;
			height: 200px;
			border-left: 1px solid black;
			border-right: 1px solid black;
		}
		.inner:nth-child(2) {
			border: 0;
		}
		.title {
			background-color: lightgrey;
		}
		.title h2 {
			padding: 10px 0;
			border-bottom: 1px solid black;
		}
		.content {
			display: flex;
			align-items: center;
			flex-grow: 1;
			align-self: center;
			justify-content: center;
			input {
				outline-style: none;
				border: 0px;
				text-align: center;
				border-bottom: 1px solid rgb(10, 170, 245);
			}
		}
	}
	.icon-block {
		display: flex;
		justify-content: center;
		align-items: center;
		.icon {
			cursor: pointer;
		}
	}
}
@media screen and (max-width: 768px) {
	.mainBody {
		flex-direction: column;
		width: 600px;
		.inner-one {
			width: 540px;
			margin: 20px;
			height: 200px;
			.inner-one-block {
				justify-content: space-evenly;
			}
		}
		.inner-two {
			justify-content: center;
			.inner {
				border: 0;
				height: auto;
				margin-bottom: 10px;
			}
			.title {
				background-color: #fff;
			}
			.title h2 {
				border: 0;
			}
		}
		.icon {
			display: none;
		}
	}
}
</style>

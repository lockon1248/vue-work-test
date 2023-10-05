<script setup>
import { ref } from 'vue';
		const visible = ref(false);
		const activeKey = ref('1');
		const showModal = () => {
			visible.value = true;
		};
		const handleOk = (e) => {
			console.log(e);
			visible.value = false;
		};

</script>
<template>
	<a-button type="primary" @click="showModal">Open Modal</a-button>
	<a-modal v-model:visible="visible" title="Title" @ok="handleOk" cancelText="取消" okText="確認">
		<a-tabs v-model:activeKey="activeKey">
			<a-tab-pane key="1" tab="A頁籤">
				<div class="title">
					<h2>標題</h2>
				</div>
				<div class="container">
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</div>
			</a-tab-pane>
			<a-tab-pane key="2" tab="B頁籤" force-render>
				<div class="title">
					<h2>標題</h2>
				</div>
				<div class="container">
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</div>
			</a-tab-pane>
		</a-tabs>
	</a-modal>
</template>
<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
h2 {
	margin: 0;
	font-size: 16px;
}
.ant-modal {
	top: 0px;
	height: 100vh;
	padding-bottom: 0;

	.ant-modal-title {
		text-align: center;
	}
	.ant-modal-header {
		border-radius: 15px 15px 0 0;
	}
	.ant-modal-content {
		display: flex;
		flex-direction: column;
		height: 100%;
		border-radius: 15px;
	}
	.ant-modal-body {
		padding: 0 24px;
		flex-grow: 1;
	}
	.container {
		overflow-y: auto;
		max-height: calc(100vh - 220px);
	}
	.ant-modal-footer {
		display: flex;
		justify-content: center;
	}
}
.ant-btn-primary {
	border-radius: 5px;
	border: rgb(25, 205, 218);
	background-color: rgb(25, 205, 218);
}
.ant-tabs-tab-btn:focus {
	color: rgb(25, 205, 218) !important;
}
.ant-tabs-tab-btn:hover {
	color: rgb(25, 205, 218) !important;
}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
	color: rgb(25, 205, 218);
}
.ant-tabs-ink-bar {
	background: rgb(25, 205, 218);
}

@media screen and (max-width: 768px) {
	.ant-modal {
		margin: 0 auto;
	}
}
</style>

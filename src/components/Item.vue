<template>
	<div class="item-container">
		<div class="item-name">
			<div class="cross">
				<i class="fas fa-arrows-alt"></i>
			</div>
			<lale-input placeholder="請輸入Project名稱" class="item-input" v-model="item.name" style="width: 100%" @blur="itemStore.editItem(item, 'NAME')" @input="debounceEditItem(item, 'NAME')" />
			<div class="edit">
				<i class="fas fa-edit"></i>
			</div>
			<div class="arrow">
				<i :class="['fas', isOpen ? 'fa-chevron-up' : ' fa-chevron-down']" @click="changeOpen"></i>
			</div>
			<div class="setting">
				<lale-dropdown :trigger="['click']" class="delete-icon">
					<a class="ant-dropdown-link" @click.prevent> <i class="fas fa-ellipsis-v"></i></a>
					<template #overlay>
						<lale-menu>
							<lale-menu-item key="1" @click="itemStore.deleteItem(item)">delete</lale-menu-item>
						</lale-menu>
					</template>
				</lale-dropdown>
			</div>
		</div>
		<div class="item-member">
			<lale-collapse-transition>
				<div class="show-control" v-if="isOpen">
					<a-select
						mode="tags"
						placeholder="新增成員"
						class="member-list"
						:options="itemStore.memberData"
						v-model:value="item.memberList"
						@change="itemStore.editItem(item, 'MEMBER_LIST')"
						:bordered="false"
					></a-select>
					<div class="finish-block">
						<span>未完成</span>
						<div class="finish-date">
							<span>{{ item.startDate === null ? '開始日期' : item.startDate }}</span>
							~
							<span>{{ item.endDate === null ? '結束日期' : item.endDate }}</span>
						</div>
					</div>
				</div>
			</lale-collapse-transition>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { useItemStore } from '@/store/level4-store.js';
const itemStore = useItemStore();
const props = defineProps({
	data: {
		type: Object,
		default: () => {},
	},
});
console.log(itemStore.getItemMap);
const item = ref(props.data);
const isOpen = ref(false);
const changeOpen = () => {
	isOpen.value = !isOpen.value;
};
const debounceEditItem = _.debounce(() => {
	itemStore.editItem(item.value, 'NAME');
}, 2000);
</script>
<style scoped lang="scss">
.item-container {
	width: 280px;
	border: 1px solid transparent;
	background-color: #ffffff;
	.item-name {
		display: flex;
		.cross i {
			padding: 0 10px;
		}
		.edit i {
			padding: 0 10px;
		}
		.arrow {
			cursor: pointer;
		}
		.setting i {
			padding: 0 10px;
			color: black;
		}
	}
	.show-control {
		display: flex;
		flex-direction: column;
		.member-list {
			margin: 20px 0;
			border: 1px solid transparent;
		}
	}
	.finish-block {
		display: flex;
		justify-content: space-between;
		.finish-date {
			display: flex;
			justify-content: space-between;
		}
	}
}
</style>

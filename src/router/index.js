import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '/level1',
		name: 'Level1',
		component: () => import('@/views/Level1.vue'),
	},
	{
		path: '/homework2',
		name: 'Homework2',
		component: () => import('@/views/Homework2.vue'),
	},
	{
		path: '/level2',
		name: 'Level2',
		component: () => import('@/views/Level2.vue'),
	},
	{
		path: '/level3',
		name: 'Level3',
		component: () => import('@/views/Level3.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;

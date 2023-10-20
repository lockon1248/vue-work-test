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
	{
		path: '/test',
		name: 'Test',
		component: () => import('@/views/Test.vue'),
	},
	{
		path: '/level4',
		name: 'Level4',
		component: () => import('@/views/Level4.vue'),
	},
	{
		path: '/project',
		name: 'Project',
		component: () => import('@/components/Project.vue'),
	},
	{
		path: '/Phase',
		name: 'Phase',
		component: () => import('@/components/Phase.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;

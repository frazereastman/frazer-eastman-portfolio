import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import MyWorkView from '../views/MyWorkView.vue';
import AboutMeView from '../views/AboutMeView.vue';
import BlogsView from '../views/BlogsView.vue';
import BlogPageView from '@/views/BlogPageView.vue';

const routes = [
	{
		path: '/',
		component: HomeView,
	},
	{
		path: '/my-work',
		name: 'my-work',
		component: MyWorkView,
	},
	{
		path: '/about-me',
		name: 'about-me',
		component: AboutMeView,
	},
	{
		path: '/blogs',
		name: 'blogs',
		component: BlogsView,
	},
	{
		path: '/blogs/:name',
		name: 'blog-detail',
		component: BlogPageView,
	},
	{
		path: '/projects',
		name: 'projects',
		component: () => import('@/views/ProjectsView.vue'),
	},
	{
		path: '/projects/:name',
		name: 'project-detail',
		component: () => import('@/views/ProjectPageView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

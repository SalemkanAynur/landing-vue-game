import {createWebHistory, createRouter } from "vue-router";
import MapGame from '@/pages/MapGame';
import OldMap from '@/pages/OldMap';

const routes = [
	{
		path: '/',
		component: MapGame
	},	
	{
		path: '/old',
		component: OldMap
	}
];

const router = createRouter({
	routes,
  history: createWebHistory(),
});

export default router;
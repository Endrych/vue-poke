import { createRouter, createWebHistory } from "vue-router";
import PokeList from "./pages/PokeList.vue";
import { ROUTE_PATH } from "./constants";

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: ROUTE_PATH.POKE_LIST,
			component: PokeList,
		},
	],
});

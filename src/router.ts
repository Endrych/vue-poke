import { createRouter, createWebHistory } from "vue-router";
import PokeList from "./pages/PokeList.vue";
import PokeDetail from "./pages/PokeDetail.vue";
import { ROUTE_PATH } from "./constants";

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: ROUTE_PATH.POKE_LIST,
			component: PokeList,
		},
		{
			path: ROUTE_PATH.POKE_DETAIL,
			component: PokeDetail,
			props: true,
		},
	],
});

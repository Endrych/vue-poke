import { createStore, Store } from "vuex";
import { getIndexFromPokemonUrl } from "../utils";
import { InjectionKey } from "vue";
import { State } from "../models/state.model";
import RestClient from "../api/RestClient";

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

const client = new RestClient();

const store = createStore<State>({
	state: {
		loaded: false,
		items: [],
		previousUrl: null,
		nextUrl: null,
	},
	mutations: {
		setLoaded(state, payload) {
			state.loaded = payload;
		},
		setResultData(state, payload) {
			state.previousUrl = payload.previous;
			state.nextUrl = payload.next;
			state.items = payload.results.map((r: any) => ({
				name: r.name,
				url: r.url,
				index: getIndexFromPokemonUrl(r.url),
			}));
			state.loaded = true;
		},
	},
	actions: {
		async loadItems({ commit }) {
			commit("setLoaded", false);
			const result = await client.getPokemons(null);
			commit("setResultData", result);
		},
		async previousItems({ commit, state }) {
			if (state.previousUrl) {
				commit("setLoaded", false);
				const result = await client.getPokemons(state.previousUrl);
				commit("setResultData", result);
			}
		},
		async nextItems({ commit, state }) {
			if (state.nextUrl) {
				commit("setLoaded", false);
				const result = await client.getPokemons(state.nextUrl);
				commit("setResultData", result);
			}
		},
	},
	getters: {
		loaded(state) {
			return state.loaded;
		},
		pokemons(state) {
			return state.items;
		},
		isFirstPage(state) {
			return state.previousUrl === null;
		},
		isLastPage(state) {
			return state.nextUrl === null;
		},
	},
});

export default store;

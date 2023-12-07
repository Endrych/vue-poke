import { createStore } from "vuex";
import { mapPokemonsResult } from "../utils";
import { State } from "../models/state.model";
import RestClient from "../api/RestClient";
import { PokemonsResult } from "../models/pokemons-result.model";
import { Pokemon } from "../models/pokemon.model";

const client = new RestClient();

const store = createStore<State>({
	state: {
		loaded: false,
		pokemons: [],
		previousUrl: null,
		nextUrl: null,
		pokemon: null,
	},
	mutations: {
		clearPokemon(state) {
			state.pokemon = null;
		},
		setLoaded(state, payload) {
			state.loaded = payload;
		},
		setResultData(state, payload: PokemonsResult) {
			state.previousUrl = payload.previous;
			state.nextUrl = payload.next;
			state.pokemons = mapPokemonsResult(payload.results);
			state.loaded = true;
		},
		setPokemon(state, payload: Pokemon) {
			state.pokemon = payload;
		},
	},
	actions: {
		async loadPokemon({ commit }, id: number) {
			commit("clearPokemon");
			const result = await client.getPokemon(id);
			console.log(result);
			commit("setPokemon", result);
		},
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
			return state.pokemons;
		},
		isFirstPage(state) {
			return state.previousUrl === null;
		},
		isLastPage(state) {
			return state.nextUrl === null;
		},
		pokemon(state) {
			return state.pokemon;
		},
	},
});

export default store;

import axios from "axios";
import { LIST_LIMIT } from "../constants";
import { REST_API } from "../env.json";
import { PokemonsResult } from "../models/pokemons-result.model";
import { Pokemon } from "../models/pokemon.model";

export default class {
	async getPokemons(url: string | null): Promise<PokemonsResult> {
		const getUrl = url ?? `${REST_API}/pokemon/?limit=${LIST_LIMIT}`;
		const result = await axios.get(getUrl);
		if (result.status == 200) {
			return {
				...result.data,
			};
		} else {
			throw new Error("Cant't getPokemons result");
		}
	}

	async getPokemon(id: number): Promise<Pokemon> {
		const result = await axios.get(`${REST_API}/pokemon/${id}`);
		if (result.status == 200) {
			return {
				...result.data,
			};
		} else {
			throw new Error("Cant't getPokemon result");
		}
	}
}

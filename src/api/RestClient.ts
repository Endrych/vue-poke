import axios from "axios";
import { LIST_LIMIT } from "../constants";
import { REST_API } from "../env.json";
import { PokemonResult } from "../models/pokemon-result.model";

export default class {
	async getPokemons(url: string | null): Promise<PokemonResult> {
		const getUrl = url ?? `${REST_API}/pokemon/?limit=${LIST_LIMIT}`;
		const result = await axios.get(getUrl);
		if (result.status == 200) {
			return {
				...result.data,
			};
		} else {
			throw new Error("Cant't get result");
		}
	}
}

import axios from "axios";
import { LIST_LIMIT } from "../constants";
import { REST_API } from "../env.json";
import { PokemonsResult } from "../models/pokemons-result.model";
import { Pokemon } from "../models/pokemon.model";
import { PokemonResult } from "../models/pokemon-result.model";
import { Speciality } from "../models/speciality.model";
import { findByLang } from "../utils";

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
			const data: PokemonResult = result.data;

			let abilitiesPromises: Array<Promise<Speciality>> = [];
			data.abilities.forEach((element) => {
				abilitiesPromises.push(this.getSpeciality(element.ability.url));
			});

			let movesPromises: Array<Promise<Speciality>> = [];
			data.moves.forEach((element) => {
				movesPromises.push(this.getSpeciality(element.move.url));
			});

			const abilities = await Promise.all(abilitiesPromises);
			const moves = await Promise.all(movesPromises);

			return {
				id: data.id,
				height: data.height,
				weight: data.weight,
				name: data.name,
				abilities: abilities,
				moves: moves,
				sprites: Object.values(data.sprites).filter(
					(s) => typeof s === "string"
				),
			};
		} else {
			throw new Error("Cant't getPokemon result");
		}
	}

	async getSpeciality(url: string): Promise<Speciality> {
		const result = await axios.get(url);
		if (result.status == 200) {
			const { data } = result;
			const name = data.names.find((e: any) => findByLang(e))?.name;
			const effect = data["effect_entries"].find((e: any) =>
				findByLang(e)
			)?.effect;

			return {
				name,
				effect,
			};
		} else {
			throw new Error("Cant't getSpeciality result");
		}
	}
}

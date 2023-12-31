import { POKEMON_IMAGE_URL_BASE } from "./constants";
import { PokemonListItem } from "./models/pokemon-list-item.model";
import { PokemonsResults } from "./models/pokemons-result.model";

export const getPokemonImage = (index: Number): string => {
	return `${POKEMON_IMAGE_URL_BASE}/${index}.png`;
};

export const getIndexFromPokemonUrl = (url: string): Number => {
	const splittedUrl = url.split("/");
	return parseInt(splittedUrl[splittedUrl.length - 2]);
};

export const mapPokemonsResult = (
	results: PokemonsResults
): Array<PokemonListItem> =>
	results.map((r) => ({
		name: r.name,
		url: r.url,
		index: getIndexFromPokemonUrl(r.url),
	}));

export const findByLang = (entity: any, lang = "en") =>
	entity.language.name === lang;

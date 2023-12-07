import { PokemonListItem } from "./pokemon-list-item.model";
import { Pokemon } from "./pokemon.model";

export interface State {
	loaded: boolean;
	pokemons: Array<PokemonListItem>;
	previousUrl: string | null;
	nextUrl: string | null;
	pokemon: Pokemon | null;
}

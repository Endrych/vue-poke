import { PokemonListItem } from "./pokemon-list-item.model";

export interface State {
	loaded: boolean;
	pokemons: Array<PokemonListItem>;
	previousUrl: string | null;
	nextUrl: string | null;
}

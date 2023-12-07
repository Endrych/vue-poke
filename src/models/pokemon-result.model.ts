export type PokemonResults = Array<{
	name: string;
	url: string;
}>;

export interface PokemonResult {
	count: Number;
	next: string | null;
	previous: string | null;
	results: PokemonResults;
}

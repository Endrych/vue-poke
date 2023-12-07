export type PokemonsResults = Array<{
	name: string;
	url: string;
}>;

export interface PokemonsResult {
	count: Number;
	next: string | null;
	previous: string | null;
	results: PokemonsResults;
}

export interface PokemonResult {
	count: Number;
	next: string | null;
	previous: string | null;
	results: Array<{ name: string; url: string }>;
}

export interface PokemonResult {
	id: number;
	height: number;
	weight: number;
	name: string;
	abilities: Array<{ ability: { name: string; url: string } }>;
	moves: Array<{ move: { name: string; url: string } }>;
	sprites: [];
}

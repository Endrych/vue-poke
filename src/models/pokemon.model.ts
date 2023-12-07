import { Speciality } from "./speciality.model";

export interface Pokemon {
	id: number;
	height: number;
	weight: number;
	name: string;
	abilities: Array<Speciality>;
	moves: Array<Speciality>;
	sprites: Array<string>;
}

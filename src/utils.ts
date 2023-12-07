export const getPokemonImage = (index: Number): string => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
};

export const getIndexFromPokemonUrl = (url: string): Number => {
	const splittedUrl = url.split("/");
	return parseInt(splittedUrl[splittedUrl.length - 2]);
};

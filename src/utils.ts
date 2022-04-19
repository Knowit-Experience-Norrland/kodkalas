/**
 * extracts the id from the pokemon url
 * @param url
 */
export const extractIdFromUrl = (url: string) => {
	const paths = url.split('/');
	return paths[paths.length - 2];
};

/**
 *
 * @param id of the pokemon
 * @returns a url to the image
 */
export const getImageUrlById = (id: string) => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

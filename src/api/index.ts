import { extractIdFromUrl, getImageUrlById } from '../utils';

export const initialSearchValue: PokemonList = {
	count: 0,
	next: null,
	previous: null,
	results: [],
};

export const api = {
	getPokemonsList: async (): Promise<PokemonList> => {
		const res = await fetch('https://pokeapi.co/api/v2/pokemon');
		if (res.ok && res.status === 200) {
			const data = await res.json();
			const results = data.results.map((item) => {
				const id = extractIdFromUrl(item.url);
				return {
					...item,
					imageUrl: getImageUrlById(id),
				};
			});
			const list = {
				...data,
				results,
			};
			console.log({ list });
			return list;
		} else {
			return initialSearchValue;
		}
	},
	getPokemon: async (idOrName: string): Promise<Pokemon> => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
		if (res.ok && res.status === 200) {
			const data = await res.json();
			const pokemon = {
				...data,
				imageUrl: getImageUrlById(data.id),
			};
			console.log({ pokemon });
			return pokemon;
		}
	},
};

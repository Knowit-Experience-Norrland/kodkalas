/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

type PokemnTypeName =
	| 'water'
	| 'grass'
	| 'electric'
	| 'ice'
	| 'fighting'
	| 'poison'
	| 'ground'
	| 'flying'
	| 'psychic'
	| 'bug'
	| 'rock'
	| 'ghost'
	| 'dark'
	| 'dragon'
	| 'steel'
	| 'fairy';

type PokemonType = {
	slot: number;
	type: {
		name: PokemnTypeName;
		url: string;
	};
};

type PokemonStat = {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
};

type PokemonMove = {
	move: {
		name: string;
		url: string;
	};
	version_group_details: any;
};

type Pokemon = {
	id: number;
	name: string;
	imageUrl: string;
	types: PokemonType[];
	stats: PokemonStat[];
	moves: PokemonMove[];
};

interface PokemonList {
	count: number;
	next: string | null;
	previous: string | null;
	results: Array<{
		name: string;
		imageUrl: string;
		url: string;
	}>;
}

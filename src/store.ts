import { writable } from 'svelte/store';
import { initialSearchValue } from './api';

export const PokemonList = writable<PokemonList>(initialSearchValue);
export const Pokemon = writable<Pokemon | undefined>(undefined);

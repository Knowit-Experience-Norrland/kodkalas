<script lang="ts">
	import { onMount } from 'svelte';
	import { api } from '../api';
	import { PokemonList, Pokemon } from '../store';
	import PokemonCard from '../components/PokemonCard.svelte';
	import { extractIdFromUrl } from '../utils';
	import Grid from '../components/Grid.svelte';
	import Modal from '../components/Modal.svelte';
	let inputText = '';

	const handleSubmit = async () => {
		const pokemon = await api.getPokemon(inputText);
		Pokemon.update(() => pokemon);
	};

	const handlePokemonClick = async (id: string) => {
		const pokemon = await api.getPokemon(id);
		Pokemon.update(() => pokemon);
	};

	const clearPokemon = () => Pokemon.update(() => undefined);

	onMount(async () => {
		const list = await api.getPokemonsList();
		PokemonList.update(() => list);
	});
</script>

<!-- <form on:submit|preventDefault={handleSubmit}>
	<input type="text" placeholder="Enter pokemon name" bind:value={inputText} />
	<button type="submit">Search</button>
</form> -->

<!-- {#if !$Pokemon} -->
<div class="gridContainer">
	<Grid colSize="sm">
		{#each $PokemonList.results as result (result.name)}
			<PokemonCard {result} />
		{/each}
	</Grid>
</div>
<!-- {/if} -->

<!-- {#if $Pokemon}
	<button on:click={clearPokemon}>Back to list</button>
	<h2>Pokemon</h2>
	<h3>{$Pokemon.name}</h3>
	<img src={$Pokemon.imageUrl} alt="pokemon" />
	<p>
		Types: {#each $Pokemon.types as t (t.type.name)}
			{t.type.name},{' '}
		{/each}
	</p>
{/if} -->
<style>
	.gridContainer {
		padding: 3rem;
	}
</style>

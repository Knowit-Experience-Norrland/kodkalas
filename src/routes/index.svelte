<script lang="ts">
	import { onMount } from 'svelte';
	import { api } from '../api';
	import { PokemonList, Pokemon } from '../store';
	import PokemonCard from '../components/PokemonCard.svelte';
	import Grid from '../components/Grid.svelte';
	let inputText = '';

	let pokemon;
	const handleSubmit = async () => {
		if (inputText) pokemon = await api.getPokemon(inputText);
		else {
			pokemon = undefined;
			const list = await api.getPokemonsList();
			PokemonList.update(() => list);
		}
	};

	onMount(async () => {
		const list = await api.getPokemonsList();
		PokemonList.update(() => list);
	});
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" placeholder="Enter pokemon name" bind:value={inputText} />
	<button type="submit">Search</button>
</form>
<div class="gridContainer">
	<Grid colSize="sm">
		{#if !pokemon}
			{#each $PokemonList.results as result (result.name)}
				<PokemonCard {result} />
			{/each}
		{:else}
			<PokemonCard
				result={{
					name: pokemon.name,
					imageUrl: pokemon.imageUrl,
					url: 'https://pokeapi.co/api/v2/pokemon/' + pokemon.id,
				}}
			/>
		{/if}
	</Grid>
</div>

<style>
	.gridContainer {
		padding: 3rem;
	}
</style>

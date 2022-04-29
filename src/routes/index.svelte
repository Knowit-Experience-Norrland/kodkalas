<script lang="ts">
	import { extractIdFromUrl } from '../utils';
	import { onMount } from 'svelte';
	import { api } from '../api';
	import { PokemonList, Pokemon } from '../store';
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

<h1>Welcome to SvelteKit KodKalas edition</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" placeholder="Enter pokemon name" bind:value={inputText} />
	<button type="submit">Search</button>
</form>

{#if !$Pokemon}
	<h2>PokemonList</h2>
	{#each $PokemonList.results as result (result.name)}
		<div on:click={() => handlePokemonClick(extractIdFromUrl(result.url))}>
			<h3>{result.name}</h3>
			<img src={result.imageUrl} alt="pokemon" />
		</div>
	{/each}
{/if}

<br />
{#if $Pokemon}
	<button on:click={clearPokemon}>Back to list</button>
	<h2>Pokemon</h2>
	<h3>{$Pokemon.name}</h3>
	<img src={$Pokemon.imageUrl} alt="pokemon" />
	<p>
		Types: {#each $Pokemon.types as t (t.type.name)}
			{t.type.name},{' '}
		{/each}
	</p>
{/if}

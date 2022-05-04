<script>
	import { PokemonList, Pokemon } from '../store';
	import { onMount } from 'svelte';
	import { api } from '../api';
	import PokemonCard from '../components/PokemonCard.svelte';
	import Grid from '../components/Grid.svelte';

	onMount(async () => {
		const list = await api.getPokemonList();
		PokemonList.update(() => list);
	});
</script>

<main>
	<div class="gridContainer">
		<Grid colSize="sm">
			{#each $PokemonList.results as result (result.name)}
				<PokemonCard {result} />
			{/each}
		</Grid>
	</div>
</main>

<style>
	main {
		margin-inline: auto;
		width: min(96rem, 100%);
	}
	.gridContainer {
		padding: 3rem;
	}
</style>

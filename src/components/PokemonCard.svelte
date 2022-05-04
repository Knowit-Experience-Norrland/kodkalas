<script>
	import Modal from './Modal.svelte';

	export let result;
	let opened = false;

	const handleClick = () => {
		opened = !opened;
	};
</script>

{#if opened}
	<div />
{/if}

<Modal {opened}>
	<div class="pokemonCard" on:click={() => handleClick()}>
		<img src={result.imageUrl} alt="pokemon" />
		<h2>{result.name}</h2>
	</div>
</Modal>

<style lang="scss">
	.pokemonCard {
		max-width: 35rem;
		background-color: $clr-bg-500;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1.5rem;
		gap: 1rem;
		h2 {
			color: $clr-text;
			&::first-letter {
				text-transform: capitalize;
			}
		}
	}
</style>

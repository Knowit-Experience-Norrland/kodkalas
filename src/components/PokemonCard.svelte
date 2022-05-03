<script lang="ts">
	import { extractIdFromUrl } from '../utils';
	import { api } from '../api';
	import Modal from '../components/Modal.svelte';
	import ClickOutside from 'svelte-click-outside';
	import TypeLabel from './TypeLabel.svelte';

	export let result;

	let pokemon: Pokemon;
	let opened = false;
	let handleClick = async (id: string) => {
		if (pokemon === undefined) {
			pokemon = await api.getPokemon(id);
		}
		opened = true;
	};
</script>

{#if opened}
	<div />
{/if}

<Modal {opened}>
	<ClickOutside on:clickoutside={() => (opened = false)}>
		<div
			id={extractIdFromUrl(result.url)}
			class="pokemonCard {opened ? 'open' : ''}"
			on:click={() => handleClick(extractIdFromUrl(result.url))}
			tabindex="0"
		>
			<img src={result.imageUrl} alt="pokemon" />
			<div class="textContainer">
				<h2>{result.name}</h2>

				{#if pokemon !== undefined && opened}
					<h3>Type:</h3>
					<div class="additional-info">
						{#each pokemon.types as type}
							<TypeLabel type={type.type.name} />
						{/each}
					</div>
				{/if}
			</div>
			{#if pokemon !== undefined && opened}
				<button on:click={() => (opened = false)} alt="Close modal" />
			{/if}
		</div>
	</ClickOutside>
</Modal>

<style lang="scss">
	.pokemonCard {
		max-width: 35rem;
		background-color: $clr-bg-500;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 1.5rem;

		h2 {
			font-weight: 300;
			color: $clr-text;
			&::first-letter {
				text-transform: capitalize;
			}
		}

		&.open {
			flex-direction: row-reverse;
			justify-content: space-around;
			max-width: 50rem;

			img {
				width: 50%;
			}
			.textContainer {
				h2 {
					font-size: 2rem;
					margin-bottom: 1rem;
				}
				h3 {
					color: $clr-text;
					font-weight: 300;
					margin-bottom: 0.5rem;
				}
				.additional-info {
					display: flex;
					gap: 1rem;
				}
			}
			button {
				position: absolute;
				width: 2rem;
				height: 2rem;
				border-radius: 100%;
				top: 0;
				right: 0;
				transform: translate(50%, -50%);
				border: none;
				cursor: pointer;
				transition: all 250ms ease;
				&::after {
					content: '\00d7'; /* This will render the 'X' */
					font-size: 1.7rem;
					line-height: 1.7rem;
				}
				&:hover {
					background-color: $clr-accent-500;
					transform: translate(50%, -50%) scale(1.1);
				}
			}
		}
	}
</style>

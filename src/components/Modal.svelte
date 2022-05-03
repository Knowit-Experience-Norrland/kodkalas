<script lang="ts">
	import { afterUpdate } from 'svelte';

	export let opened;

	afterUpdate(() => {
		const body = document.getElementsByTagName('body')[0];
		const html = document.getElementsByTagName('html')[0];
		if (opened) {
			html.style.overflow = 'hidden';
			body.style.marginRight = '15px';
		} else {
			html.style.overflow = 'initial';
			body.style.marginRight = '0';
		}
	});
</script>

<div class={opened ? 'opened' : ''}>
	<slot />
</div>

<style lang="scss">
	.opened {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		> :global(:first-child) {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			animation-name: toCenter;
			animation-duration: 1s;
		}
	}
</style>

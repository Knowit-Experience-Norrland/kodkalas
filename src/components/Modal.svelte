<script>
	export let opened;
</script>

<div class={opened ? 'opened' : ''}>
	<slot />
</div>

<style lang="scss">
	.opened {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.5);
		> :global(:first-child) {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>

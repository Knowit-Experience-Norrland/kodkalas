<script lang="ts">
	export let colSize: 'sm' | 'md' | 'lg' = 'md';
</script>

<div class="grid colSize-{colSize}">
	<slot />
</div>

<style lang="scss">
	.grid {
		display: grid;
		gap: 1.5rem;
		&.colSize-sm {
			grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		}
		&.colSize-md {
			grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
		}
		&.colSize-lg {
			grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
		}
	}
</style>

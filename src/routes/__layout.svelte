<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Header />
<slot />
<Footer />

<style global lang="scss">
	p,
	body,
	h1,
	h2,
	h3,
	h4,
	h5 {
		margin: 0;
		padding: 0;
	}
	body {
		box-sizing: border-box;
		background-color: $clr-bg-900;
	}
	img {
		max-width: 100%;
	}
</style>

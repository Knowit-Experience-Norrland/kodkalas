<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style global lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
	::-webkit-scrollbar {
		width: 15px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
	p,
	body,
	h1,
	h2,
	h3,
	h4,
	h5 {
		margin: 0;
		padding: 0;
		font-family: 'Ubuntu', sans-serif;
	}
	body {
		box-sizing: border-box;
		background-color: $clr-bg-900;
	}
	img {
		max-width: 100%;
	}
	main {
		margin-inline: auto;
		width: min(96rem, 100%);
		background-color: $clr-bg-700;
	}
</style>

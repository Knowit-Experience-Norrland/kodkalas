<header>
	<a class="logoLink" href="/"><img src="/logo.svg" alt="logo - back to start" /></a>
	<ul>
		<li><a href="/nav1">Nav item 1</a></li>
		<li><a href="/nav2">Nav item 2</a></li>
		<li><a href="/nav3">Nav item 3</a></li>
	</ul>
</header>

<style lang="scss">
	header {
		width: min(90rem, calc(100% - 6rem));
		margin-inline: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 3rem;
		background-color: $clr-bg-500;

		.logoLink {
			height: 5rem;
			img {
				aspect-ratio: 217/80;
				height: 100%;
			}
		}

		ul {
			list-style-type: none;
			display: flex;
			gap: 1rem;
			li {
				a {
					font-size: 1.125rem;
					color: $clr-accent-500;
				}
			}
		}
	}
</style>

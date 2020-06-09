<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav class="bg-orange-200 font-bold text-red-800 object-center border border-red-800">
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='acceuil'>Acceuil</a></li>
		<li><a aria-current='{segment === "images" ? "page" : undefined}' href='images'>Bibliotèque d'Images</a></li>
		<li><a rel=prefetch aria-current='{segment === "personnages" ? "page" : undefined}' href='personnages'>Les Personnages principaux</a></li>
		<li><a rel=prefetch aria-current='{segment === "carte" ? "page" : undefined}' href='carte'>Les Grands Lieux de la Terre du Milieu</a></li>
		<li><a rel=prefetch aria-current='{segment === "quizz" ? "page" : undefined}' href='quizz'>Test de connaissances</a></li>
		<li><a rel=prefetch aria-current='{segment === "musique" ? "page" : undefined}' href='musique'>Univers musical</a></li>

	</ul>
</nav>


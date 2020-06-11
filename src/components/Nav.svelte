<script>
	export let segment;
</script>

<style>
	
	nav {
		border-bottom: 3px solid #505C6A;
		background-color: #E0DDD6;
		font-family:"Cormorant-Garamond";
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

	a {
		color: #6E8FA2;
	}

</style>

<nav class="p-6 w-screen object-cover">
	<ul class="font-bold text-lg flex justify-around uppercase">
		<li><a aria-current='{segment === "undefined" ? "page" : undefined}' href='acceuil' class="p-3 pl-3 m-auto">Acceuil</a></li>
		<li><a aria-current='{segment === "images" ? "page" : undefined}' href='images' class="p-3 m-auto">Bibliotèque d'Images</a></li>
		<li><a rel=prefetch aria-current='{segment === "personnages" ? "page" : undefined}' href='personnages' class="p-3 m-auto">Personnages principaux</a></li>
		<li><a rel=prefetch aria-current='{segment === "carte" ? "page" : undefined}' href='carte' class="p-3 m-auto">La Terre du Milieu</a></li>
		<li><a rel=prefetch aria-current='{segment === "quizz" ? "page" : undefined}' href='quizz' class="p-3 m-auto">Test de connaissances</a></li>
		<li><a rel=prefetch aria-current='{segment === "musique" ? "page" : undefined}' href='musique' class="p-3 m-auto">Univers musical</a></li>

	</ul>
</nav>

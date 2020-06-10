<script>
	export let segment;
</script>

<style>
	
	nav {
		border-bottom: 3px solid #505C6A;
		background-color: #E0DDD6;
		font-family:"Cormorant-Garamond";
		width: fit-content;
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

<<<<<<< Updated upstream
<nav>
=======
<nav class="font-bold p-20 text-lg object-center uppercase text-base py-4 ">
>>>>>>> Stashed changes
	<ul>
		<li><a aria-current='{segment === "acceuil" ? "page" : undefined}' href='acceuil' class="p-3 pl-3 m-auto">Acceuil</a></li>
		<li><a aria-current='{segment === "images" ? "page" : undefined}' href='images' class="p-3 m-auto">Bibliotèque d'Images</a></li>
		<li><a rel=prefetch aria-current='{segment === "personnages" ? "page" : undefined}' href='personnages' class="p-3 m-auto">Personnages principaux</a></li>
		<li><a rel=prefetch aria-current='{segment === "carte" ? "page" : undefined}' href='carte' class="p-3 m-auto">La Terre du Milieu</a></li>
		<li><a rel=prefetch aria-current='{segment === "quizz" ? "page" : undefined}' href='quizz' class="p-3 m-auto">Test de connaissances</a></li>
		<li><a rel=prefetch aria-current='{segment === "musique" ? "page" : undefined}' href='musique' class="p-3 m-auto">Univers musical</a></li>

	</ul>
</nav>

<svelte:head>
	<title>Univers musical</title>
</svelte:head>
<style>
	footer {
		border-top: 3px solid #505C6A;
		background-color: #E0DDD6;
		font-family:"Cormorant-Garamond";
	}

</style>

<footer class="w-screen object-cover" >
	<h2 class="font-bold text-lg">Contactez-nous</h2>
	<div class="flex flex-row content-around m-auto">
		<div class="px-4 py-2 m-2">
			<h2 class="font-bold p-4">Nos coordonnées</h2>
			<p><span class="font-bold p-4">Addresse Mail :</span>b000000000@essec.edu</p>
			<p><span class="font-bold p-4">Téléphone :</span>+33 (0)1 00 00 00 00</p>
		</div>
		<form class="flex flex-row content-around m-auto">
			<section class="p-4">
				<label for="raisons" class="px-4 py-2 m-2">Quel type d'information souhaitez-vous avoir ?</label><br>
					<input list="raisons" id="pourquoi" name="raisons">
					<datalist id="raisons" class="px-4 py-2 m-2">
						<option value="Plus d'information sur l'univers du Seigneur des Anneaux"></option>
						<option value="Propositions de nouvelles idées"></option>
						<option value="Autres"></option>
					</datalist>
			</section>
			<textarea id="extra" rows="3" cols="50" class="px-4 py-2 m-2">Votre message</textarea>
			<input type="submit" value="Envoyer" class="self-center px-4 py-2 m-2">
		</form>
	</div>

</footer>
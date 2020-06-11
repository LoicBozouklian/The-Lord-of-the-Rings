<style>
	body {
		background-color: #E0DDD6;
		font-family:"Cormorant-Garamond"
	}

	p {
		color:#353C42
	}
	h2 {
		color:#6E8FA2
	}

	footer {
		border-top: 3px solid #505C6A;
		background-color: #E0DDD6;
		font-family:"Cormorant-Garamond";
	}
</style>

<svelte:head>
	<title>Acceuil</title>
</svelte:head>

<body>

	<div class="w-full h-screen relative flex items-center">
			<img src="argonath.jpg" alt="argonath" class="absolute top-0 left-0 w-full h-full object-cover" />

        <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center px-12">
				<h1 class="mb-2 text-white uppercase text-2xl md:text-6xl leading-tight tracking-wider font-medium">Le seigneur des<br> anneaux</h1>

		</div>
	</div>


		<div class="py-24 px-12 text-center">
			<p class="text-lg md:text-2xl mb-8">
			L’œuvre de J.R.R. Tolkien se construit au travers de dizaines de tomes écrits sur des décennies et retraçant l’histoire d’un monde fantastique entièrement créé par ses soins. Largement inspiré par les épreuves qu’il a traversées (orphelinat dans la campagne anglaise, première guerre mondiale, séparation de sa fiancée…), l’histoire de la Terre du Milieu s’étale sur Trois Âges, chacun marqué par la coexistence entre les différentes races et les conflits entre les forces du Bien et du Mal. 
			Les Premier et Second Âges sont traités dans le Silmarillion. <br><br>
			J.R.R. Tolkien y retrace notamment la création des elfes, des hommes et des nains par les divinités créatrices, leur installation en Terre du Milieu, la guerre entre les elfes et Morgoth, une divinité renégate, qui entraîne avec lui un apprenti, Sauron, mais aussi les guerres entre Sauron et l’alliance des Hommes et des Elfes. 
			On y retrouve également le récit de la création des royaumes des Hommes, des conflits entre les Elfes et les Nains et les relations entre la Terre du Milieu et les terres éternelles de Valinor, refuges des Elfes ayant fait le choix de fuir face à leur déclin à partir du Second Âge. 
			C'est un ouvrage fondateur de tout l'univers de J.R.R. Tolkien, on y découvre toutes les dynamiques qui sous-tendent les problématiques du Seigneur des Anneaux : des guerres ouvertes entre Sauron, les Elfes et les Hommes, au conflit interne dans la romance d'Aragorn et Arwen, en passant par la méfiance mutuelle entre Elfes et Nains.
			<br><br>
			Le Troisième-Âge est un âge paisible qui voit les Hommes monter en puissance face au déclin des Elfes. 
			La fin de cette époque est traitée par Le Hobbit et la trilogie du Seigneur des Anneaux, c’est le temps du retour de Sauron. Le Hobbit relate la reconquête de la montagne solitaire, siège du pouvoir des Nains, jusqu’alors sous le joug du dragon du Nord, Smaug. Cette quête menée par Thorin Ecu-de-Chêne pose les fondations des évènements du Seigneur des Anneaux puisque l’on y découvre l’Anneau unique et la survie de Sauron dans la citadelle de Dol-Guldur. 
			Vous découvrirez ici l’univers du Seigneur des Anneaux et de son adaptation par Peter Jackson. 
			</p>
		</div>
	

</body>

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


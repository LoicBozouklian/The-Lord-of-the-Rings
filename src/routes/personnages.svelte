<svelte:head>
	<title>Les Personnages principaux</title>
</svelte:head>

<<<<<<< Updated upstream

<div name="les Hommes">
	<div name = "généralités"></div>
	<div name = "Les Hommes du Rohan"></div>
	<div name = "Les Hommes du Gondor"></div>
	<div name = "Les personnages clefs"></div>
</div>

<div name="les Elfes">
	<div name = "généralités"></div>
	<div name = "Les personnages clefs"></div>
</div>

<div name="les Nains">
	<div name = "généralités"></div>
	<div name = "Les personnages clefs"></div>
</div>

<div name="les Hobbits">
	<div name = "généralités"></div>
	<div name = "Les personnages clefs"></div>
</div>

<div name="les Magiciens">
	<div name = "généralités"></div>
	<div name = "Les personnages clefs se battant pour le Bien"></div>
	<div name = "Les personnages clefs se battant pour le Mal"></div>
</div>

<div name="les Serviteurs de Sauron">
	<div name = "généralités"></div>
	<div name = "les Nazguls"></div>
	<div name = "les Orcs"></div>
	<div name = "les Gobelins"></div>
	<div name = "les Ourouks"></div>
	<div name = "les Autres"></div>
</div>

<div name="les Créatures">
	<div name = "les Aigles"></div>
	<div name = "les montures Nazgul"></div>
	<div name = "les Ouargs"></div>
	<div name = "les Autres"></div>
</div>
=======
<style>
	body {
		background-color: #E0DDD6;
		font-family:"Cormorant-Garamond"
	}
	h1 {
		color:#505C6A;
	}
	h2 {
		color:#6E8FA2
	}
	p {
		color:#353C42
	}
	#encadre {
		border-color:#505C6A;
		width: fit-content;	
	}
	#mot-clef {
		background-color:#6E8FA2;
		color:#E0DDD6;
		
	}
	#mots{
		width: fit-content;
	}
</style>

<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch(`/personnages`);
		const personnages = await res.json();
		return { personnages };
	}
</script>
<script>
	export let personnages;
</script>


<body class="bg-fond font-serif bg-cover text-black  m-auto">

	<h1 class="text-center text-4xl uppercase font-bold text-titre" >Les Races de la Terre du Milieu</h1>

	<div class="md:flex md:items-start">
		<div id="encadre" name="Les Hommes" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
			<img class="w-full" src="neuf-rois-hommes.jpg" alt="Les Neuf Rois des Hommes ayant reçu des anneaux du pouvoir">
			<div class="px-6 py-4">
				<h2 class="font-bold text-center text-xl mb-2">Les Hommes</h2>
				<p class="italic m-4">"Neuf anneaux furent donnés à la race des hommes qui par-dessus tout désiraient le pouvoir."</p>
				<p class="text-black text-base text-justify">
				Les Hommes sont créés en même temps que les Elfes. Le "don des Hommes" est leur mortalité. Au Deuxième Âge, les Dunedains, hommes de Numénor se scindent en deux, ceux qui se révoltent contre les Dieux et attaquent Valinor en quête d'immortalité sous le conseil de Sauron, et ceux qui restent fidèles à leurs voeux envers les Dieux. 
				En guise de punition, Numénor est submergée et les Dunedains restés fidèles s'installent en Terre du Milieu, menés par Elendil et ses deux fils. Ils fondent alors les royaumes du Gondor et de l'Arnor et s'allient avec les Elfes dans la guerre contre Sauron. 
				Les autres survivants numénoriens s'installent quant à eux à Umbar, s'allient avec le Mordor et développent une armada pirate. De même, les Orientaux de l'Ouest et les Haradrim du Sud se sont rapidement alliés à Sauron pour s'opposer au Gondor.
				</p>
			</div>
			<div id="mots" class="px-6 py-4 m-auto">
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Mortels</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Gondor</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Pouvoir</span>
			</div>
		</div>

		<div id="encadre" name="Les Elfes" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
			<img class="w-full" src="seigneurs-elfes.jpg" alt="Les Trois Seigneurs Elfes ayant reçu des anneaux du pouvoir">
			<div class="px-6 py-4">
				<h2 class="font-bold text-center text-xl mb-2">Les Elfes</h2>
				<p class="italic m-4">"Trois furent donnés aux elfes, les plus sages et les plus respectables de tous les êtres."</p>
				<p class="text-black text-base text-justify">
				Cadets des Hommes, les Elfes sont immortels et insensibles à la maladie. Ils sont reconnus pour leur sagesse et pour leurs capacités physiques supérieures à celles de la plupart des Hommes. 
				Ils connaissent leur apogée tout au long des Premier et Second Âges au cours desquels ils combattent d'abord Morgoth puis Sauron. Ils quittent progressivement la Terre du Milieu pour Valinor au Troisième-Âge. 
				Les elfes sont impantés dans les régions de la Forêt Noire (ou de Grand'Peur), de la Lorien et de Fondcombe. Ils ont une forte des méfiance des Nains depuis la chute de Doriath, bataille au cours de laquelle les Nains ont attaqué les Elfes au Deuxième Âge.
				</p>
			</div>
			<div id="mots" class="px-6 py-4 m-auto">
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Immortels</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Déclin</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Sages</span>
			</div>
		</div>

		<div id="encadre" name="Les Nains" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
			<img class="w-full" src="seigneurs-nains.jpg" alt="Les Sept Seigneurs Nains ayant reçu des anneaux du pouvoir">
			<div class="px-6 py-4">
				<h2 class="font-bold text-center text-xl mb-2">Les Nains</h2>
				<p class="italic m-4">"Sept aux seigneurs nains, grands mineurs et sculpteurs de la montagne."</p>
				<p class="text-black text-base text-justify">
				Les Nains sont répartis en clans dans les grandes montagnes de la Terre du Milieu : les Monts Brumeux, les Montagnes Bleues et les Monts du fer. 
				Tous les Nains ont toutefois prêté allégeance au trône d'Erebor, la Montagne Solitaire. Celle-ci est colonisée après le réveil du Balrog de Khazad-Dum et l'abandon de la Moria par la lignée de Durin au Troisième-Âge. Le roi Thrain trouve l'Arkenstone, la Pierre Arcane, au coeur de la Montagne et en font le symbole de la toute puissance du Royaume. La reconquête d'Erebor après sa prise par le dragon Smaug est au coeur de l'intrigue du Hobbit. 
				Les Nains préfèrent ne pas se mêler aux autres races, particulièrement aux Elfes. Cela ne les empêche toutefois pas de s'allier à eux contre le Mordor. 
				</p>
			</div>
			<div id="mots" class="px-6 py-4 m-auto">
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Mineurs</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Méfiants</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Avares</span>
			</div>
		</div>

	</div>
	<div class="md:flex md:items-start">

		<div id="encadre" name="Les Hobbits" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
			<img class="w-full" src="hobbits.jpg" alt="famille de Hobbits">
			<div class="px-6 py-4">
				<h2 class="font-bold text-center text-xl mb-2">Les Hobbits</h2>
				<p class="text-black text-base text-justify">
				<span class="italic">
				"Les Hobbits vivent de la culture de leurs terres dans les quatre régions de la Comté depuis plusieur centaines d'années. 
				Satisfaient d'ignorer et d'être ignorés du monde des Grandes Gens. La Terre du Milieu étant après tout remplie d'innombrables créatures étranges. 
				Les Hobbits semblaient de bien peu d'importance car ils n'étaient jamais connus comme de valeureux guerriers et ne comptaient pas non plus parmis les plus sages. 
				En fait, il est de notoriété publique que la véritable passion des Hobbits est la boustifaille. C'est une rumeur plutôt injuste car nous avons aussi développé un intérêt certain dans le brassage de la bière et le fumage de l'herbe à pipe. 
				Mais ce qui nous tient à cœur , c'est la paix, la tranquilité et une terre bien cultivée. Car les Hobbits partagent l'amour des choses qui poussent. Oui sans aucun doute notre façon de vivre est pittoresque, mais aujourd'hui plus que tout autre je prends conscience que ce n'est pas une mauvaise choses de fêter une vie simple."</span>
				<br>C'est ainsi que Bilbon décrit les Hobbits au début du Seigneur des Anneaux. 
				</p>
			</div>
			<div id="mots" class="px-6 py-4 m-auto">
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Semi-Homme</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Paysans</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Isolé</span>
			</div>
		</div>

		<div id="encadre" name="Les Mages" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
			<img class="w-full" src="gandalf-saroumane.jpg" alt="Gandalf et Saroumane dans les jardins d'Isengard">
			<div class="px-6 py-4">
				<h2 class="font-bold text-center text-xl mb-2">Les Mages</h2>
				<p class="text-black text-base text-justify">
				Les Istaris sont des divinités ayant pris une forme humaine. Ils ont été envoyés en Terre du Milieu au milieu du Troisième Âge pour veiller à ce que Sauron ne regagne pas son pouvoir d'antan. Ils sont au nombre de cinq. 
				Le plus puissant de l'ordre est Sarpumane le Blanc. Radagast le Brun veille à ce que le mal ne gagnent pas les forêts de la Terre du Milieu. Gandalf le Gris est un pélerin, il traverse la Terre du Milieu, offrant son conseil aux différents royaumes. Enfin viennent les deux mages Bleus dont on ne saît que très peu.
				</p>
			</div>
			<div id="mots" class="px-6 py-4 m-auto">
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Istaris</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Magiciens</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Conflits</span>
			</div>
		</div>

		<div id="encadre" name="Les Créatures" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
			<img class="w-full" src="aigles.jpg" alt="Les Aigles survolant les Monts Brumeux">
			<div class="px-6 py-4">
				<h2 class="font-bold text-center text-xl mb-2">Les Créatures</h2>
				<p class="text-black text-base text-justify">
				Les Aigles géants de la Terre du Milieu sont d'une aide précieuse dans le combat contre Morgoth puis Sauron. Il apparaissent dans un rôle de sauveteur, permettant aux héros du Hobbit et du Seigneur des Anneaux d'échapper à des situations de mort certaine. 
				Ils sont notamment les seules créatures à pouvoir rivaliser avec les dragons montés par les Nazguls.<br>
				Les Trolls sont des créatures asservies par Sauron. On en distingue plusieurs sortes : les Trolls des cavernes comme ceux vivant dans la Moria, les Trolls des collines, utilisés par les Orcs pour le maniement des armes de siège ou encore les Trolls des Montagnes rencontrés dans le Hobbit.<br>
				Bien d'autres créatures peuplent la Terre du Milieu et entrent en jeu dans les évènements du Seigneur des Anneaux : les Ents, les Balrogs et les Dragons (la plupart sont défaits lors de la guerre contre Morgoth), les Wargs (loups que chevauchent les orques d'Isengard) ou encore l'Armée des Morts des rois du Gondor...
				</p>
			</div>
			<div id="mots" class="px-6 py-4 m-auto">
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Aigles</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Trolls</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Ents</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Balrogs</span>
				<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Dragons</span>
			</div>
		</div>
	</div>

	<div class="md:flex md:items-start">
			<div id="encadre" name="généralités" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
				<img class="w-full" src="oeil-sauron.jpg" alt="L'oeil de Sauron">
				<div class="px-6 py-4">
					<h2 class="font-bold text-center text-xl mb-2">Les forces du Mal</h2>
					<p class="text-black text-base text-justify">
					Sauron s'appuie sur le même support que son maître Morgoth avant lui : de la magie noire, des orques, des gobelins et des Hommes corrompus (Orientaux et Harads). 
					Morgoth, cette divinité déchue a en effet bâti sa puissance sur sa magie et sa capacité à corrompre les autres. Il est notamment à l'origine de la création des dragons et des Balrogs. Il a tué un grand nombre de seigneurs elfes avant d'être vaincus par d'autres divinités à la fin du Premier Âge.
					<br>Après la défaite de Morgoth, Sauron s'installe au Mordor et dupe les forgerons Elfes pour créer les grands anneaux de pouvoir des Elfes, des Hommes et des Nains qu'il ensorcelle pour qu'ils soient tous sous le joug de son Anneau, forgé au Mordor. 
					Il est vaincu une première fois par le seigneur Elfe Gil-Galad et les Hommes de Numenor. Il se réfugie à nouveau au Mordor d'où il fomente la destruction de Numenor. Les Elfes et les Numénoriens survivants s'allient alors pour le vaincre.
					A partir du milieu du Troisième Âge, Sauron regagne progressivement ses forces. Il rappelle les Nazguls de l'au-delà, réinvestit Dol Guldur et planifie l'invasion d'Erebor qui ne sera évitée qu'au sacrifice des armées Elfes de la Forêt Noire et Naines des Monts-du-Fer à la fin de la quête du Hobbit. 
					Il retourne ensuite au Mordor pour planifier les évènements du Seigneur des Anneaux. 
					</p>
				</div>
				<div id="mots" class="px-6 py-4 m-auto">
					<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Sauron</span>
					<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Morgoth</span>
					<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Guerre</span>
				</div>
			</div>

			<div id="encadre" name="Nazguls" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
				<img class="w-full" src="nazguls.jpg" alt="Cinq Nazguls attaquant les Hobbits à la tour de garde d'Amon-Dîl">
				<div class="px-6 py-4">
					<h2 class="font-bold text-center text-xl mb-2">Les forces du Mal</h2>
					<p class="text-black text-base text-justify">
					<span class="italic">« Et au cœur de la tempête, avec un cri qui perçait tous autres sons, déchirant les nuages, jaillirent les Nazgûl, tels des traits enflammés, comme, pris dans la ruine embrasée de la montagne et du ciel, ils craquetaient, se desséchaient et s'éteignaient. »</span><br>
					Les Neuf Nazguls étaient des Rois des Hommes. Séduits par Sauron qui leur offrit leurs Anneaux de pouvoir, ils lui abandonnèrent leur âme. 
					Ils meurent après la guerre contre la dernière alliance des Hommes et des Elfes au Deuxième Âge mais Sauron les ramène à la vie au milieu du Troisième Âge pour le servir dans la Guerre de l'Anneau. 
					Ils éliminent les Dunedain du Nord et reprennent la forteresse de Minas Ithil avant de se mettre en quête de l'Anneau dans les évènements du Seigneur des Anneaux. 
					Leur chef est le Roi-Soricer d'Angmar, un ancien puissant seigneur des Hommes qui prêta allégeance à Sauron après la destruction de Numenor. 
					Au dos de leurs dragons monstrueux, la peur qu'ils inspirent et leur arme la plus dévastatrice.
					</p>
				</div>
				<div id="mots" class="px-6 py-4 m-auto">
					<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Cavaliers noirs</span>
					<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Rois</span>
					<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Peur</span>
				</div>
			</div>

			<div id="encadre" name="les armées de Sauron" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
				<img class="w-full" src="orcs.jpg" alt="Armée du Mordor à la bataille de la Porte Noire">
				<div class="px-6 py-4">
					<h2 class="font-bold text-center text-xl mb-2">Les forces du Mal</h2>
					<p class="text-black text-base text-justify">
					Les premiers orcs (ou orques) sont créés par Morgoth : il s'agit d'Elfes qu'il a capturé puis torturé au point d'en détruire toute la personalité et volonté. Ils obéissent aveuglément à leur maître. Ceux ne sont pas de grands guerriers, leur force réside dans leur nombre et leur absence d'humanité. 
					Il en existe plusieurs types : les Orcs du Mordor sont les plus basiques. 
					Les gobelins sont des Orcs qui se sont installés dans les cavernes. 
					Les Orcs blancs comme Azög dans le Hobbit viennent de l'ancienne forteresse de Morgoth à Gundabad et sont terriblement puissants. 
					Les Ourouk-haïs, créés par Saroumane, sont de bons guerriers, dotés d'une grande endurance et capables de résister aux rayons du soleil.
					<br>
					Enfin, Sauron a corrompu des Hommes : les Haradrims, les Orientaux et les Umbars, déjà sous le joug de Morgoth pour les deux premiers. Ils entrent dans la Guerre de l'Anneau lors de la bataille de Minas-Tirith en menant un assault à dos de Mumakils. 
					Les corsaires d'Umbar sont quant à eux les descendants d'Hommes de Numenor qui avaient attaqué Valinor. Ces derniers sont des pirates aux ordres de Sauron, ils sont convoqués pour mener un assault par le fleuve Anduin lors de la Guerre de l'Anneau mais leur flotte et prise par Aragorn, Gimli, Legolas et l'armée des Morts. 
					</p>
				</div>
				<div id="mots" class="px-6 py-4 m-auto">
					<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Orcs</span>
					<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Haradrims</span>
					<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Orientaux</span>
					<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Umbar</span>
				</div>
			</div>
	</div>

	<h1 class="text-center text-4xl uppercase font-bold text-titre" >Les Personnages Principaux</h1>

	<div class="inline-grid grid-cols-3 justify-between"> 
			{#each personnages as perso}
			<div id="encadre" class="border-2 rounded-lg p-6 space-x-3">
				<img class="w-2/3" src="{perso.Nom}.jpg" alt="{perso.Nom}.jpg">
				<h2 class="font-bold text-center text-2xl mb-2">{perso.Nom}</h2>
				<br><p><span class="font-bold">Race : </span>{perso.Race}</p>
				<br><p><span class="font-bold">Surnoms : </span>{perso.Surnoms}</p>
				<br><p><span class="font-bold">Ascendance : </span>{perso.Ascendance}</p>
				<br><p><span class="font-bold">Fonction : </span>{perso.Fonction}</p>
				<br><p><span class="font-bold">Armes : </span>{perso.Armes}</p>
				<br><p><span class="font-bold">Groupes : </span>{perso.Groupes}</p>
				<br><p><span class="font-bold">Après la Guerre de l'Anneau : </span>{perso.Après}</p>
				<br><p><span class="font-bold">Joué par : </span>{perso.Acteur}</p>
			</div>
		{/each}
	</div>

</body>

>>>>>>> Stashed changes

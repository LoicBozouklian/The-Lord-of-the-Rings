<svelte:head>
<<<<<<< Updated upstream
	<title>Les lieux clefs de la Terre du Milieu</title>
</svelte:head>

<h1>La Terre du Milieu</h1>

<div>
    <figure>
	    <img alt='Carte de la Terre du Milieu' src='grande-carte.jpg'>
	    <figcaption>L'Ouest de la Terre du Milieu à la fin du Troisième Âge</figcaption>
    </figure>
</div>


<div name="La Comté">
</div>

<div name="Foncombe">
</div>

<div name="La Moria">
</div>

<div name="Isengard">
</div>

<div name="Rohan">
	<div name = "généralités"></div>
	<div name = "Ederas"></div>
	<div name = "Gouffre de Elm"></div>
</div>

<div name="Gondor">
	<div name = "généralités"></div>
	<div name = "Minas Tirith"></div>
	<div name = "Osgiliath"></div>
</div>

<div name="Lothlorien">
</div>

<div name="Mordor">
	<div name = "généralités"></div>
	<div name = "Minas Morgul"></div>
	<div name = "La Montagne du Destin, le grand Oeil et la Porte Noire"></div>
</div>
=======
	<title>La Terre du Milieu</title>
	<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
</svelte:head>

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
	}
	#mot-clef {
		background-color:#6E8FA2;
		color:#E0DDD6;
		
	}
	#mots{
		width: fit-content;
	}

</style>

<body class="bg-fond font-serif bg-cover text-black  m-auto">

	<h1 class="text-center text-4xl uppercase font-bold text-titre" >La Terre du Milieu</h1>

	<div class="m-4">	
		<img id="encadre" alt='Carte de la Terre du Milieu' src='grande-carte.jpg' class="rounded border-4 sm:w-1/3 md:w-1/2 lg:w-2/3 xl:w-full">
	</div>

	<div id="encadre" name="La Comté" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full" src="la-comté.jpg" alt="La Comté">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">La Comté</h2>
			<p class="text-black text-base text-justify">
			Isolée du monde dans la région de l'Eriador, la Comté est le lieu de résidence des Hobbits.
			C'est une contrée rurale, bien contente d'ignorer tout du monde extérieur et d'en être ignorée. 
			Les maisons y sont troglodytes, construites dans la colline et entourées par une nature bienfaisante. 
			Elle vient symboliser l'Angleterre rurale du temps de Tolkien, où le quotidien est synonyme de simplicité.		
			</p>
		</div>
		<div id="mots" class="px-6 py-4 m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Hobbits</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Rural</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Isolé du monde</span>
		</div>
	</div>

	<div id="encadre" name="Fondcombe" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full" src="fondcombe.jpg" alt="Fondcombe et la Vallée d'Imladris">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">Fondcombe et la Vallée d'Imladris</h2>
			<p class="text-black text-base text-justify">
			Sous les ordres de Gil-Galad, le seigneur Elrond fonde Fondcombe et en fait un refuge pendant la première guerre opposant Sauron aux Elfes au Deuxième Âge, Fondcombe est toujours restée cachée des forces de Sauron. 
			La citadelle elfe sert de refuge pour les elfes de la Terre du Milieu avant qu'ils ne partent pour les terres éternelles de Valinor, mais elle est aussi un point de rencontre pour les forces s'opposant à Sauron. 
			S'y tient notamment le conseil d'Elrond qui fonde la Communauté de l'Anneau.
			A l'image d'Elrond, Fondcombe se tient comme un symbole de Lumière alors que le mal se répand progessivement sur l'ensemble de la Terre du Milieu.		
			</p>
		</div>
		<div id="mots" class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Elfes</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Magique</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Refuge</span>
		</div>
	</div>

	<div id="encadre" name="Moria" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full" src="la-Moria.jpg" alt="Les Portes de la Moria">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">La Moria</h2>
			<p class="text-black text-base text-justify">
			Fondées par Durin Trompe-la-Mort, sur les berges du Lac Miroir, sous les Monts Brumeux, les mines de la Moria sont riches d'une veine de Mithril, le matériau le plus solide de la Terre du Milieu. Les descendants de Durin étendent alors les sous-terrains jusque sous le col de Caradhras et vont jusqu'à réveiller le Balrog de Khazad-Dum. Ce dernier les extermine et ouvre la porte à l'arrivée des orques et des gobelins dans les mines.		
			<br>
			Après avoir reconquis Erebor, la Montagne Solitaire, dans les évènements du Hobbit, les Nains partent pour la Moria et s'y réinstallent. La colonie ne résiste toutefois pas longtemps aux assauts gobelins et le Balrog détruit tout espoir de fuite. 
			Il faut attendre le passage de la Communauté de l'Anneau et le combat entre Gandalf le Gris et le Balrog pour que les Nains puissent enfin se réinstaller dans les halls de la Moria. 
			La Moria, de même qu'Erebor dans le Hobbit, symbolise les périls qu'entraîne l'avarice. En cherchant des richesses, les Nains s'enfoncent sous terre et attirent le mal sur eux.
			</p>
		</div>
		<div id="mots" class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Nains</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Cavernes</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Mort</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Balrog</span>

		</div>
	</div>


	<div id="encadre" name="La Lorien" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full" src="lothlorien.jpg" alt="La cité de Caras-Galadhon, au coeur de la Lorien">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">La Forêt de la Lorien</h2>
			<p class="text-black text-base text-justify">
			Galadriel et Celeborn s'installent au deuxième âge à Caras-Galadhon, la capitale de la Lorien, siège du pouvoir des Elfes en Terre du Milieu. Ils en deviennent les seigneurs après la mort du roi Amroth.
			Le pouvoir de l'anneau de Galadriel enrichit la terre et protège les Galadhrim, habitants de la Lorien, des invasions de Sauron.
			La communauté de l'Anneau s'y réfugie après la mort de Gandalf dans la Moria. Avant de partir, Galadriel offre à chaque membre un cadeau pour leur redonner espoir.	
			</p>
		</div>
		<div id="mots" class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Elfes</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Forêt</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Galadriel</span>
		</div>
	</div>

	<div id="encadre" name="Isengard" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full h-56" src="fumée-isengard.jpg" alt="Isengard après la trahison de Saroumane">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">Isengard et la Tour d'Orthanc</h2>
			<p class="text-black text-base text-justify">
			Avec l'affaiblissement du Gondor, Isengard tombe aux mains des forces d'ennemis du Rohan. Les Rohirrims reprennent la tour après plusieurs décennies et la remettent à Saroumane. 
			Après avoir utilisé le Palantir, il tombe sous le joug de Sauron et transforme Isengard en une forteresse accueillant des milliers d'orcs, ourouks et wargs.
			Pendant la bataille de Fort-le-Cor, les Ents attaquent Isengard et détruisent toutes les fortifications.  
			</p>
		</div>
		<div id="mots" class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Saroumane</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Ourouks</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Tour de sorcellerie</span>
		</div>
	</div>

	<div id="encadre" name="Fangorn" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full h-56" src="fangorn.jpg" alt="Mérry et Pipin dans la forêt de Fangorn">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">La Forêt de Fangorn</h2>
			<p class="text-black text-base text-justify">
			La forêt de Fangorn est le reste d'une forêt qui recouvrait tout l'Eriador au Premier Âge. Les Ents s'y réfugient après l'innondation du Beleriand. Les eaux de la forêt en font des êtres vivants articulés et capables d'une force colossale. 
			Après que Saroumane utilisent une partie de la forêt pour les fonderies d'Isengard, Mery et Pipin incitent les Ents à briser leur règle de neutralité et à entrer en guerre contre Sarumane. A la suite de cette attaque, Fangorn reprend ses droits sur Isengard et la forêt s'étend petit à petit autour de la tour d'Orthanc.
			</p>
		</div>
		<div id="mots" class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Forêt</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Ents</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Puissance</span>
		</div>
	</div>

	<div id="encadre" name="Rohan" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full h-56" src="drapeau-rohan.jpg" alt="Drapeau du Rohan">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">Le Rohan</h2>
			<p class="text-black text-base text-justify">
			Le Royaume de la Marche est une terre de cavaliers est fondée par Eorl le Jeune au Troisième Âge. Il obtient ces terres après avoir secouru l'intendant du Gondor d'une attaque d'orques. 
			Le Rohan et le Gondor ont alors une alliance qui survivra la guerre de l'anneau. Le Royaume souffre lorsque Grima et Saroumane complotent pour affaiblir Theoden. Gandalf libère toutefois le roi de leur emprise ce qui mène à la bataille de Fort-le-Cor. 
			Lorsque le Gondor est en danger face aux forces de Sauron, Theoden lève une armée de 10 000 Rohirrims pour porter sauver la cité de Minas Tirith. 
			Après la guerre de l'anneau, Eomer prend la tête du Royaume et renforce l'alliance avec le Gondor.
			</p>
		</div>
		<div id="mots" class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Cavaliers</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Hommes</span>
		</div>
	</div>

	<div id="encadre" name="Edoras" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full h-56" src="edoras.jpg" alt="Edoras">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">Edoras</h2>
			<p class="text-black text-base text-justify">
			Capitale du Rohan, la forteresse d'Edoras est construite par Eorl le Jeune et son fils après qu'ils aient obtenus le Royaume de la part de l'intendant du Gondor. Elle est construite à flanc de colline au pied des Montagnes Bleues.
			Meduseld est le palais royal, aussi appelé Château d'Or, son toit et ses portes sont recouvertes d'or.
			Theoden fuit Edoras pour se réfugier au gouffre de Helm car la cité est vulnérable aux assaults de Saroumane après le départ des Rohirrims d'Eomer. 
			</p>
		</div>
		<div id="mots" class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Capitale</span>
			<span id="mot-clef"  class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Château d'or</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Vulnérable</span>
		</div>
	</div>

	<div id="encadre" name="Helm" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full h-56" src="helm.jpg" alt="Gouffre de Helm et Fort-le-Cor">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">Le Gouffre de Helm</h2>
			<p class="text-black text-base text-justify">
			Le gouffre d'Helm est situé dans une vallée naturellement fortifiée des Montagnes Blanches. La forteresse de Fort-le-Cor est édifiée par les hommes du Gondor avant que le Rohan ne soit cédé à Eorl le jeune. 
			Les Rohirrims s'y réfugient tout un hiver en attendant l'aide du Gondor.
			Au cours de la Guerre de l'Anneau, Saroumane attaque Theoden et trouve la seule faille du mur d'enceinte de la citadelle : le canal des gorges d'Helm. Eomer parvient à sauver les quelques survivants de la bataille en revenant à la tête d'un Eored.
			Une fois Sauron détruit, Gmili établie une colonie de nains dans les brillantes cavernes attenantes à la forteresse.
			</p>
		</div>
		<div id="mots" class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Forteresse</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Bataille</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Montagnes</span>
		</div>
	</div>

	<div id="encadre" name="Gondor" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full h-56" src="gondor.jpg" alt="Drapeau du Gondor">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">Le Gondor</h2>
			<p class="text-black text-base text-justify">
			Le Gondor est fondé par Isildur et Anarion, fils d'Elendil, après la destruction de l'île de Numenor, au Second Âge. Après la défaite de Sauron et la mort d'Isildur, le royaume prospère au travers de ses trois places fortes: Minas-Tirith, Osgiliath, Minas-Ithil (qui deviendra Minas-Morgul). 
			Plus l'influence de Sauron grandit, plus le Gondor s'affaiblit. Au Troisième Âge, le roi-sorcier d'Angmar défie le roi du Gondor et prend la place forte de Minas-Ithil peu après. 
			La maison des Intendants assure alors l'intérim du trône du Gondor jusqu'au retour d'Aragorn, dernier héritier d'Isildur.
			Après la Guerre de l'Anneau, le royaume est unifié avec celui de l'Arnor par Aragorn puis sa descendance.
			</p>
		</div>
		<div id="mots" class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Hommes</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Rois</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Coeur du monde libre</span>
		</div>
	</div>

	<div id="encadre" name="Minas-Tirith" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full h-56" src="minas-tirith.jpg" alt="La cité de Minas Tirith">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">Minas-Tirith</h2>
			<p class="text-black text-base text-justify">
			Anciennement Minas-Arnor, la cité est bâtie sur le flanc des montagnes blanches et sur plusieurs niveaux. Le dernier niveau est la résidence des rois et des intendants du Gondor. Les champs du Pelennor alentours sont très fertiles et la ville est très proche d'Osgiliath et de l'Anduin. 
		La cité est jumelle à Minas-Ithil et devient la capitale du royaume au milieu du Troisième Âge. Minas-Tirith est le théâtre de la plus grande bataille de la Guerre de l'Anneau. Les Rohirrims de Theoden sauvent la cité in extremis et éliminent les orques menés par le roi-sorcier d'Angmar alors que l'armée des morts, menée par Aragorn, s'attaque aux forces Harads.
			</p>
		</div>
		<div id="mots" class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Cité Blanche</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Cité des Rois</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Guerre</span>
		</div>
	</div>

	<div id="encadre" name="Osgiliath" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full h-56" src="osgiliath.jpg" alt="La cité d'Osgiliath">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">Osgiliath</h2>
			<p class="text-black text-base text-justify">
			Capitale du Gondor jusqu'au milieu du Troisième Âge, la ville est directement sur le fleuve Anduin et fait face au Mordor. Elle est donc en première en ligne lors de l'invasion des forces de Sauron au cours de la guerre de l'anneau. Avant cela, les ourouks prennent la Cité pendant plusieurs siècles jusqu'à ce que Boromir ne la libère peu avant la tenue du conseil d'Elrond.
		Après la guerre, Aragorn ordone la rénovation de la Cité et de ses défenses afin de pouvoir faire face à un potentiel réveil du mal au Mordor.
			</p>
		</div>
		<div id="mots"  class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Fleuve</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Mordor</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Destruction</span>
		</div>
	</div>

	<div id="encadre" name="Mordor" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full h-56" src="barad-dur.jpg" alt="Tour de Barad-Dur au coeur du Mordor">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">Le Mordor</h2>
			<p class="text-black text-base text-justify">
			Le Mordor est le royaume de Sauron. Il est délimité par des chaînes de montagne naturelles. En son sein, on trouve le plateau de Gorgoroth surlequel s'érigent la Montagne du Destin et la tour de Barad-Dur. C'est sur ce plateau que les armées du Mordor sont créées.
			Sauron s'installe au Mordor au milieu du deuxième âge, y construit la forteresse de Barad-Dur et forge l'anneau du pouvoir dans les flammes de la montagne du destin. Il est vaincu une première fois au Deuxième Âge et se retranche dans les terres du Mordor pour n'en resortir qu'à la fin du Deuxième Âge pour se confronter à la dernière alliance des hommes et des elfes.
			Gil-Galad, Elendil et Isildur parviennent à vaincre Sauron et à le priver de son enveloppe corporelle. Le Mordor est ensuite occupé par les rôdeurs Dunedain et les hommes du Gondor. Plusieurs tours y sont construites pour en assurer la surveillance.
			Sauron parvient toutefois à réétablir son influence sur le Mordor par le biais des Nazguls et y revient après la destruction de Dol-Guldur (évènements du Hobbit). Il y concentre toutes ses forces et prépare l'assault sur le Gondor tandis que Sarumane attaque le Rohan.
			La description qu'en fait Boromir au cours du conseil d'Elrond, un endroit où l'on ne peut pas respirer, rappelle les tranchées et le no man's land qu'a connu J.R.R. Tolkien au cours de la Première Guerre Mondiale.
			</p>
		</div>
		<div id="mots" class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Sauron</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Terre Noire</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Mal</span>
		</div>
	</div>

	<div id="encadre" name="Minas-Morgul" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full h-56" src="minas-morgul.jpg" alt="La Tour de Sorcellerie de Minas Morgul">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">Minas-Morgul</h2>
			<p class="text-black text-base text-justify">
			Anciennement Minas-Ithil, citadelle du Gondor, la Tour de Sorcellerie de Sauron est d'abord prise par les forces du mal à la fin du Second Âge. Lorsque Sauron est détruit, les hommes la réinvestissent jusqu'à ce qu'elle tombe à nouveau sous les attaques du roi-sorcier d'Angmar. La tour est alors habitée par la magie noire de Sauron et du roi-sorcier capable de plonger quiconque dans un état de folie. 
			C'est de cette forteresse que partent les forces du Mordor lors de l'assault contre Osgiliath puis Minas-Tirith.
			</p>
		</div>
		<div id="mots" class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Tour de Sorcellerie</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Nazguls</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Gondor</span>
		</div>
	</div>

	<div id="encadre" name="Montagne du Destin" class="m-4 max-w-md rounded overflow-hidden shadow-lg border-4 md:inline-block lg:inline-block xl:inline-block sm:flow-root">
		<img class="w-full h-56" src="montagne-du-destin.jpg" alt="La Montagne du Destin">
		<div class="px-6 py-4">
			<h2 class="font-bold text-center text-xl mb-2">La Montagne du Destin</h2>
			<p class="text-black text-base text-justify">
			La montagne du destin est le symbole du pouvoir de Sauron. C'est là qu'il forge l'anneau unique. Les Hommes du Gondor interprètent ses éruptions comme une montée en puissance du seigneur des ténèbres. Il est d'ailleurs en éruption, yout au long des évènements du Seigneur des Anneaux.
			L'entrée du volcan mène directement à la forteresse de Barad-Dur, premier lieu de pouvoir de Sauron qu'il a ensorcelé de sorte à ce qu'elle ne puisse être détruite. Au cours des évènements du Seigneur des Anneaux, il ne peut pas prendre une forme physique et se matérialise comme le grand oeil qui voit tout du haut de Barad-Dur. 
			Lorsque Frodon détruit l'Anneau, les laves montent et la tour de Sauron, de même que la Grande Porte du Mordor s'effondrent, symbole de la destruction finale et définitive de Sauron.
			</p>
		</div>
		<div id="mots" class="px-6 py-4  m-auto">
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Volcan</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Forge de l'Anneau</span>
			<span id="mot-clef" class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Destruction</span>
		</div>
	</div>

</body>
>>>>>>> Stashed changes

<svelte:head>
	<title>Univers musical</title>

<style>
	
	@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Cormorant:wght@300&display=swap');
	
	footer {
		border-top: 3px solid #505C6A;
		background-color: #E0DDD6;
		font-family:"Cormorant-Garamond";
	}
	
		
	@font-face {
font-family: 'Hobbiton BrushhandHobbiton brush';
font-style: normal;
font-weight: normal;
src: local('Hobbiton BrushhandHobbiton brush'), url('hobbitonbrushhand.woff') format('woff');
}
body {
  background: #E0DDD6;
}
@media screen and (min-width: 501px) {
  h1 {
    font-family: 'Cormorant', 'Garamond';
    color:#505C6A;
    font-size: 50px;
  }
  h2 {
    font-family: 'Cormorant', serif, 'Garamond';
    color: #6E8FA2;
    font-size: 20px;
    margin-top: -20px;
  }
}
@media screen and (max-width: 500px) {
  h1 {
    font-family: 'Cormorant', 'Garamond';
    color:#505C6A;
    font-size: 30px;
  }
  h2 {
    font-family: 'Cormorant', serif, 'Garamond';
    color: #6E8FA2;
    font-size: 10px;
    margin-top: -20px;
  }
}
.grid {
  max-width: 900px;
  max-height: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 7px;
  grid-row-gap: 2px;
}
.g {
  grid-column-start: 1;
  grid-column-end: 4;
}
/* Conteneur principal */
.overlay-image {
 position: relative;
}
/* Image originale */
.overlay-image .image {
 display: block;
 width: 100%;
 height: auto;
}
/* Texte original */
@media screen and (min-width: 501px) {
  .overlay-image .text {
  color: #fff;
  font-size: 30px;
  line-height: 1.5em;
  text-shadow: 2px 2px 2px #000;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  font-family: 'Cormorant', serif, 'Garamond';
  }
}
@media screen and (max-width: 500px) {
  .overlay-image .text {
  color: #fff;
  font-size: 20px;
  line-height: 1.5em;
  text-shadow: 2px 2px 2px #000;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  font-family: 'Cormorant', serif, 'Garamond';
  }
}
@media screen and (max-width: 400px) {
  .overlay-image .text {
  visibility: hidden;
  }
}
/* Overlay */
.overlay-image .hover {
 position: absolute;
 top: 0;
 height: 100%;
 width: 100%;
 opacity: 0;
 transition: .5s ease;
}
/* Apparition overlay sur passage souris */
.overlay-image:hover .hover {
 opacity: 1;
}
.overlay-image .normal {
 transition: .5s ease;
}
.overlay-image:hover .normal {
 opacity: 0;
}
.overlay-image .hover {
 background-color: rgba(0,0,0,0.5);
}
/* BIS */
/* Conteneur principal */
.overlay-image-bis {
 position: relative;
}
/* Image originale */
.overlay-image-bis .image {
 display: block;
 width: 100%;
 height: auto;
}
/* Texte original */
@media screen and (min-width: 501px) {
.overlay-image-bis .text {
 color: #fff;
 font-size: 30px;
 line-height: 1.5em;
 text-shadow: 2px 2px 2px #000;
 text-align: center;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: 100%;
 font-family: 'Cormorant', 'Garamond';
}
}
@media screen and (max-width: 500px) {
.overlay-image-bis .text {
 color: #fff;
 font-size: 20px;
 line-height: 1.5em;
 text-shadow: 2px 2px 2px #000;
 text-align: center;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: 100%;
 font-family: 'Cormorant', 'Garamond';
}
}
@media screen and (max-width: 400px) {
.overlay-image-bis .text {
 visibility: hidden;
}
}
/* Overlay */
.overlay-image-bis .hover {
 position: absolute;
 top: 0;
 height: 100%;
 width: 100%;
 opacity: 0;
 transition: .5s ease;
}
/* Apparition overlay sur passage souris */
.overlay-image-bis:hover .hover {
 opacity: 1;
}
.overlay-image-bis .normal {
 transition: .5s ease;
}
.overlay-image-bis:hover .normal {
 opacity: 0;
}
.overlay-image-bis .hover {
 background-color: rgba(0,0,0,0.5);
}
.conteneur {
  display: inline-block;
  margin: 0px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.conteneur .texte {
  font-family: "Open Sans", "Segoe UI", Helvetica, Arial;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-23%, -30%);
  z-index: -1;
}

</style>

<script>
		   function and_play_stop_one()
   {
   var PLAYERONE = document.getElementById("PLAYERONE" );
   if (PLAYERONE.paused)
   {PLAYERONE.play();}
   else
   {PLAYERONE.pause();}
   }
function and_play_stop_two()
   {
   var PLAYERTWO = document.getElementById("PLAYERTWO" );
   if (PLAYERTWO.paused)
   {PLAYERTWO.play();}
   else
   {PLAYERTWO.pause();}
   }
function and_play_stop_three()
   {
   var PLAYERTHREE = document.getElementById("PLAYERTHREE" );
   if (PLAYERTHREE.paused)
   {PLAYERTHREE.play();}
   else
   {PLAYERTHREE.pause();}
   }
function and_play_stop_four()
   {
   var PLAYERFOUR = document.getElementById("PLAYERFOUR" );
   if (PLAYERFOUR.paused)
   {PLAYERFOUR.play();}
   else
   {PLAYERFOUR.pause();}
   }
function and_play_stop_five()
   {
   var PLAYERFIVE = document.getElementById("PLAYERFIVE" );
   if (PLAYERFIVE.paused)
   {PLAYERFIVE.play();}
   else
   {PLAYERFIVE.pause();}
   }
function and_play_stop_six()
   {
   var PLAYERSIX = document.getElementById("PLAYERSIX" );
   if (PLAYERSIX.paused)
   {PLAYERSIX.play();}
   else
   {PLAYERSIX.pause();}
   }
	</script>

</svelte:head>

<body>

<div class="introduction">
        <div class="titre">
          <h1><center>LES MUSIQUES DE LA TERRE DU MILIEU</center></h1>
          &nbsp;
          <h2><center>Voici une sélection des plus célèbres musiques de la trilogie (cliquer et recliquer pour démarrer et arrêter la musique)</center></h2>
          &nbsp;
        </div>
      </div>

      <center>

        <div class="grid">
          <div class="a">

            <audio id="PLAYERONE" preload="none">
            <source src="The Fellowship of the Ring Soundtrack-02-Concerning Hobbits.mp3"/>Votre navigateur n'est pas compatible. Veuillez le mettre à jour !
            </audio>
            <div class="overlay-image">
              <div class="conteneur">
              <image width="300px" src="La Comté.png" border="0" alt="image" class="image _b1"></image>
              <div class="hover _2" type="button" onclick="and_play_stop_one()">
                <div class="text _2">Les Hobbits</div>
              </div> 
              </div>
            </div>
            
            </div>


            <div class="b">

            <audio id="PLAYERTWO" preload="none">
            <source src="Rivendell.mp3"/>Votre navigateur n'est pas compatible. Veuillez le mettre à jour !
            </audio>
            <div class="overlay-image">
              <div class="conteneur">
              <image width="300px" src="Rivendell.png" border="0" alt="image" class="image _b1"></image>
              <div class="hover _2" type="button" onclick="and_play_stop_two()">
                <div class="text _2">Les Elfes (thème)</div>
              </div> 
              </div>
            </div>

            </div>


            <div class="c">

            <audio id="PLAYERTHREE" preload="none">
            <source src="The Two Towers Soundtrack-16-Forth Eorlingas.mp3"/>Votre navigateur n'est pas compatible. Veuillez le mettre à jour !
            </audio>
            <div class="overlay-image">
              <div class="conteneur">
              <image width="300px" src="Helm.png" border="0" alt="image" class="image _b1"></image>
              <div class="hover _2" type="button" onclick="and_play_stop_three()">
                <div class="text _2">Forth Eorlingas</div>
              </div> 
              </div>
            </div>

            </div>



        <div class="d">

            <audio id="PLAYERFOUR" preload="none">
            <source src="The Two Towers Soundtrack-08-Evenstar.mp3"/>Votre navigateur n'est pas compatible. Veuillez le mettre à jour !
            </audio>
            <div class="overlay-image">
              <div class="conteneur">
              <image width="300px" src="Elves.png" border="0" alt="image" class="image _b1"></image>
              <div class="hover _2" type="button" onclick="and_play_stop_four()">
                <div class="text _2">Arwen (Evenstar)</div>
              </div> 
              </div>
            </div>

            </div>


            <div class="e">

            <audio id="PLAYERFIVE" preload="none">
            <source src="The Lighting of the Beacons.mp3"/>Votre navigateur n'est pas compatible. Veuillez le mettre à jour !
            </audio>
            <div class="overlay-image">
              <div class="conteneur">
              <image width="300px" src="Minis Tirith.png" border="0" alt="image" class="image _b1"></image>
              <div class="hover _2" type="button" onclick="and_play_stop_five()">
                <div class="text _2">The lighting of the beacons</div>
              </div> 
              </div>
            </div>
              
              </div>


              <div class="f">
            <audio id="PLAYERSIX" preload="none">
            <source src="Mordor.mp3"/>Votre navigateur n'est pas compatible. Veuillez le mettre à jour !
            </audio>
            <div class="overlay-image">
              <div class="conteneur">
              <image width="300px" src="Mordor.png" border="0" alt="image" class="image _b1"></image>
              <div class="hover _2" type="button" onclick="and_play_stop_six()">
                <div class="text _2">Le Mordor (thème)</div>
              </div> 
              </div>
            </div>

              </div>

      <div class="g">

      <div align="center" class="The Fellowship">
            <audio id="PLAYERSIX" preload="none">
            <source src="The Fellowship.mp3"/>Votre navigateur n'est pas compatible. Veuillez le mettre à jour !
            </audio>
            <div class="overlay-image-bis">
              <div class="conteneur">
              <image src="The Fellowship.png" border="0" alt="image" class="image _b1"></image>
              <div class="hover _2" type="button" onclick="and_play_stop_six()">
                <div class="text _2">La Communauté de l'Anneau (thème)</div>
              </div> 
              </div>
            </div>
      </div>
      
      </div>


      </div>
      </center>
	
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
	
</body>

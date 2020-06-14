<svelte:head>
	<title>Test de connaissances</title>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Cormorant:wght@300&display=swap');
		

body {
  background: #E0DDD6;
}

h1 {
  color: #505C6A;
  font-family: 'Cormorant', serif;
}


     #test {
          display: block;
          width: 200px; height: 200px;
          margin-top: -50px;
          margin: calc(((204px * 1.4142) - 204px) / 2);
          animation: example 30s linear 0s infinite;
          }

     @keyframes example {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
          }


p {
  color: #6E8FA2;
  font-family: 'Cormorant', serif, 'Garamond';
}

form {
  text-align: left;
}

.button {
  background-color: rgba(164, 149, 32, 0.332);
  font-family: 'Cormorant', serif, 'Garamond';
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  width: 100px;
  height: 30px;
  margin-top: 40px;

}
	</style>
		
	<script>
		let rep=[];

rep[1] = "b";

rep[2] = "b";

rep[3] = "c";

rep[4] = "c";

rep[5] = "a";

rep[6] = "c";

rep[7] = "b";

rep[8] = "c";

rep[9] = "a";

rep[10] = "d";
 

let score=0;


function Engine(question, reponse) {

        if (reponse == rep[question]) {
                        score++;



                }

}

// commentaires pour le résultat final

function NextLevel () {

        if (score > 8 && score <= 10) {

                alert(score + "/10. " + "Tolkien, is that you?");

                }

        if (score > 6 && score <= 8) {

                alert(score + "/10. " + "Not bad. Can do better.");

                }
 
 

        if (score >= 4 && score < 6) {

                alert(score + "/10. " + "You're lame.");

                }

        if (score < 4) {

                alert(score + "/10. " + "Did you even see the movie or read the book?");

                }

  
 



//ligne suivante à désactiver si IE3 ou -

document.quest.reset();

}
  
  
	</script>
</svelte:head>

<body>
	    <center><h1>CONNAISSEZ-VOUS BIEN LE SEIGNEUR DES ANNEAUX ?</h1><center>
    <div class="gif">
      <center><img id="test" src="One Ring Inscription.png"></center>
    </div>


<form name="quest">

  <p>1. Qui a réalisé la trilogie du Seigneur des Anneaux ?
<br><input type="radio" name="1" value="a" onclick="Engine(1, this.value)"><font color="#353C42">a.
</font>Elijah Wood
<br><input type="radio" name="1" value="b" onclick="Engine(1, this.value)"><font color="#353C42">b.
</font>Peter Jackson.
<br><input type="radio" name="1" value="c" onclick="Engine(1, this.value)"><font color="#353C42">c.
</font>Liv Tyler
<br><input type="radio" name="1" value="d" onclick="Engine(1, this.value)"><font color="#353C42">d.
</font>Howard Shore</p>
<br>&nbsp;

<p>2. Sous quel nom Frodo se présente-t-il au Poney Fringant ? (en anglais)
<br><input type="radio" name="2" value="a" onclick="Engine(2, this.value)"><font color="#353C42">a.
</font>Mr Overhill
<br><input type="radio" name="2" value="b" onclick="Engine(2, this.value)"><font color="#353C42">b.
</font>Mr Underhill
<br><input type="radio" name="2" value="c" onclick="Engine(2, this.value)"><font color="#353C42">c.
</font>Mr Undervalley
<br><input type="radio" name="2" value="d" onclick="Engine(2, this.value)"><font color="#353C42">d.
</font>Mr Baggins</p>

<br>&nbsp;
<div class="tenor-gif-embed" data-postid="5614684" data-share-method="host" data-width="100%" data-aspect-ratio="2.0"><a href="https://tenor.com/view/gandalf-lotr-wokeuplikethis-frodo-gif-5614684">Gandalf Lotr GIF</a> from <a href="https://tenor.com/search/gandalf-gifs">Gandalf GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
<br>&nbsp;

<p>3. Où est-ce que les Hobbits trouvent refuge après l'attaque du Mont Venteux ?
<br><input type="radio" name="3" value="a" onclick="Engine(3, this.value)"><font color="#353C42">a.
</font>Gouffre de Helm
<br><input type="radio" name="3" value="b" onclick="Engine(3, this.value)"><font color="#353C42">b.
</font>Minas Tirith
<br><input type="radio" name="3" value="c" onclick="Engine(3, this.value)"><font color="#353C42">c.
</font>Fondcombe
<br><input type="radio" name="3" value="d" onclick="Engine(3, this.value)"><font color="#353C42">d.
</font>La Lothlórien</p>

<br>&nbsp;


<p>4. Qui est l'ancêtre d'Aragorn (celui qui a pris l'anneau unique à Sauron) ?
<br><input type="radio" name="4" value="a" onclick="Engine(4, this.value)"><font color="#353C42">a.
</font>Arathorn
<br><input type="radio" name="4" value="b" onclick="Engine(4, this.value)"><font color="#353C42">b.
</font>Asaldir
<br><input type="radio" name="4" value="c" onclick="Engine(4, this.value)"><font color="#353C42">c.
</font>Isildur
<br><input type="radio" name="4" value="d" onclick="Engine(4, this.value)"><font color="#353C42">d.
</font>Palantir</p>

<br>&nbsp;<div class="tenor-gif-embed" data-postid="4971763" data-share-method="host" data-width="100%" data-aspect-ratio="2.294930875576037"><a href="https://tenor.com/view/eyeofsauron-allseeingeye-lotr-gif-4971763">Eyeofsauron Allseeingeye GIF</a> from <a href="https://tenor.com/search/eyeofsauron-gifs">Eyeofsauron GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
<br>&nbsp;


<p>5. Combien d'anneaux Sauron a-t-il donné aux Hommes ?
<br><input type="radio" name="5" value="a" onclick="Engine(5, this.value)"><font color="#353C42">a.
</font>9
<br><input type="radio" name="5" value="b" onclick="Engine(5, this.value)"><font color="#353C42">b.
</font>5
<br><input type="radio" name="5" value="c" onclick="Engine(5, this.value)"><font color="#353C42">c.
</font>7
<br><input type="radio" name="5" value="d" onclick="Engine(5, this.value)"><font color="#353C42">d.
</font>3</p>

<br>&nbsp;

<p>6. Qui sont les premiers à rencontrer Gandalf après sa mort présumée ?
<br><input type="radio" name="6" value="a" onclick="Engine(6, this.value)"><font color="#353C42">a.
</font>Frodo, Sam et Gollum
<br><input type="radio" name="6" value="b" onclick="Engine(6, this.value)"><font color="#353C42">b.
</font>Saroumane
<br><input type="radio" name="6" value="c" onclick="Engine(6, this.value)"><font color="#353C42">c.
</font>Merry et Pippin
<br><input type="radio" name="6" value="d" onclick="Engine(6, this.value)"><font color="#353C42">d.
</font>Aragorn, Legolas et Gimli</p>

<br>&nbsp;
<div class="tenor-gif-embed" data-postid="3551563" data-share-method="host" data-width="100%" data-aspect-ratio="2.0"><a href="https://tenor.com/view/gandalf-happy-dance-lord-of-the-rings-lotr-gif-3551563">Gandalf GIF</a> from <a href="https://tenor.com/search/gandalf-gifs">Gandalf GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
<br>&nbsp;

<p>7. Comment le Gondor a-t-il appelé le Rohan à l'aide à l'approche de l'armée du Mordor ?
<br><input type="radio" name="7" value="a" onclick="Engine(7, this.value)"><font color="#353C42">a.
</font>Gandalf et Pippin ont chevauché jusqu'à Edoras pour prévenir Theoden
<br><input type="radio" name="7" value="b" onclick="Engine(7, this.value)"><font color="#353C42">b.
</font>Pippin a allumé le feu d'Amôn Din
<br><input type="radio" name="7" value="c" onclick="Engine(7, this.value)"><font color="#353C42">c.
</font>Le Gondor n'a jamais appelé le Rohan à l'aide
<br><input type="radio" name="7" value="d" onclick="Engine(7, this.value)"><font color="#353C42">d.
</font>Denethor a demandé à Gandalf d'utiliser sa magie, puisqu'il est censé être un magicine ultrapuissant</p>

<br>&nbsp;


<p>8. Qui a attaqué l'Isengard ?
<br><input type="radio" name="8" value="a" onclick="Engine(8, this.value)"><font color="#353C42">a.
</font>Les aigles
<br><input type="radio" name="8" value="b" onclick="Engine(8, this.value)"><font color="#353C42">b.
</font>Les Rohirrim
<br><input type="radio" name="8" value="c" onclick="Engine(8, this.value)"><font color="#353C42">c.
</font>Les Ents
<br><input type="radio" name="8" value="d" onclick="Engine(8, this.value)"><font color="#353C42">d.
</font>Merry et Pippin à eux tous seuls</p>

<br>&nbsp;
<div class="tenor-gif-embed" data-postid="12388086" data-share-method="host" data-width="100%" data-aspect-ratio="2.155844155844156"><a href="https://tenor.com/view/lotr-waiting-impatient-pippin-and-gif-12388086">Lotr Waiting GIF</a> from <a href="https://tenor.com/search/lotr-gifs">Lotr GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
<br>&nbsp;


<p>9. Qui a capturé Frodo and Sam à Ithilien?
<br><input type="radio" name="9" value="a" onclick="Engine(9, this.value)"><font color="#353C42">a.
</font>La compagnie de Faramir
<br><input type="radio" name="9" value="b" onclick="Engine(9, this.value)"><font color="#353C42">b.
</font>Les Nazgûls
<br><input type="radio" name="9" value="c" onclick="Engine(9, this.value)"><font color="#353C42">c.
</font>L'armée du Mordor
<br><input type="radio" name="9" value="d" onclick="Engine(9, this.value)"><font color="#353C42">d.
</font>Merry et Pippin</p>

<br>&nbsp;

<p>10. Qui a tué le roi sorcier d'Angmar ?
<br><input type="radio" name="10" value="a" onclick="Engine(10, this.value)"><font color="#353C42">a.
</font>Arwen
<br><input type="radio" name="10" value="b" onclick="Engine(10, this.value)"><font color="#353C42">b.
</font>Merry
<br><input type="radio" name="10" value="c" onclick="Engine(10, this.value)"><font color="#353C42">c.
</font>Faramir
<br><input type="radio" name="10" value="d" onclick="Engine(10, this.value)"><font color="#353C42">d.
</font>Eowyn</p>

<br>&nbsp;
<div class="tenor-gif-embed" data-postid="12803340" data-share-method="host" data-width="100%" data-aspect-ratio="2.413793103448276"><a href="https://tenor.com/view/witch-king-of-angmar-witch-king-this-is-my-power-power-of-the-one-ring-lord-of-the-rings-gif-12803340">Witch King Of Angmar This Is My Power GIF</a> from <a href="https://tenor.com/search/witchkingofangmar-gifs">Witchkingofangmar GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
<br>&nbsp;

<p><input class="button" type="button" name="Results" value="Résultats" onclick="NextLevel()">
<br>&nbsp;
</p></form>
</body>


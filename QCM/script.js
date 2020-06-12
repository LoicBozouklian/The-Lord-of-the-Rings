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
  
  
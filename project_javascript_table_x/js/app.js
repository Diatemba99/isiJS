/* 
========================================================================================================================
============ Ceci est programme qui permet de calculer et afficher automatiquement la table de multiplication ==========
============ d'une valeur saisie par l'utilisateur. Si la valeur est inférieure à 2, les boutons '-' et       ==========
============ 'CALCULER' seront désactivés. Le bouton '-' diminue la valeur saisie et le bouton '+' l'augmente ==========
============ Le bouton 'EFFACER' permet d'effacer le contenu de l'input et de la table affichée               ==========
========================================================================================================================
*/





// Création d'une fonction principale qui contient tout les scripts du programme
(function () {
  const buttons = document.querySelectorAll('.bouton')

  //declenchement de facon infinie du programme
  buttons.forEach(function (button) {

    // des qu'on clique sur "-" ou "+" on fait appel la fonction
    button.addEventListener('click', function () {
        if (button.classList.contains('moins')) 
        {
          document.getElementById("champ").value--
        }
        else if (button.classList.contains('plus')) 
        {
          document.getElementById("champ").value++
        }

        // on récupere la valeur contenue dans l'input saisie par le user
      let valeurInput = document.getElementById('champ').value;


      // si la valeur est inferieur a 2 on desactive les boutons
      if (valeurInput <= 2) 
      {
        document.querySelector('.moins').disabled = true;
        document.querySelector('#calculer').disabled = true;

      } 
      // si la valeur est superieur a 2 on active les boutons
      else if (valeurInput > 0) 
      {
        document.querySelector('.moins').disabled = false;
        document.querySelector('#calculer').disabled = false;
      }
    })
  })



  //=======================================================
  // Fonction qui permet d'effacer le contenu de l'input 
  document.getElementById("effacer").onclick = function () 
  {
    document.getElementById("champ").value = "";
    document.getElementById("table").innerHTML = "";
  }



  // ========================================================
  // Focntion qui permet d'afficher la table de multiplication
  document.getElementById("calculer").onclick = function () 
  {

    // Number() permet de convertir un objet un en type number
   let num = Number(document.getElementById('champ').value);

  //  on vérifie que la valeur saisie est supérieur à 2 et qu'elle est un entier
    if(num <= 2 && !isNaN(num))
    {
      alert("Ce programme ne permet pas de multiplier avec ce nombre")
    
    }
    else
    {

      // je vide la table precedemment affichée avant d'afficher la nouvelle table
      document.getElementById("table").innerHTML = "";
      for (var i = 1; i <= 10; i++) 
    {
      let afficheTable = document.getElementById('table');

      // mettre la taille de police à 20pt
      afficheTable.style.fontSize = "20pt";

      // change la couleur de la police en blanc
      afficheTable.style.color = "white";

      // affichage de la table de multiplication choisie
      afficheTable.innerHTML += num + "  x  " + i + " = " + (num * i) + "<br/>"
    }
    }
    
  }


})()


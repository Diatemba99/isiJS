// Creation d'une fonction

// function multiplier() {
//   alert("ok")
//   document.getElementsById("calculer").disabled = true;

// }
// function reset() {
//   document.getElementById("effacer").reset();
// }

(function (){ 
  const buttons = document.querySelectorAll('.counterBtn')
  let count = 0
  

 
  //declenchement de facon infinie du programme
  // cette boucle permet d'eviter d'actualiser la page pour 
  // voir le résultat 
  buttons.forEach(function (button) {

    // des qu'on clique sur "Ajouter" ou "Diminuer" on call la fonction
    button.addEventListener('click', function () {
      if (button.classList.contains('prevBtn')) 
        {
          // incrementer s'il clique sur "Ajouter"
          // count--
          document.getElementById("champ").value--
        } 
          else if (button.classList.contains('nextBtn')) 
        {
          // desincrementer s'il clique sur "Diminuer"
          // count++
          document.getElementById("champ").value++
        }
        // document.getElementById("table").innerHTML = count;
        document.getElementById("counter").innerHTML = count;

      // Cette partie n'est pas obligatoire c'est juste pour 
      // changer de couleur au cas ou la valeur est positive ou negative
     
      let count = document.getElementById('champ')
      // counter.textContent = count

      if (count <= 2) {
        document.querySelector('.prevBtn').disabled = true;
        document.querySelector('#calculer').disabled = true;
        
      } else if (count > 0) {
        document.querySelector('.prevBtn').disabled = false;
        document.querySelector('#calculer').disabled = false;


      } else {
        // document.getElementsById("dim").disabled = false;

      }
    })

    

  })

  /*for (let i = 0; i < 13; i++)
  {
    let table ;
    let valeur = document.getElementById("chiffre").value ;
    let result = i * valeur;      
   console.log(`${i} * ${valeur} = ${result}`);
   document.getElementById("table").innerHTML = `${i} * ${count} = ${result}`;

    // affichage.innerHTML = `${i} * ${count} = ${result}`;
   //  let  affichage = document.getElementsById("table")

  }*/
  document.getElementById("effacer").onclick = function()
  {
    document.getElementById("champ").value = "" ;
    // document.getElementById('table')= "";

  }

 document.getElementById("calculer").onclick = function()
  {
    var num;
    num=Number(document.getElementById('champ').value);
    for(var i=1; i<=10; i++){
      var pTag= document.getElementById('table');
      pTag.style.fontSize = "25pt";
      pTag.style.color = "grey";
      pTag.innerHTML += num + "  x " + i + " = " + (num*i) + "<br/>" 
    }
  }
  

})()


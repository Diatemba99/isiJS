// Creation d'une fonction

(function () {
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
          count--
        } 
          else if (button.classList.contains('nextBtn')) 
        {
          // desincrementer s'il clique sur "Diminuer"
          count++
        }


      // Cette partie n'est pas obligatoire c'est juste pour 
      // changer de couleur au cas ou la valeur est positive ou negative
     
      const counter = document.querySelector('#counter')
      counter.textContent = count

      if (count < 0) {
        counter.style.color = 'red'
      } else if (count > 0) {
        counter.style.color = 'green'
      } else {
        counter.style.color = '#333333'
      }
    })
  })



})()

function multiplier() {
  alert("ok")
}
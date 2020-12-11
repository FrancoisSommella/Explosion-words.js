const titre = document.querySelector('h1');            //selectioner le h1
charming(titre);                                       //appliquer le decoupage en span

titre.addEventListener('mouseenter', (e) => {          //ecouter l'évenement au passage de curseur

  let lettres = Array.from(e.target.childNodes);       //creer un array a partir de tous les enfants de la cible survolée

  for(i = 0; i < lettres.length; i++) {                //boucle pour chaque lettre

    TweenMax.to(lettres[i],1,{                         //methode de greensock pour animé les lettres,1(seconde),
      x: Math.floor(Math.random() * 500 - 250),        //num arrondi(au hasard entre 0 et 1) * ... pour obtenir une position random
      y: Math.floor(Math.random() * 500 - 250),
      z: Math.floor(Math.random() * 500 - 250),        //axe de profondeur
      rotation: Math.floor(Math.random() * 500 - 250), //rotation de la lettre
      ease: Circ.easeOut                               //facon dont l'animation va se faire (easing greensock dispo sur site)
    })
  }


  titre.addEventListener('mouseleave', () => {         //ecouter l'évenement au depart de curseur

    for(k = 0; k < lettres.length; k++) {

     TweenMax.to(lettres[k],1,{                        //remettre en position initiale les lettres
       x: 0,
       y: 0,
       z: 0,
       rotation: 0,
       ease: Power4.easeIn                             //methode greensock easeIn = lent au debut, rapide a la fin
     })
    }
  })
})

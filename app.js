const titre = document.querySelector('h1');
charming(titre);

titre.addEventListener('mouseenter', (e) => {

  let lettres = Array.from(e.target.childNodes);

  for(i = 0; i < lettres.length; i++) {

    TweenMax.to(lettres[i],1,{
      x: Math.floor(Math.random() * 500 - 250),
      y: Math.floor(Math.random() * 500 - 250),
      z: Math.floor(Math.random() * 500 - 250),
      rotation: Math.floor(Math.random() * 500 - 250),
      ease: Circ.easeOut
    })
  }


  titre.addEventListener('mouseleave', () => {

    for(k = 0; k < lettres.length; k++) {

     TweenMax.to(lettres[k],1,{
       x: 0,
       y: 0,
       z: 0,
       rotation: 0,
       ease: Power4.easeIn
     })
    }
  })
})

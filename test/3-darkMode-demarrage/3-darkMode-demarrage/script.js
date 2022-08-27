console.log('connecté'); 

const banniere = document.querySelector('.banniere-titre');
const fas = document.querySelector('.fa-moon');
const switche=document.querySelector('.switch');
const btn = document.querySelector('.btn'); 


btn.addEventListener('click', () => {
    const body = document.body;
//console.log('test');
    if(body.classList.contains('container')){

        body.classList.add('container-change')
        body.classList.remove('container')
        banniere.innerHTML="Light mode"

        btn.classList.add('btn-active')
        btn.classList.remove('btn')

        switche.classList.add('switchi')
        switche.classList.remove('switch')

        fas.classList.add('fa-sun')
        fas.classList.remove('fa-moon')

    } else if(body.classList.contains('container-change')){

        body.classList.add('container')
        body.classList.remove('container-change')
        banniere.innerHTML="Dark mode"

        btn.classList.add('btn')
        btn.classList.remove('btn-active')


        switche.classList.add('switch')
        switche.classList.remove('switchi')

        fas.classList.add('fa-moon')
        fas.classList.remove('fa-sun')
    }
   // console.log('test');



/* correction avec toggle

// Je sélectionne et je stocke
// la DIV switch-box
const switchBox = document.querySelector('.switch-box'); 
console.log(switchBox); 
// la DIV btn (le cercle)
const btn = document.querySelector('.btn'); 
console.log(btn)
// l'icône
const icone = document.querySelector('i'); 
console.log(icone); 
// la DIV container
const container = document.querySelector('.container'); 
console.log(container); 
// le titre
const titre = document.querySelector('h1'); 
console.log(titre); 


// Je soumets la DIV switch à une action au clic
switchBox.addEventListener('click', function(){
    console.log('DIV cliquée !'); 

    // Je déplace le cercle
    //btn.style.left = "60px";


    // J'utilise .classList.toggle
    // classList.toggle() permet d'alterner une classe
    btn.classList.toggle('btn-change'); 
    // Je déplace l'icône
    icone.classList.toggle('icone-change'); 
    // Je change l'icône
    icone.classList.toggle('fa-sun'); 
    // La DIV switch change de couleur de fond
    switchBox.classList.toggle('switch-change');
    // La DIV container change de couleur de fond
    container.classList.toggle('container-change'); 

    // Je modifie le texte du titre
    if(titre.innerText === "DARK MODE"){
        titre.innerText = "LIGHT MODE"; 
    }else{
        titre.innerText = "DARK MODE"; 
    }

}); 



*/
})
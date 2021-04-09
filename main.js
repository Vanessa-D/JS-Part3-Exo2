// Fonction qui transforme le style de l'élément ciblé par l'id en display none au clic du bouton "Masquer"
function takeOff(){
    document.getElementById("texte").style.display="none";
}
// ... et le réintroduit au clic du bouton "Afficher"
function display(){
    document.getElementById("texte").style.display="block";
}


// OR style.visibility="hidden" et style.visibility="visible" pour que la div reste dans le flux

// OR .hidden = true et .hidden = false



// Méthode addEventListener() qui permet d’enregistrer une fonction qui sera appelée lors du déclenchement 
// de l'évènement => fonction fléchée :

// 1- Stockage des différents éléments HTML

//let button1 = document.getElementById("button1");
//let button2 = document.getElementById("button2");
//let texte = document.getElementById("texte");

// 2- On attache ensuite un gestionnaire d’évènement click aux boutons avec addEventListener()
// On passe deux arguments à cette méthode : le nom de l'évènement qu’on souhaite prendre en charge 
// et le code à exécuter (qui prendra souvent la forme d’une fonction) en cas de déclenchement de cet évènement

//button1.addEventListener("click", () => {
    //texte.style.display = "block";
//});

//button2.addEventListener("click", () => {
    //texte.style.display = "none";
//});



// Syntaxe avec onclick qui représente le gestionnaire d’évènement pour l’évènement click de l’élément courant 
// --> fonction nommée classique : 

// element.event = function (){ } --> idInput.onblur = function functionName() {instructions;}

//let button1 = document.getElementById("button1"); 
//let button2 = document.getElementById("button2");
//let texte = document.getElementById("texte");

//function display(){
    //texte.style.display = "block";
//}
//function takeOff(){
    //texte.style.display = "none"
//}
// Ici, pas besoin de l'attribut onclick dans le DOM car on a déjà récupéré les id des boutons --> variables
//button2.onclick = takeOff;
//button1.onclick = display;
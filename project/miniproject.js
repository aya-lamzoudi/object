var prompt = require('prompt-sync')();
library = [
  { titre: ' red queen ', nom: 'lisa', prix: 120, quantite: 50 },
  { titre: 'live', nom: 'lisa', prix: 120, quantite: 50 },
];
function ajouter(library) {
  let titre = prompt('entre le titre de livre: ');
  let nom = prompt("entre le nom de l'auteur: ");
  let prix = parseFloat(prompt('entre le prix de livre '));
  let quantite = parseFloat(prompt('entre la quantite de cette livre '));
  let object = new Object();

  object.titre = titre;
  object.nom = nom;
  object.prix = prix;
  object.quantite = quantite;
  library[library.length] = object;
}
function affichage(library) {
  for (let i = 0; i < library.length; i++) {
      console.log(library[i].titre.toLowerCase());
  }
}
function recherche(library) {
  let recherche = prompt('entrer le titre de livre :');
  found = false;
  for (i = 0; i < library.length; i++) {
    if (library[i].titre.toUpperCase() == recherche.toUpperCase()) {
      found = true;
      break;
    }
  }
  if (found) {
    console.log('le live exist .');
  } else console.log('le live ne exist pas .');
}
function mettreajourquantite(library) {
  let titre = prompt(
    "s'il te plaît entre le titre du livre dont tu veux changer la quantité ",
  );

  index = -1;
  for (let i = 0; i < library.length; i++) {
    if (library[i].titre == titre) {
      index = i;
      break;
    }
  }
  if (index == -1) {
    console.log(' cette livre ne pas exist:');
  } else {
    let quantite = prompt("s'il te entrer  la quantité ");
    library[index].quantite = quantite;
  }
  console.log(library);
}
function Supprimer(library) {
  let newlibrary;
  let titre = prompt(
    "s'il te plaît entre le titre du livre tu veux supprimer ",
  );

  index = -1;
  for (let i = 0; i < library.length; i++) {
    if (library[i].titre == titre) {
      index = i;
      break;
    }
  }
  if (index == -1) {
    console.log(' cette livre ne exist pas :');
  } else {
    for (let i = 0; i < library.length; i++) {
      if (library[i] == library[index]) {
        continue;
      } else {
        newlibrary.push(library[i]);
      }
    }
  }
  library = newlibrary;
  console.log(library);
}

do {
  console.log(`
        MENU:
     1. Ajouter un livre au stock.
     2. Afficher tous les livres disponibles. 
     3. Rechercher un livre par son titre. 
     4. Mettre à jour la quantité d'un livre.
     5. Supprimer un livre du stock. 
     6. Afficher le nombre total de livres en stock.
     7.quitter`);
  let choix;
  do {
    choix = parseInt(prompt('entre votre choix: '));
  } while (choix <= 0 || choix > 7);

  switch (choix) {
    case 1:
      ajouter(library);
      break;
    case 2:
      affichage(library);
      break;
    case 3:
      recherche(library);
      break;
    case 4:
      mettreajourquantite(library);
      break;
    case 5:
      Supprimer(library);
      break;
    case 6:
      console.log(library.length);
      break;
  }
} while ((choix = !7));

var prompt = require("prompt-sync")();
team =[
    {id: 1,
    nom:"reda",
    prenom: "joth",
    numeroMaillot: 7,
    poste:"gardien",
    age : 23,
    buts: 12,
    date: new Date(2026, 6, 7),
    statut: "titulaire"
    },
    {id: 2,
    nom:"hamza",
    prenom: "ouch",
    numeroMaillot: 8,
    poste:"milieu",
    age : 24,
      buts: 47,
      date: new Date(2026, 6, 8),
    statut:"remplacant"
    },
]
let id = 3;
let addmanage = {
    ajouterjoueur: function(team){
    let newjoueur = {};
    newjoueur.ad = id;
    id++;
    let age;
    newjoueur.nom = prompt("enter le nom de joueur: ")
      newjoueur.prenom = prompt("enter le prenom de joueur: ")
      newjoueur.numeroMaillot = prompt("enter le numeroMaillot: ");
         do {
        age = parseInt(prompt("enter age de joueur: "));
      } while (age < 21 || age >43)
    newjoueur.age = age;
    newjoueur.buts= prompt("enter buts de joueur: "),
    newjoueur.date=new Date() 
    do {
      statu = parseInt(prompt("1.titulaire \n 2. remplaçant \n choisi le statut de: "));
      if (statu == 1) {
        newjoueur.statut = "titulaire"
      } else { newjoueur.statut = "remplaçant" }
    }while(statu>2 || statu <1)
    team[team.length]=newjoueur
  },
ajoutermultiplejoueur: function(team) {
  
  let taille = parseInt(prompt("entrer le nombre de joueur : "));
  for (let i = 0; i < taille; i++) {
    let newjoueur = {};
    newjoueur.ad = id;
    let age;
    id++;
    newjoueur.nom = prompt("enter le nom de joueur: ");
      newjoueur.prenom = prompt("enter le prenom de joueur: ");
      newjoueur.numeroMaillot = prompt("enter le numeroMaillot: ");
      do {
        age = parseInt(prompt("enter age de joueur: "));
      } while (age < 21 || age >43)
    newjoueur.age = age;
    newjoueur.buts = prompt("enter buts de joueur: ");
    newjoueur.date = new Date();
        do {
      statu = parseInt(prompt("1.titulaire \n 2. remplaçant \n choisi le statut de: "));
      if (statu == 1) {
        newjoueur.statut = "titulaire"
      } else { newjoueur.statut = "remplaçant" }
    }while(statu>2 || statu <1)
    team[team.length] = newjoueur
  }
}
  
}
function ajouter(team){
    let choice;
    do{
    console.log(`
        1. Ajouter un nouveau joueur. 
        2. Ajouter plusieurs joueurs successivement. 
        3. retourner au menu.
        `)
         choice=parseInt(prompt("entrer votre choix : ")
        );
  } while (choice > 3 || choice < 1)
  switch (choice) {
    case 1: addmanage.ajouterjoueur(team);
      break;
    case 2: addmanage.ajoutermultiplejoueur(team);
      break;
    case 3 : menu();
      break;
  }  
}
let triaffichage = {
  afficherparalpha: function (team) {
    for (let i = 0; i < team.length-1; i++){
      for (let j = 0; j < team.length - i - 1; j++){
        if (team[j].nom[0] > team[j + 1].nom[0]) {
          let tmp = team[j]
          team[j] = team[j + 1]
          team[j+1]=tmp
        }
      }
    }
    console.log(team);
  },
  afficherparage: function (team) {
    for (let i = 0; i < team.length-1; i++){
      for (let j = 0; j < team.length - i - 1; j++){
        if (team[j].age > team[j + 1].age) {
          let tmp = team[j]
          team[j] = team[j + 1]
          team[j+1]=tmp
        }
      }
    }
    console.log(team);
  },
  post: function (team, nompost) {
    let player = 0;
       for (let i = 0; i < team.length; i++){
           if (team[i].poste.toUpperCase() === nompost.toUpperCase()) {
                console.log(team[i]);
                player++
                          }
        }
        if (player== 0) {
          console.log("there is no player in this post");
        }
   }
,
  afficherparpost: function (team) {
    let choice;
    do {
      console.log(" 1. défenseur\n2. milieu\n3.attaquant\n4.gardian  ")
      choice = parseInt(prompt("entrer votre choix : "))
    } while (choice > 4 || choice < 1)
    switch (choice) {
      case 1: this.post(team, "defenseur");
        break;
      case 2:this.post(team, "milieu");
        break;
      case 3:this.post(team, "attaquant");
        break;
      case 4:this.post(team, "gardien");
        break;
    }

  }

  
}
function affichage(team) {
  let choice;
  do {
    console.log(`
    1. afficher les joueurs par ordre alphabétique. 
    2. afficher les joueurs par âge. 
    3. Afficher les joueurs regroupés ou filtrés par poste. 
    4. retourner au menu.
        `)
    choice= parseInt(prompt("entrer votre choix : "))
  } while (choice > 4 || choice < 1)
  switch (choice) {
    case 1: triaffichage.afficherparalpha(team)
      break;
     case 2: triaffichage.afficherparage(team)
      break;
     case 3: triaffichage.afficherparpost(team)
      break;
     case 4: menu()
      break;
 }
  
}
    

























function menu(){
let choix;
do{
console.log(`
       MENU:
       1. Ajouter un joueur 
       2. Afficher les joueurs 
       3. Modifier un joueur 
       4. Supprimer un joueur 
       5. Rechercher un joueur 
       6. Statistiques 
       7. quitter
       `)
   do {
    choix = parseInt(prompt("entrer votre choix : "));
    } while (choix < 0 || choix > 7)

  switch (choix) {
    case 1:
      ajouter(team);
      break;
    case 2:
      affichage(team);
      break;
    case 3:
    modifier(team);
      break;
    case 4:
      Supprimer(team);
      break;
    case 5:
        recherche(team);
      break;
    case 6:
      statistique(team);
      break;
  }
}while(choix != 7)
}
menu()

function ajouterjoueur(team){
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
  }
 function ajoutermultiplejoueur(team) {
  
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
  

var prompt = require("prompt-sync")();

let contact = [ 
    {
        name: "aya",
        number: "0638606094",
        email:"aya.lamzoudi01@gmail.com",
    },
    {
        name: "lisa",
        number: "0638453409",
        email:"lisa@gmail.com",
    },
]
function add(contact) {
    let newcontact={}
    newcontact.name = prompt("Saisissez le nom de la contact: ")
    newcontact.number = prompt("Saisissez le numero: ")
    newcontact.email= prompt("Saisissez E-mail: ")
    contact.push(newcontact);
 }
function modifier(contact) {
    let existname = prompt("Saisissez le nom du contact que vous souhaitez modifier: ")
    let index= -1
    for (let i = 0; i < contact.length; i++) {
        if (contact[i].name == existname) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        console.log("Ce contact n'existe pas. ");
    } else {
         contact[i].number = ("Saisissez le nouveau numero: ")
         contact[i].email=("Saisissez le nouveau E-mail : ")
    }
    console.log(contact);
}
function supprimer(contact) {
    let newcontact = [];
    let existname = prompt("Saisissez le nom du contact que vous souhaitez supprimer: ")
    let index=-1
    for (let i = 0; i < contact.length; i++) {
        if (contact[i].name.toUpperCase() == existname.toUpperCase()) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        console.log("Ce contact n'existe pas. ");
    } else {
        let j = 0;
        for (let i = 0; i < contact.length; i++) {
            if (index = i) {
                continue;
            } else {
                newcontact[j] = contact[i]
                 j++
            }
        }
        
      contact.length = 0
      for (i = 0; i < newcontact.length; i++){
        contact[i] = newcontact[i];
        }
        console.log(' ce contact a ete Supprimer . ');
    }
    
    
    
}
function affichage(contact) {
    for (let person in contact) {
        console.log ( person , contact[person])
    }
}
function recherche(contact) {
    let existname = prompt("Saisissez le nom du contact: ");
    let found =false
    for (let i = 0; i < contact.length; i++) {
        if (contact[i].name.toUpperCase() == existname.toUpperCase()) {
            found = true
            let index =i
            break;
        }
    }
    if (found) {
      console.log(contact[index]);
    } else {
        console.log("Ce contact n'existe pas. ");
    }
}


let choix;
do {
    console.log(`
           MENU:
        1. Ajouter un Contact.
        2. Modifier un Contact.
        3. Supprimer un Contact.
        4. Afficher Tous les Contacts.
        5. Rechercher un Contact.
        6. quitter.
        `)
    do {
        choix = parseInt(prompt("entrer votre choix : "));
    } while (choix < 0 || choix > 6)
    
    switch (choix) {
        case 1: add(contact);
            break;
        case 2: modifier(contact);
            break;
        case 3: supprimer(contact);
            break;
        case 4: affichage(contact);
            break;
        case 5: recherche(contact);
            break;
    }
}while(choix != 6)
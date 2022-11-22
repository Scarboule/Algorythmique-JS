class Joueur {
    constructor(nom) {
        this.nom = nom;
        this.SanteMental = 1;
    }
}

const music = [
    'Wejdene - Anissa',
    'Scorpion - Like a hurricane',
    'Toto - Hold the line',
    'Linking park - Numb',
    'Bosh - Djomb'
]

let feu = 30;

console.log('Donnez un nom a votre personnage');

function start(){
    const saisie = document.getElementById("form").value;
    const perso = new Joueur(saisie);
    let change = 0;

    console.log('Le nom du joueur est', perso.nom);
        
    while(feu > 0){
        let i = Math.floor(Math.random() * 5);
        console.log('Ils vous restent', feu, "feux rouges avant d'arriver a destination.")
        console.log('"', music[i],'"', 'passe a la radio.')
        if(music[i] === 'Wejdene - Anissa'){
            perso.SanteMental -= 1;
            change += 1;
            console.log('Votre santé mental diminue, elle est à', perso.SanteMental,'/10.');
            console.log('Vous changer de taxi.')
            if(perso.SanteMental === 0){
                console.log("*EXPLOSION*")
                console.log(perso.nom, 'a exploser, il hors de ma vue(ma vuuuue)');
                break;
            }
        }
        console.log('-----------------------------------------');
        feu -= 1;
    }
    console.log("Vous êtes enfin arrivez ! GG !");
    console.log("Vous avez dû changer de taxi", change, "fois.");
    console.log("Ils vous restaient", perso.SanteMental, "/10 de santé mental." )
}
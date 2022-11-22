class Jason {
    constructor() {
        this.name = "Jason";
        this.pv = 100;
    }
}


const caract = [
    "nerd",
    "sportif",
    "roux",
    "charismatique",
    "énervant",
    "jovial",
    "condescendant",
    "immature",
    "lent",
    "énigmatique",
    "entousiaste",
    "superficiel",
    "gentil",
    "tristement insignifiant et dépressif, complexer pauvre et désagreable"
];

const names = [
    "Gertrude",
    "Marshall",
    "Timmy",
    "Token",
    "Kenny",
    "Cartman",
    "Butters",
    "Wendy",
    "Stan",
    "Kyle",
    "Randy",
    "Chef"
];

class Survivor{
    constructor(){
        this.name = names[Math.floor(Math.random() * (12))];
        this.cara = caract[Math.floor(Math.random() * (14))];
        this.isDead = false;
    }
}


function start(){
    let jason = new Jason();
    
    let survivor1 = new Survivor();
    let survivor2 = new Survivor();
    let survivor3 = new Survivor();
    let survivor4 = new Survivor();
    let survivor5 = new Survivor();
    let survivors =[
        survivor1,
        survivor2,
        survivor3,
        survivor4,
        survivor5
    ];
    let alive = 5;
    while(jason.pv >= 1 && alive >= 1){
        survivors.forEach(element => {
            if(element.isDead == false){
                let p = Math.floor(Math.random() * 10);
                console.log(p);
                if(p < 4){
                    element.isDead = true;
                    alive -= 1;
                    console.log(element.name, 'à été tué par Jason.');
                    console.log('Il reste', alive, 'survivants.');
                }else if (p < 8){
                    jason.pv -= 10;
                    console.log(element.name,'à esquiver et contre attaquer !');
                    console.log('Jason perd 10pv.');
                    console.log('Il reste', jason.pv, 'pv à Jason.');
                }else {
                    jason.pv -= 15;
                    element.isDead = true;
                    alive -= 1;
                    console.log(element.name, 'à infliger une attique suicide sur Jason !');
                    console.log('Jason perd 15pv.');
                    console.log('Il reste', alive, 'survivants.');
                    console.log('Il reste', jason.pv, 'pv à Jason.');
                }
            console.log(1);
            }
        });
        console.log(jason.pv, alive);
    }
    if(alive < 1){
        console.log('Tout les survivants sont mort.');
    }else if(jason.pv < 1){
        console.log('Jason à été déchus, Bravo !');
    }
    console.log('Voici le nom de ceux qui ont donner leur vie dans cette battaille contre le tueur en serie.')
    survivors.forEach(element => {
        if(element.isDead == true){
            console.log(element.name, 'qui était', element.cara);
        }
    });
}
start();
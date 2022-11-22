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
    new Jason();
    let survivor[1] = new Survivor();
    let survivor[2] = new Survivor();
    let survivor[3] = new Survivor();
    let survivor[4] = new Survivor();
    let survivor[5] = new Survivor();
    let alive = 5;
    while(Jason.pv > 0 || alive != 0){
        let i = 0;
        while(i < alive){  
            if(survivor[i].isDead != true){
                i++;
            } else{
                let p = Math.floor(Math.random());
                if(p < 0.4){
                    survivor[i].isDead = true;
                    alive -= 1;
                    console.log(survivor[i].name, 'à été tué par Jason.');
                    console.log('Il reste', alive, 'survivants.');
                }else if (p < 0.8){
                    Jason.pv -= 10;
                    console.log(survivor[i].name,'à esquiver et contre attaquer !');
                    console.log('Il reste', Jason.pv, 'à Jason.');
                }else {
                    Jason.pv -= 15;
                    survivor[i].isDead = true;
                    alive -= 1;
                    console.log(survivor[i].name, 'à infliger une attique suicide sur Jason !');
                    console.log('Il reste', alive, 'survivants.');
                    console.log('Il reste', Jason.pv, 'à Jason.');
                }
                console.log(1);
            }
            console.log(2);            
        }
        console.log(3);
    }
    console.log(4);
}

start();

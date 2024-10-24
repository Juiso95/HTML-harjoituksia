//Perus Eläin luokka
class Elain {
    constructor(nimi) {
        this.nimi = nimi;
    }
//Eläinten ääntely pohja
    aani() {
        console.log("Eläin tekee äänen ");
    }
}
//Koira luokka
class Koira extends Elain {
    aani() {
        console.log("Koira sanoo: Wuf!");
    }
}
//Kissa luokka
class Kissa extends Elain {
    aani() {
        console.log("Kissa sanoo: Miu!");
    }
}
//Koira ja kissa oliot
const koira = new Koira("Rekku");
koira.aani();

const kissa = new Kissa("Mirre");
kissa.aani();
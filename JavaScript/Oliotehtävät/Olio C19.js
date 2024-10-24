//Henkilö luokka joka toimii pohjana
class Henkilo {
    constructor(nimi, ika) {
        this.nimi = nimi;
        this.ika = ika;
    }
//tietojen tarkennus ja pohja jolla tiedot näytetään
    tiedot() {
        console.log(`Hei, nimeni on ${this.nimi} ja olen ${this.ika} vuotta vanha.`)
    }
}
//Opiskelija luokka, pohja opiskelijanumeron lisäämiseen tietoihin
class Opiskelija extends Henkilo {
    constructor(nimi, ika, opiskelijanumero) {
        super(nimi, ika);
        this.opiskelijanumero = opiskelijanumero;
    }
//Tarkennettu tietojen lisäys
    tiedot() {
        super.tiedot();
        console.log(`Opiskelijanumeroni on ${this.opiskelijanumero}.`);
    }
}
//Opiskelija olioiden lisäys ja tietojen tulostus
const opiskelija = new Opiskelija("Petra", 19, "25272");
const opiskelija1 = new Opiskelija("Paavo", 20, "64732");
opiskelija.tiedot();
opiskelija1.tiedot();
//Käyttäjä luokka
class Kayttaja {
    constructor(nimi, sposti) {
        this.nimi = nimi;
        this.sposti = sposti;
    }
//Käyttäjä tervehdys
    tervehdys() {
        console.log(`Hei, ${this.nimi}!`);
    }
}
//Käyttäjä olio
const kayttaja = new Kayttaja(`Pekka`, `Pekka.Perala@perala.com`);
kayttaja.tervehdys();
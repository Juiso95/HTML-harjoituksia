//Henkilö luokka, pohjaluokka Työntekijäluokalle
class Henkilo {
    constructor(nimi,ika) {
        this.nimi = nimi;
        this.ika = ika;
    }
//Esittelyn pohja
    esittely() {
        console.log(`Hei, olen ${this.nimi}, ${this.ika} vuotta vanha.`);
    }
}
//Työntekijäluokka joka peritytyy Henkilö luokasta

class Tyontekija extends Henkilo {
    constructor(nimi, ika, tyonumero) {
        super(nimi, ika);
        this.tyonumero = tyonumero;
    }
//Tarkennettu esittely joka sisältää työnumeron
    esittely() {
        super.esittely();
        console.log(`Työnumeroni on ${this.tyonumero}.`);
    }
}
//Työntekijä olioiden luonti
const tyontekija = new Tyontekija("Salla", 22, "43627");
const tyontekija1 = new Tyontekija("Marieela", 20, "52235");
const tyontekija2 = new Tyontekija("Kalle", 29, "10394");
tyontekija.esittely();
tyontekija1.esittely();
tyontekija2.esittely();
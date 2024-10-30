//Luokka
class Henkilo{
    constructor(etunimi, sukunimi, ika)
    {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.ika = ika;
    }

// Tietojen tulostuksen pohja
NaytaTiedot() {
    console.log("Etunimi:", this.etunimi);
    console.log("Sukunimi:", this.sukunimi);
    console.log("Ikä", this.ika);
}
}
// Oliot
const risto = new Henkilo("Risto", "Reipas", 10);

/*const risto = new Henkilo("Risto", "Reipas", 10);
risto.sukunimi = "Reippaampi";
risto.ika = 11;
*/

// Tietojen tulostus
// console.log("Etunimi:", risto.etunimi, "Sukunimi:", risto.sukunimi, "ika", risto.ika);
risto.NaytaTiedot();
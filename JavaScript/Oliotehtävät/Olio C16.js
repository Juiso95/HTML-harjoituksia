//Kirja luokan luonti
class Kirja {
    //Kirjaluokan tarkemmat tiedot
    constructor(otsikko, kirjailija, sivumaara) {
        this.otsikko = otsikko;
        this.kirjailija = kirjailija;
        this.sivumaara = sivumaara;
    }
    //Kirjojen tietojen haku kaava
    tiedot() {
        console.log(`Otsikko: ${this.otsikko}, Kirjailija: ${this.kirjailija}, Sivumäärä: ${this.sivumaara}`);
    }
}
//Kirja oliot
const kirja1 = new Kirja(`Harry Potter ja Viisasten kivi`, `J.K. Rowling`, 335);
const kirja2 = new Kirja(`Game of Thrones`, `George R.R. Martin`, 734);
const kirja3 = new Kirja(`Tuntematon sotilas`, `Väinö Linna`, 490);
kirja1.tiedot();
kirja2.tiedot();
kirja3.tiedot();
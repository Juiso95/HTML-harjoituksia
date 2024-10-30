//Luokka
class Elain{
    constructor(nimi = "kana") {
        this._nimi = nimi;
    }


//Get elementti nimen hakemista varten
    get nimi() {
        return this._nimi;
    }

//Set elementti nimen asettamista varten
    set nimi(uusiNimi) {
        this._nimi = uusiNimi;
    }

//syö metodi
    Syo() {
        console.log(this.nimi + " syö - mumm mumm mumm");
    }
}
//Koira luokka
class Koira extends Elain {
    constructor(nimi = "", tassut = 4, turkki = "") {
        super(nimi);
        this._tassut = tassut;
        this._turkki = turkki;
    }

//get elementti tassujen ja turkin asettamista varten
    get tassut() {
        return this._tassut;
    }

    get turkki() {
        return this._turkki;
    }

//set elementti turkin värin asettamiseksi
    set turkki(uusiTurkki) {
        this._turkki = uusiTurkki;
    }

//Ääntelehtii metodin luonti
    Aantelehtii(aani) {
        console.log(this._nimi + " " + aani);
    }
}
/*
//Olion luonti
const kana = new Elain();
console.log("Olio kana, nimi: " + kana.nimi);

//Kanan nimen muutos
kana.nimi = "kaakattaja";
console.log("Kanan uusi nimi: " + kana.nimi);

//Syönti metodi
kana.Syo();
*/

//Koira olion luonti oletuskonstruktorilla
const koira = new Koira("Haukkuja");
console.log("Olio koira, nimi: " +koira.nimi);
console.log("Tassujen määrä: " + koira.tassut);

//Muutetaan koiran nimi ja tassujen määrä
koira.nimi = "Wuffe";
koira._tassut = 2;
console.log("Koiran uusi nimi: " + koira.nimi);
console.log("Tassujen uusi määrä: " + koira._tassut + " + pyörät");

//Ääntelehtii metodin kutsu
koira.Aantelehtii("haukkuu");
class Ajoneuvo{
    constructor(merkki, malli, vuosimalli) {
        this.merkki = merkki;
        this.malli = malli;
        this.vuosimalli = vuosimalli;
    }

    //Get elementti ja Set elementti
    get merkki() {
        return this._merkki;
    }

    set merkki(uusiMerkki) {
        this._merkki = uusiMerkki;
    }

    get malli() {
        return this._malli;
    }

    set malli(uusiMalli) {
        this._malli = uusiMalli;
    }

    get vuosimalli() {
        return this._vuosimalli
    }

    set vuosimalli(uusiVuosimalli) {
        this._vuosimalli = uusiVuosimalli;
    }

//Ajo, Kiihdytys, Jarrutus, Käynnistys ja Sammutus tietojen tulostus

    aja() {
        console.log("Ajetaan ajoneuvolla: " + this._merkki + " " + this._malli + " " + this._vuosimalli);
    }

    kiihdytys() {
        console.log("Kiihdytetään ajoneuvolla: " + this._merkki + " " + this._malli + " " + this._vuosimalli);
    }

    jarrutus() {
        console.log("Jarrutetaan ajoneuvolla: " + this._merkki + " " + this._malli + " " + this._vuosimalli);
    }

    kaynnistys() {
        console.log("Käynnistetään ajoneuvo: " + this._merkki + " " + this._malli + " " + this._vuosimalli);
    }

    sammuta() {
        console.log("Sammutetaan ajoneuvo: " + this._merkki + " " + this._malli + " " + this._vuosimalli);
    }
}

//Ajoneuvoluokan perivä Auto luokka

class Auto extends Ajoneuvo {
    constructor(merkki, malli, vuosimalli, pyorat = 4){
        super(merkki, malli, vuosimalli);
        this._pyorat = pyorat;
    }
    /*
    class Auto extends Ajoneuvo {
    }
    */
}

class Moottoripyora extends Auto {
    constructor(merkki, malli, vuosimalli, pyorat = 2) {
        super(merkki, malli, vuosimalli,pyorat);
    }
}

//Testiajo luokka (MB olion luonti autoluokan tiedoilla)

class TestiAjo {
    constructor() {
        const mersu = new Auto("Mersedes-Benz", "S Sarja", 2024);
        const moottoripyora = new Moottoripyora("Kawazaki", "Ninja", 2020);


        mersu.aja();
        console.log("Renkaita kulkuneuvossa on " + mersu._pyorat)
        moottoripyora.aja();
        console.log("Renkaita kulkuneuvossa on " + moottoripyora._pyorat);
    }
}

//Testiajo olio
const testiAjo = new TestiAjo();

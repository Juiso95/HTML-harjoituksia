//Luokka
class Kuvakirja{

    //Sivujen lukumäärä muuttuja
    #SivujenLukumaara;

//Constructor määritetään sivujen määrä
    constructor(sivumaara = 16) {
        this.#SivujenLukumaara = sivumaara;
    }

//Metodi jolla haetaan sivumäärä tieto
    HaeSivumaara() {
        return this.#SivujenLukumaara;
    }
}

//Olion luonti
const kuvakirjaOletus = new Kuvakirja();
console.log(`Oletussivumäärä: ${kuvakirjaOletus.HaeSivumaara()}`);

//Olio itse annteulla sivumäärällä
const kuvakirjaMukautettu = new Kuvakirja(24);
console.log("Mukautettu sivumäärä: " + kuvakirjaMukautettu.HaeSivumaara());

//Neliö luokka
class Nelio {
    constructor(sivupituus) {
        this.sivupituus = sivupituus;
    }
//Neliön sivujen laskukaava
    alue() {
        return this.sivupituus * this.sivupituus;
    }
}
//Neliö olio
const nelio = new Nelio(4);
console.log(nelio.alue());
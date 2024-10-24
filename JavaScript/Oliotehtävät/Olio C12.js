class Auto {
    //Luokan tiedot
    constructor(merkki, malli, vuosimalli) {
        this.merkki = merkki;
        this.malli = malli;
        this.vuosimalli = vuosimalli;
    }
//Tiedon tulostus pohja
    tiedot() {
        console.log(`Merkki: ${this.merkki}, Malli ${this.malli}, Vuosimalli: ${this.vuosimalli}`);
    }
}
//Auto oliot
const auto1 = new Auto(`Toyota`, `Supra Mark IV`, 1995);
const auto2 = new Auto(`Nissan`, `Silvia S14`, 1997);
auto1.tiedot();
auto2.tiedot();
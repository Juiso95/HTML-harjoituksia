//Perus eläin luokka
class Elain {
    constructor(nimi, ika, vari) {
        this.nimi = nimi;
        this.ika = ika;
        this.vari = vari;
    }
//Ääntelehtimisen luonti
    aantelehtii(aani) {
        console.log(`Eläin pitää ääntä ` + aani);
    }
}
//Kissa olion luonti
const kissa = new Elain("Mirre");
kissa.ika = 4;
kissa.vari = "Musta";
console.log("Kissan nimi: " + kissa.nimi);
console.log("Ikä: " +kissa.ika);
console.log("Turkin väri: " +kissa.vari);
kissa.aantelehtii("Miu Mau");

//Koira olion luonti
const koira = new Elain("Vuffe");
koira.ika = 3;
koira.vari = "Ruskea";
console.log("Koiran nimi: " + koira.nimi);
console.log("Ikä: " + koira.ika);
console.log("Turkin väri: "+ koira.vari);
koira.aantelehtii("Woof Woof");
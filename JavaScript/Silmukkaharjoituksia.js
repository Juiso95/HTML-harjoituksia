// Laske lainan kokonais summa
console.log("S01");
function laina() {
    let maksu = 5000;
    let korko = 1.02;
    let aika = 2;
    let korkosumma;
    for (var i = 1; i <= aika; i++) {
        maksettava = (maksu * korko);
    }
    korkosumma = maksettava - maksu;
    console.log("Joudut maksamaan "
        + maksu + "euron lainasta korkoa "
        + korkosumma + " jolloin maksettavaa tulee yhteensä "
        + maksettava);
}
laina();
console.log("...........................................................................")

// Kerro annettava luku
console.log("S02");
function kertoma(luku) {
    let kertoma = 1;
    for (var i = 1; i <= luku; i++) {
        kertoma *= i;
    }
    console.log("Luvun " + luku + " kertoma on: " + kertoma);
}
kertoma(6);
kertoma(9);
console.log("...........................................................................")

// Etsi luvun esiintymä
console.log("S03");
function esiintyma() {
    let taulukko = [6,7,2,4,3,8,1,9,0,3,5,7,3,6,8,2,4,3];
    for (var i = 0; i < taulukko.length; i++) {
        if (taulukko[i] == 3) {
            console.log("Nro 3 on taulukon " + i + ". jäsen");
            i= taulukko.length;
        }
    }
}
esiintyma();
console.log("...........................................................................")

// Käännä sana toisinpäin
console.log("S04");
function tekstinKaanto(teksti) {
    let lause = "";
    for (var i = teksti.length -1; i >= 0; i--) {
        lause += teksti[i];
    }
    console.log(lause);
}
tekstinKaanto("Gepardi");
console.log("...........................................................................")

// Maksimiarvo
console.log("S05");
function maksimi() {
    let taulukko1 = [6,4,3,8,7,9,7,2,1];
    let maksimi = taulukko1[0];
    for (var i = 1; i < taulukko1.length; i++) {
        if (taulukko1[i] > maksimi) {
            maksimi = taulukko1[i];
        }
    }
    console.log("Taulukon " + taulukko1 + " maksimiarvo on: " + maksimi);
}
maksimi()
console.log("...........................................................................")


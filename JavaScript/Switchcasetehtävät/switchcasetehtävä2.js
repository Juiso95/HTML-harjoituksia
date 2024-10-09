function arvo()
{
    let numerot = [];
    let numeroidenMaara = 7
    let minNumero = 1
    let maxNumero = 40

    function satunnaisetNumerot(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    while (numerot.length < numeroidenMaara) {
        let numero = satunnaisetNumerot(minNumero, maxNumero);

        if (!numerot.includes(numero)) {
            numerot.push(numero);
        }
    }
    return numerot.sort((a, b) => a - b);
}
let lottonumerot = arvo()
document.getElementById("vastaus").innerHTML = "Arvotut lottonumerot ovat: " + lottonumerot;

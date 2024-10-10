//Function lottonumeroiden arpomiseen

function arvo()
{
    let numerot = [];
    let numeroidenMaara = 7
    let minNumero = 1
    let maxNumero = 40

    function satunnaisetNumerot(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

//Tarkastus jo arvotuille numeroille löytyykö numeroiden joukosta samoja numeroita = arpoo uudet jos on samoja

    while (numerot.length < numeroidenMaara) {
        let numero = satunnaisetNumerot(minNumero, maxNumero);

        if (!numerot.includes(numero)) {
            numerot.push(numero);
        }
    }
    return numerot.sort(function(a, b){return a - b});
}

//Function napille jotta saadaan arvottua numerot html sivulle + arvottujen numeroiden tulostus.

function tulostaNumerot() {
    let lottonumerot = arvo();
    document.getElementById("vastaus").innerHTML = "Arvotut lottonumerot ovat: " + lottonumerot.join(', ');
}
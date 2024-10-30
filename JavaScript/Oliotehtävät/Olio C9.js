class Pankkitili {
constructor() {
    this.saldo = 0;
}

//Talletettavan määrän pohja

talleta(maara) {
    if (maara > 0) {
        this.saldo += maara;
        console.log(`Talletettu ${maara} euroa. Uusi saldo: ${this.saldo} euroa.`);
    } else {
        console.log("talletettava määrä on virheellinen.");
    }
}

//Nostettavan määrän pohja

nosta(maara) {
    if (maara > 0) {
        if (maara <= this.saldo) {
            this.saldo -= maara;
            console.log(`Nostettu ${maara} euroa. Uusi saldo: ${this.saldo} euroa.`);
        } else {
            console.log("Nostettava määrä ylittää tilin saldon.");
        }
    } else {
            console.log("Nostettava määrä on virheellinen.");
        
}
}
}

//Pankkitili luokan käyttö
const tili = new Pankkitili();
tili.talleta(200);
tili.nosta(150);
tili.nosta(100);
tili.talleta(-50);
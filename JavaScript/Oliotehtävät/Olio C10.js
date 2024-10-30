//Yleinen Eläin luokka
class Elain {
    constructor(nimi) {
        this.nimi = nimi;
    }

    aanesta() {
        console.log(`${this.nimi} tekee ääntä.`);
    }
}

//Eläin luokan perivät yksilölliset eläin luokat
class Koira extends Elain {
    aanesta() {
        console.log(`${this.nimi} haukkuu: Wof Woof!`);
    }
}

class Lintu extends Elain {
    aanesta() {
        console.log(`${this.nimi} laulaa: La la la!`);
    }
}

class Kala extends Elain {
    aanesta() {
        console.log(`${this.nimi} kuplii vedessä`)
    }
}

//Eläin oliot joilla kutsutaan aanestaa metodia
const rekku = new Koira("Rekku");
const tsirppa = new Lintu("Tsirppa");
const nemo = new Kala("Nemo");

rekku.aanesta();
tsirppa.aanesta();
nemo.aanesta();
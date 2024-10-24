//Elektroniikka luokka joka toimii pohjana
class Elektroniikka {
    //Käynnistys pohja
    kaynnista() {
        console.log("Elektroniikka käynnistyy");
    }
    //Sammutus pohja
    sammuta() {
        console.log("Elektroniikka sammuu");
    }
}
//Tietokoneluokka joka periytyy Elektroniikka luokasta
class Tietokone extends Elektroniikka {
    //Yksilöllistetty tietokoneen käynnistys
    kaynnista() {
        console.log("Tietokone käynnistyy Windowsiin");
    }
    //Yksilöllistetty tietokoneen Sammutus
    sammuta() {
        console.log("Tietokone sammuttaa Windowsin");
    }
}
//Puhelin luokka joke periytyy Elektroniikka luokasta
class Puhelin extends Elektroniikka {
    //Yksilöllistetty puhelimen käynnistys
    kaynnista() {
        console.log("Puhelin käynnistyy Androidiin");
    }
    //Yksilöllistetty puhelimen sammutus
    sammuta() {
        console.log("Puhelin sammuttaa Androidin");
    }
}
//Tietokone ja puhelin oliot
const tietokone = new Tietokone();
tietokone.kaynnista();
tietokone.sammuta();

const puhelin = new Puhelin();
puhelin.kaynnista();
puhelin.sammuta();